import dotenv from 'dotenv';

dotenv.config();
const env = {
  debug: process.env.DEBUG,
  database_url: process.env.DATABASE_URL,
  swapi_url: process.env.SWAPI_URL,

};
export default env;
