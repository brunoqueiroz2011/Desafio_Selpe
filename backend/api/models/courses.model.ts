import * as mongoose from 'mongoose'

export interface Course extends mongoose.Document {
  name: string
}

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  }
})

 export const Course = mongoose.model<Course>('Course', courseSchema)
