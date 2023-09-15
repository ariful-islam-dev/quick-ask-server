import express from "express";
import * as OpenApiValidator from "express-openapi-validator";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";


const swaggerDocument = YAML.load("./swagger.yaml");




const applyAllMiddleware = (app)=>{
    app.use([
        express.urlencoded({ extended: true }),
        express.json(),
        morgan("dev")
      ]);
      
      app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
      
      app.use(
        OpenApiValidator.middleware({
          apiSpec: "./swagger.yaml",
        })
      );
      
      return app;
}

export default applyAllMiddleware;
