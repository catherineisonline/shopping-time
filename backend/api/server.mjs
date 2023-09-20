import express from 'express';

const app = express();
const port = 4000;


app.get("/", (req, res) => {
    res.send("Running server");
});

app.listen(port, () => console.log(`Running on port ${port}`));