import 'dotenv/config';


//configuration 

export default {
  //all js schemas in the models folder
  schema: './src/models/*.js',
  
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL
  } 
};