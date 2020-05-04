import * as restify from 'restify'

export const cors = (req, resp, next) =>{
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    resp.setHeader('Access-Control-Allow-Headers', 'Origin , X-Requested-With, Content-Type, Accept');
    resp.setHeader('Access-Control-Allow-Credentials', "true");
    return next()
  }