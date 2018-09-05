# ADR-0001 Sequelize ORM

Use [Sequelize](http://docs.sequelizejs.com/) as ORM to back data in database. It seems to offer similar features to what I'm used to with Rails (migrations, models).

Use Postgres as a database (with eventuel view to deploy to Heroku).

## Useful commands

`sequelize migration:create --name "UpdateExpenses"`

`sequelize db:migrate`

`sequelize seed:generate --name demo-expenses`

`sequelize db:seed:all`

## Notes

Stores migration and seed related data in a separate `SequelizeMeta` table
