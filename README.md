<h1 align="center">Trafello 🚡</h1>
<p align="center">
  <img width="128px" src="assets/logo.png"/>
</p>
<p align="center">
  Apollo GraphQL Express Server starter template based on <abbr title="Aerial Tramway">teleferik</abbr> 🚡
</p>
<p align="center">
  <a href="https://trafello.herokuapp.com/graphql">View API Live</a>
  &nbsp;•&nbsp;
  <!--<a href="https://boocard.vercel.app/">View Staged API Live</a>
  &nbsp;•&nbsp; -->
  <a href="https://github.com/Asim-Tahir/trafello/issues/new?assignees=&labels=Bug&template=bug_report.md&title=">Report Bug</a>
  &nbsp;•&nbsp;
  <a href="https://github.com/Asim-Tahir/trafello/issues/new?assignees=&labels=Feature&template=feature_request.md&title=">Request Feature</a>
</p>

## What is `Trafello`?

Trafello is a __GraphQL server starter template__ based on  [Apollo GraphQL Express middleware](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-express). 

**Trafello doesn't include any database entegration.** For now, you have to do all database integration manually 😢.

### Why you should use `trafello`:
- When creating a project with Apollo Graphql Server, focus on the features in your project instead of repeating the same processes (e.g. pubsub, mocks, directives etc.) over and over.
- No longer have to install and configure the libraries (e.g. jest, winston etc.) that you will use in your project.
- Entire project is wrapped in typescript 🦾. ready to define Typescript type definitions under [`src/@types`](src/@types/module.d.ts)
- Even the mock server you will need in frontend development is ready to use.
- You can easily deploy to heroku via `Deploy to Heroku` button.
- First class `docker` support via [`docker-compose`](docker-compose.yml)

<!-- GETTING STARTED -->
## Getting Started

### Deploy to Heroku

Do you want to make a quick start and test the graphql api? Lets try `Deploy to Heroku` button.

[![Deploy on Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Asim-Tahir/trafello)

### Edit on Codesandbox

You can rapidly start development at codesandbox. Codesandbox running on your browser.

<a href="https://githubbox.com/Asim-Tahir/trafello">
  <img src="assets/codesandbox.svg" width="16">
  Edit on Codesandbox
</a>

### Local Development Environment

1. Clone the repo in your project directory:
   ```bash
   $ git clone https://github.com/Asim-Tahir/trafello.git # via git https
   # or
   $ git clone git@github.com:Asim-Tahir/trafello.git # via git ssh
   # or
   $ gh repo clone Asim-Tahir/trafello # via github cli tool
   ```
2. Install dependencies:
   ```bash
   $ npm i
   $ yarn
   ```
3. Rename [`.env.example`](.env.example) file as `.env`.
4. Fill enviroment variable into `.env`.
5. Run server:
  ```bash
  $ npm run dev
  $ yarn dev
  ```

## Usage

Initially, two resolvers were added as an example.
- `ping`

> `ping` query is for check whether the server is working properly. Expected to return `pong` in response. [e.g.](example/query/ping.graphql)
- `randomNumber`
> `randomNumber` query is for testing server functionality.. Its return random generated number between in range(default 0 to 100). This range can be defined in parameter as `min` and `max`. [e.g.](example/query/randomNumber.graphql)


## Roadmap

- [ ] [Other middleware and server integration](https://www.apollographql.com/docs/apollo-server/integrations/middleware/) 
- [ ] Integration of most used databases as external template.
  - Mongoose & Typegoose `as Trafello Goose`
  - Sequelize ORM `as Trafello Seq`
  - TypeORM `as Trafello Tiftik`
  - MikroORM `as Trafello Mikrop`
- [ ] [RESTAPI datasource support](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest)
- [ ] [SQL datasource support](https://github.com/cvburgess/SQLDataSource)
- [ ] [MongoDB datasource support](https://github.com/GraphQLGuide/apollo-datasource-mongodb/)
- [ ] [File upload support](https://www.apollographql.com/docs/apollo-server/data/file-uploads/)
- [ ] Mock server support for testing and frontend development.
- [ ] [Subscriptions support (ws)](https://www.apollographql.com/docs/apollo-server/data/subscriptions/)
- [ ] [Duplicate request handling support](https://www.apollographql.com/docs/apollo-server/data/data-sources/#using-with-dataloader) Like a [SWR](https://swr.vercel.app/)
- [ ] [Caching support](https://www.apollographql.com/docs/apollo-server/data/data-sources/#caching)
  - Memcached
  - Redis
- [ ] Authantication setup via <abbr title="JSON Web Token"><code>JWT</code></abbr>  support. Its could be a seperate template.
- [ ] Encryption via `Bcyrpt` support.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.