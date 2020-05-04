import {Router} from '../../common/router'
import * as restify from 'restify'
import {Person} from '../models/person.model'

class PersonRouter extends Router {

  constructor(){
    super()
  }

  applyRoutes(application: restify.Server){

    application.get('/person', (req, resp, next)=>{
      Person.find().then(this.render(resp,next))
    })

    application.get('/person/:id', (req, resp, next)=>{
      Person.findById(req.params.id)
          .then(this.render(resp, next))
    })

    application.post('/person', (req, resp, next)=>{
      let person = new Person(req.body)
      person.save().then(this.render(resp, next))
    })

    application.put('/person/:id', (req, resp, next)=>{
        const options = {new : true}
        Person.findByIdAndUpdate(req.params.id, req.body, options)
            .then(this.render(resp, next))
    })

    application.patch('/person/:id', (req, resp, next)=>{
      const options = {new : true}
      Person.findByIdAndUpdate(req.params.id, req.body, options)
          .then(this.render(resp, next))
    })

    application.del('/person/:id', (req, resp, next)=>{
      Person.remove({_id:req.params.id}).exec().then((cmdResult: any)=>{
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

export const personRouter = new PersonRouter()
