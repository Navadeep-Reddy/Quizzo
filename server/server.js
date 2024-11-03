const express = require('express');
const quizzRoutes = require('./src/quizz/routes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/v2/quizz", quizzRoutes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

