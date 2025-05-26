import express from "express"
import client from "prom-client";
import { metricsMiddleware } from "./metrics/countGaugeHistogram.js";
// import { cleanupMiddleware } from "./metrics/countAndGauge.js";
// import { requestCountMiddleware } from "./metrics/requestCount.js";

const app = express();

// app.use(requestCountMiddleware);
// app.use(cleanupMiddleware);
app.use(metricsMiddleware);


app.get("/", (req,res) =>{
    
    res.json({
       message: "Hii There"
    });
})

app.get("/cpu",async (req,res) => {
    
    await new Promise(s => setTimeout(s,10000));
    res.json({
        message: "Cpu Output: ",
    });
})


app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})

app.get("/user", async (req, res) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    res.send({
        name: "Satyam",
        age: 25,
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});