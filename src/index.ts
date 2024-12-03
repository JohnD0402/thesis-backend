import express, { Request, Response } from "express";
import cors from "cors";

let data = {
  temperature: "",
  humidity: "",
  lightBlock: "",
  rainValue: "",
  lux: "",
};

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/postDeviceReadings", (request: Request, response: Response) => {
  const { temperature, humidity, lightBlock, rainValue, lux} = request.body;

  data = {
    temperature,
    humidity,
    lightBlock: "",
    rainValue: "",
    lux: "",
  };
  response.status(200).send("ok");
});

app.get("/getDeviceReadings", (request: Request, response: Response) => {
  response.status(200).send(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
