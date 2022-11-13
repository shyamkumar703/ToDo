import express from "express";
import { initializeApp, cert } from "firebase-admin/app";

const serviceAccountPath =
  "./todo-b10c4-firebase-adminsdk-5m88s-b58eb32ccb.json";
initializeApp({ credential: cert(serviceAccountPath) });

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Running on port ${port}`));
app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ success: true });
});
