import dotenv from "dotenv";

import {join, resolve} from 'path';

dotenv.config({path: join(resolve(), "../config.env")})
console.log(process.env.LOG_PATH) 
console.log(process.env.LOG_LEVEL)  