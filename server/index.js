import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";

const app = express();

app.use(cors());

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  express.urlencoded({
    limit: "50mb",
  })
);

app.use("/api", router);
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
