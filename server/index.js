import path from 'path'
import express from 'express'

const publicPath = path.resolve(__dirname, '../public')

const server = express()
server.set('env', process.env.NODE_ENV)
server.set('port', process.env.PORT || '3000')

server.use(express.static(publicPath))

import database from './database'
server.get('/api/events', (request, response) => {
  console.log(database.queries.getEvents()+'')
  database.queries.getEvents()
    .then(events => {
      response.json(events)
    })
    .catch(error => {
      response.status(500).json({error})
    })
});

server.get('/*', (request, response) => {
  response.sendFile(publicPath+'/index.html')
});

if (process.env.NODE_ENV !== 'test'){
  console.log('http://localhost:'+server.get('port')+'/')
  server.listen(server.get('port'))
}

export default server
