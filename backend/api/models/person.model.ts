import * as mongoose from 'mongoose'

export interface Person extends mongoose.Document {
  name: string,
  phone: string,
  cpf: string
}

const personSchema = new mongoose.Schema({
  name: {
    type: String
  },
  phone: {
    type: String,    
  },
  cpf: {
    type: String,
    unique: true
  }
})

 export const Person = mongoose.model<Person>('Person', personSchema)
