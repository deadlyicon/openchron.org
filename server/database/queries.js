import knex from './knex'

const getRecords = (table) =>
  knex.table(table).select('*')

const getEvents = (table) =>
  getRecords('events').orderBy('startedAt')


export default {
  getEvents
}
