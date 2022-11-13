import express from "express";
import { initializeApp, cert } from "firebase-admin/app";
import { todoRouter } from "./todo";

const serviceAccountPath =
  "./todo-b10c4-firebase-adminsdk-5m88s-b58eb32ccb.json";
initializeApp({ credential: cert(serviceAccountPath) });

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Running on port ${port}`));
app.use(express.json());

/*
We want to include this /v1 as a form of API versioning.
When we want to radically change the API, we can bump the version
by using "/v2", while still keeping all the v1 paths.

This is generally good practice because there are always users that
don't update their clients (people who don't have automatic updates
turned on for their apps, etc). We want those people to still be able
to use the product, so we can keep /v1 paths alive for "legacy" clients
while using /v2 paths for updated clients.
*/
app.use("/v1", todoRouter);

app.get("/", async (req, res) => {
  res.json({ success: true });
});
