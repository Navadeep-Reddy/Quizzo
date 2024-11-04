const express = require('express');
const quizzRoutes = require('./src/quizz/routes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
}))
app.use("/api/v2/quizz", quizzRoutes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

