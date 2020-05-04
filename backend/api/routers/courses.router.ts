import {Router} from '../../common/router'
import * as restify from 'restify'
import {Course} from '../models/courses.model'

class CoursesRouter extends Router {

  constructor(){
    super()
  }

  applyRoutes(application: restify.Server){

    application.get('/courses', (req, resp, next)=>{
      Course.find().then(this.render(resp,next))
    })

    application.get('/courses/:id', (req, resp, next)=>{
      Course.findById(req.params.id)
          .then(this.render(resp, next))
    })

    application.post('/courses', (req, resp, next)=>{
      let course = new Course(req.body)
      course.save().then(this.render(resp, next))
    })

    application.put('/courses/:id', (req, resp, next)=>{
        const options = {new : true}
        Course.findByIdAndUpdate(req.params.id, req.body, options)
            .then(this.render(resp, next))
    })

    application.patch('/courses/:id', (req, resp, next)=>{
      const options = {new : true}
      Course.findByIdAndUpdate(req.params.id, req.body, options)
          .then(this.render(resp, next))
    })

    application.del('/courses/:id', (req, resp, next)=>{
      Course.remove({_id:req.params.id}).exec().then((cmdResult: any)=>{
        if(cmdResult.result.n){
          resp.send(204)
        }else{
          resp.send(404)
        }
        return next()
      })
    })

  }
}

export const coursesRouter = new CoursesRouter()
