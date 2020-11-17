import mongoose, {ConnectionOptions} from 'mongoose'
import config from './config'

(async()=>{

    try {
        const mongooseOptions: ConnectionOptions={
            useUnifiedTopology: true,
            useNewUrlParser: true

        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,mongooseOptions)
        console.log('Base de datos ha sido conectada a:',db.connection.name) 
        
    } catch (error) {
        console.error(error)
    }
})()