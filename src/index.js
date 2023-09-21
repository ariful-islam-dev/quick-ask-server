const http = require('http');
const app = require('./app.js');
const connectDB = require('./db/index.js');
console.log(app)

const server = http.createServer(app);

const PORT = process.env.PORT || 4000

const main = async()=>{
    try{
        await connectDB();
        server.listen(PORT, ()=>{
            console.log("Server is running on port", PORT);
        })
    }catch(err){
        console.log("Database Error");
        console.log(err)
    }
}

main();