## TechStack

### Client:

- React.
- react-router-dom.
- Typescript.
- React testing library / jest.
- Sass.
- Prettier.

### Server:

- Express.
- Typescript.
- mongoose
- eslint
- prettier

### DB:

- Mongodb

---

## How to run it:

- Setup a mongodb instance, use docker, set it up manually on your device... up to you. I would suggest you to use docker with the official mongodb image (https://hub.docker.com/_/mongo)

### .ENV for the server:

- Set the default port that you want the server to run in localhost.
  `ex: PORT=4000`
- Set the URL to your mongoDB instance.
  `ex: LOCALDB=mongodb://localhost:27017/GS`

### .ENV for client:

- Set the API URL.
  `ex: REACT_APP_API_URL=http://localhost:4000`

### Next steps:

- Populate the db using `npm run seed` on the server folder in your terminal.
- Turn on the server using `npm run start:dev` on the server folder in your terminal.
- Turn on the client using `npm run start` on the server folder in your terminal.

With this everything should be working 😄