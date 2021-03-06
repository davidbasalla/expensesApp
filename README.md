# Expenses app

React and Express

Initially set up following [this blog post](https://daveceddia.com/create-react-app-express-backend/)

[Trello board](https://trello.com/b/3KRyg5LT/programming-expenses-app)

## Development

Needs a global `pm2` install (which manages the NodeJS processes)

```
npm install --global pm2
```

To run locally:

```
cd ./server && yarn start
cd ./client && yarn start
```

Runs the server with `pm2` on Port 3001 and the React frontend on Port 3000

## Dependencies

- Node
- Express
- React
- Sequelize (Postgres)
- pm2

## Screenshots

![screenshot1](./screenshots/0001.png)
