console.log('test/setup.js')

import database from '../server/database'
global.database = database


beforeEach( () =>
  database.knex.migrate.latest().then(_ =>
    database.knex.schema.raw(`
      BEGIN;
      TRUNCATE "users"          RESTART IDENTITY CASCADE;
      TRUNCATE "events"         RESTART IDENTITY CASCADE;
      TRUNCATE "timelines"      RESTART IDENTITY CASCADE;
      TRUNCATE "timelineEvents" RESTART IDENTITY CASCADE;
      COMMIT;
    `)
  )
)
