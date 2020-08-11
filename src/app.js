import express from "express";
import path from 'path';
import mongoose from 'mongoose';
import routes from './routes';
require('dotenv').config();

class App{

    constructor(){
        this.server = express();
        // `mongodb+srv://${process.env.DB_PASS}:${process.env.DB_PASS}@${process.env.DB_PASS}.kcav2.mongodb.net/${process.env.DB_PASS}?retryWrites=true&w=majority`
        mongoose.connect(process.env.DATABASE_CONNECTION_STRING,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        );

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        );
        
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }

}

export default new App().server;
