# Registration and Login App

## Installation and startup on a local machine

1. Install MongoDB - If you don't have MongoDB, you can install it using [these instructions](https://www.mongodb.com/docs/manual/administration/install-community/).
2. Start MongoDB - The [installation instructions](https://www.mongodb.com/docs/manual/administration/install-community/) provide start and stop commands, which differ depending on the operating system being used.
3. Install API libraries - From the `api` directory run `npm install`.
4. Add a `.env` file - From the `api` directory run `cp .env.sample .env`
5. Start the Express server - From the `api` directory run `node server.js`. The server will begin listening for HTTP requests on port 8080.
6. Install frontend libraries - From the `ui` directory run `npm install`.
7. Add a `env` file - From the `ui` directory run `cp .env.local.sample .env.local`
8. Start the React app - From the `ui` directory run `npm start`. The frontend can be viewed [here](http://localhost:3000).
9. Try the [Sign Up](http://localhost:3000/signup) and [Sign In](http://localhost:3000/signin) pages.
10. Try to view the [Protected Resource](http://localhost:3000/protected-resource) page, both as a logged-in user and when not logged in.

## Tech stack

### API:

- ExpressJS
- MongoDB
- Mongoose
- jsonwebtoken
- bcrypt

### Frontend:

- React
- TypeScript
- React Router
- Axios
- React Hook Form
- Yup
- MUI
