import express, { json } from 'express';
import cors from 'cors';
//routes
import indexRouter from '../routes/index.route.mjs';

const app = express();
const port = 4000;

app.use(cors());
app.use(json());

app.use("/", indexRouter);
app.use("*", (req, res) => {
    res.send("404 - Route not found")
})

app.listen(port, () => console.log(`Running on port ${port}`));