import express, { Request, Response } from "express";
import cors from "cors";

let data = {
  temperature: "",
  humidity: "",
  lightBlock: "",
  rainValue: "",
  lux: "",
  control: {
    window: false,
    waterPump: false,
  },
};

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/postDeviceReadings", (request: Request, response: Response) => {
  const { temperature, humidity, lightBlock, rainValue, lux } = request.body;

  data = {
    ...data,
    temperature,
    humidity,
    lightBlock,
    rainValue,
    lux,
  };
  response.status(200).send("ok");
});

app.get("/getDeviceReadings", (request: Request, response: Response) => {
  response.status(200).send(data);
});

app.post("/control/window", (request: Request, response: Response) => {
  const { window } = request.body;

  data = {
    ...data,
    control: {
      ...data.control,
      window,
    },
  };

  response.status(200).send("ok");
});

app.post("/control/water_pump", (request: Request, response: Response) => {
  const { waterPump } = request.body;

  data = {
    ...data,
    control: {
      ...data.control,
      waterPump,
    },
  };

  response.status(200).send("ok");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
