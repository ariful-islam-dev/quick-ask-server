import http from 'http';
import app from './app.js';
import connectDB from './db/index.js';

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