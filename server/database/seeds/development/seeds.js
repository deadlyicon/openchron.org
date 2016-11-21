import moment from 'moment'
import commands from '../../commands'

console.log(commands.createEvent)

const date = date => moment(date).valueOf()

exports.seed = knex =>
  commands.createEvent([
    {
      ownerId: 0,
      title: 'National Aeronautics and Space Administration began operation',
      startedAt: date('1958-10-01 00:00:00'),
      completedAt: date('1958-10-01 00:00:00'),
    },
    {
      ownerId: 0,
      title: 'Pioneer I: First NASA launch.',
      startedAt: date('1958-10-11 00:00:00'),
      completedAt: date('1958-10-11 00:00:00'),
    },
    {
      ownerId: 0,
      title: 'NASA research pilot John McKay made the last flight in the X-1E',
      startedAt: date('1958-11-07 00:00:00'),
      completedAt: date('1958-11-07 00:00:00'),
    },
    {
      ownerId: 0,
      title: 'The United States launched Pioneer 3',
      startedAt: date('1958-12-06 00:00:00'),
      completedAt: date('1958-12-06 00:00:00'),
    },
    {
      ownerId: 0,
      title: 'An Air Force Atlas booster placed into orbit a communications relay satellite',
      startedAt: date('1958-12-18 00:00:00'),
      completedAt: date('1958-12-18 00:00:00'),
    },
    {
      ownerId: 0,
      title: 'he United States launched Vanguard 2',
      startedAt: date('1959-02-17 00:00:00'),
      completedAt: date('1959-02-17 00:00:00'),
    },
  ])

