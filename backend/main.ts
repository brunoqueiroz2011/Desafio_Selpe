import {Server} from './server/server'
import {coursesRouter} from './api/routers/courses.router'
import {personRouter} from './api/routers/person.router'

const server = new Server()
server.bootstrap([coursesRouter,personRouter]).then(server=>{
  console.log('Server is listening on:', server.application.address())
}).catch(error=>{
  console.log('Server failed to start')
  console.error(error)
  process.exit(1)
})
