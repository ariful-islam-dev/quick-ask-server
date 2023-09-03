import express from 'express';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import router from './routes/index.js';

const swaggerDocument = YAML.load("./swagger.yaml")



const app = express();

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument) );

app.use(express.json(), morgan("dev"))

// Router
    app.use("/api/v1", router)

export default app;