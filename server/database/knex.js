import Knex from 'knex'

// paths are relative to build/server/database/knex.js
const config = require('../../../knexfile')[process.env.NODE_ENV]
const knex = Knex(config)

export default knex
