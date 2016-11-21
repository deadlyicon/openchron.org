
exports.up = (knex, Promise) =>
  Promise.all([

    knex.schema.createTable('users', (table) =>  {
      table.increments('id').primary()
      table.string('email').unique()
      table.string('password')
      table.timestamps()
    }),

    knex.schema.createTable('events', (table) => {
      table.increments('id').primary()
      table.integer('ownerId')
      table.string('title')
      table.bigint('startedAt').index()
      table.bigint('completedAt').index()
    }),

    knex.schema.createTable('timelines', (table) => {
      table.increments('id').primary()
      table.string('owner_id')
    }),

    knex.schema.createTable('timelineEvents', (table) => {
      table.integer('timelineId')
      table.integer('eventId')
    }),

  ])


exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('events'),
    knex.schema.dropTable('timelines'),
    knex.schema.dropTable('timelineEvents'),
  ])
