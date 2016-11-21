import knex from './knex'
import queries from './queries'

const createEvent = event =>
  knex
    .insert(event)
    .into('events')
    .returning('*')

export default {
  createEvent,
}
