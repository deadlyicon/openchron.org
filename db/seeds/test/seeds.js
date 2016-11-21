const moment = require('moment')

exports.seed = (knex) => {
  const date = date => moment(date).valueOf()

  const eventFixtures = [
    {
      ownerId: 0,
      title: 'Hitch slepts soundly',
      startedAt: date('1986-01-12 13:10:00'),
      completedAt: date('1986-01-18 08:42:00'),
    },
    {
      ownerId: 0,
      title: 'A dog was bleeding',
      startedAt: date('1986-01-13 03:10:00'),
      completedAt: date('1986-01-21 03:10:00'),
    },
    {
      ownerId: 0,
      title: 'Samson felt content with life',
      startedAt: date('1986-01-19 02:13:00'),
      completedAt: date('1986-01-27 11:56:00'),
    },
  ]

  const createEvents = () =>
    knex
      .insert(eventFixtures)
      .into('events')
      .returning('*')

  return createEvents().then(events => {
    console.log(`created ${events.length} events`)
  })
}
