import moment from 'moment'
import commands from '../../commands'

const date = date => moment(date).valueOf().toString()

const createEvents = () =>
  commands.createEvent([
    {
      ownerId: 0,
      title: 'Hitch slepts soundly',
      startedAt: date('1986-01-12 13:10:00'),
      completedAt: date('1986-01-18 08:42:00'),
    },
    {
      ownerId: 0,
      title: 'Spirit walked among his neighbors',
      startedAt: date('1986-01-13 03:10:00'),
      completedAt: date('1986-01-21 03:10:00'),
    },
    {
      ownerId: 0,
      title: 'Samson felt content with life',
      startedAt: date('1986-01-19 02:13:00'),
      completedAt: date('1986-01-27 11:56:00'),
    },
  ])

exports.seed = knex =>
  createEvents()
  .then(events => {
    // console.log(`created ${events.length} events`)
  })

