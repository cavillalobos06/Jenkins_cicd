import express, { Request, Response } from "express";
import { json } from "node:stream/consumers";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/hola", (req: Request, res: Response) => {
  res.json({ status: "ok", message: "Hola" });
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
