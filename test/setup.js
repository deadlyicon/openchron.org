import database from '../server/database'
global.database = database
global.knex = database.knex

const trucateAllTables = _ =>
  knex.schema.raw(`
    BEGIN;
    TRUNCATE "users"          RESTART IDENTITY CASCADE;
    TRUNCATE "events"         RESTART IDENTITY CASCADE;
    TRUNCATE "timelines"      RESTART IDENTITY CASCADE;
    TRUNCATE "timelineEvents" RESTART IDENTITY CASCADE;
    COMMIT;
  `)


beforeEach( () =>
  Promise.resolve()
  .then(_ => database.knex.migrate.latest())
  .then(_ => trucateAllTables())
  .then(_ => database.knex.seed.run())
)
