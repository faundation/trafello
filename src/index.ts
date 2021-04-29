console.clear();

import { config } from "dotenv";
config();
import "reflect-metadata";
import chalk from "chalk";
import express, { Response, Request } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import { buildSchema } from "type-graphql";
import { addMocksToSchema } from "@graphql-tools/mock";

import logger from "./helpers/logger";

import { MainResolver } from "./apollo/resolvers";
import mocks from "./apollo/mocks";

import {
  DateTimeResolver,
  EmailAddressResolver,
  JSONResolver,
  TimestampResolver,
  DateTimeMock as DateTime,
  JSONMock as JSON,
  TimestampMock as Timestamp,
  EmailAddressMock as EmailAddress,
} from "graphql-scalars";

import { ApolloServer } from "apollo-server-express";
// import { ApolloServer } from "apollo-server";

(async () => {
  const app = express();

  app.use(compression());
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
      credentials: true,
    })
  );
  // FOR LOGGING PURPOSE
  // if (process.env.NODE_ENV !== "production") {
  //   app.all("*", (req, res, next) => {
  //     console.dir(req);
  //     next(); // Passing the request to the next handler in the stack.
  //   });
  // }
  app.use(cookieParser());

  const schema = await buildSchema({
    resolvers: [MainResolver],
    dateScalarMode: "timestamp",
    scalarsMap: [
      { type: Timestamp, scalar: TimestampResolver },
      { type: DateTime, scalar: DateTimeResolver },
      { type: Date, scalar: DateTimeResolver },
      { type: JSON, scalar: JSONResolver },
      { type: EmailAddress, scalar: EmailAddressResolver },
    ],
  });

  const expressApollo = new ApolloServer({
    schema,
    mocks,
    context: ({ req, res }: { req: Request; res: Response }) => ({ req, res }),
    playground: true,
    introspection: true,
  });

  expressApollo.applyMiddleware({ app });

  console.info(`
  ,ggggggggggggggg,                 ,dPYb,           ,dPYb, ,dPYb,             
  Yb,_    88                         IP'\`Yb           IP'\`Yb IP'\`Yb             
   \`""    88                         I8  8I           I8  8I I8  8I             
          88                         I8  8'           I8  8' I8  8'             
          88   ,gggggg,    ,gggg,gg  I8 dP    ,ggg,   I8 dP  I8 dP    ,ggggg,   
          88   dP""""8I   dP"  "Y8I  I8dP    i8" "8i  I8dP   I8dP    dP"  "Y8ggg
    gg,   88  ,8'    8I  i8'    ,8I  I8P     I8, ,8I  I8P    I8P    i8'    ,8I  
      "Yb,,8P ,dP     Y8,,d8,   ,d8b,,d8b,_   \`YbadP' ,d8b,_ ,d8b,_ ,d8,   ,d8'  
        "Y8P' 8P      \`Y8P"Y8888P"\`Y8PI8"8888888P"Y8888P'"Y888P'"Y88P"Y8888P"    
                                      I8 \`8,                                     
                                      I8  \`8,                                    
                                      I8, ,8'                                    
                                      "Y8P'                                      
  `);

  app.listen({ port: process.env.PORT || 4000 }, () => {
    console.info(
      `${chalk.bgGreen.black(" SUCCESS ")} 🚀`,
      `Trafello GraphQL Server running on ${chalk.magentaBright(
        `http://localhost:${process.env.PORT || 4000}${
          expressApollo.graphqlPath
        }`
      )}`
    );

    console.info(
      `${chalk.bgBlueBright.black(" INFO ")}`,
      `If you want to ${chalk.bgYellowBright.black(
        " RESTART "
      )} the server, type ${chalk.green("rs")}.`
    );
  });
})();
