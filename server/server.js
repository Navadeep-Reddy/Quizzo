const express = require('express');
const quizzRoutes = require('./src/quizz/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Worlsd");
})

app.use("/api/v1/quizz", quizzRoutes); //so here /api/v1/quizz + (path in routes.js )will execute that get function inside quizzRoutes

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

