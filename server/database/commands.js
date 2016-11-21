import knex from './knex'
import queries from './queries'

const getRecords = (table) =>
  knex.table(table).select('*')

const getEvents = (table) =>
  getRecords('events').orderBy('startedAt')


export default {
  getEvents
}
