import dotenv from 'dotenv'
dotenv.config()


export default{
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'productosdb',
    MONG_USER: process.env.MONGO_USER ||'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_LOCALHOST || 'localhost',
    PORT: process.env.PORT || 4000
}