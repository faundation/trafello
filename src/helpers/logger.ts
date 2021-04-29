import { createLogger, format, transports } from "winston";
import chalk from "chalk"

const formattized = format.combine(
  format.timestamp({ format: "DD/MM/YYYY HH:mm:ss:sss" }),
  format.ms(),
  format.prettyPrint(),
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${chalk.bgBlueBright.black(level)}]: ${message}`;
  })
);

const logger = createLogger({
  level: "INFO",
  format: formattized,
  // defaultMeta: { service: "user-service" },
  transports: [
    new transports.File({
      filename: "logs/error.log",
      level: "ERROR",
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(new transports.Console());
}

export default logger;
