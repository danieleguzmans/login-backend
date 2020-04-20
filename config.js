if(process.env.NODE_ENV === 'production'){
    DATABASE_URL = process.env.DATABASE_URL,
    PORT = process.env.PORT
}else{
    DATABASE_URL = 'mongodb://localhost/angular-auth',
    PORT = 3000
}
module.exports = {
    DATABASE_URL,
    PORT
}