import 'dotenv/config';


//configuration 

export default {
  //all js schemas in the models folder
  schema: './src/models/*.js',
  
  //folder name where the output will be stored
  out: './drizzle',

  //what dialect will the sql file will generate
  dialect: 'postgresql',
  
  //the credentials needed for drizzle
  dbCredentials: {
    url: process.env.DATABASE_URL
  } 
};