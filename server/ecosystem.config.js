module.exports = {
  apps: [
    {
      name: "ExpensesServer",
      script: "bin/www",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
