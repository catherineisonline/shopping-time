import express, { json } from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
    res.send("Running server");
});

app.listen(port, () => console.log(`Running on port ${port}`));