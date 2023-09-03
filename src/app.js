import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load("./swagger.yaml")



const app = express();

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument) );

app.use(express.json())

export default app;