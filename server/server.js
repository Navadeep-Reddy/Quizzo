const express = require('express');
const quizzRoutes = require('./src/quizz/routes'); //importing the router with many routes or api end points

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Worlsd");
})

app.use("/api/v1/quizz", quizzRoutes); //so here /api/v1/quizz + (path in routes.js )will execute that function inside quizzRoutes(routes.js)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

