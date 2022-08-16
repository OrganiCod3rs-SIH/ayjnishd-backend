require('dotenv');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const kpi = require('./routes/kpi.route')

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>")
})
app.use('/', kpi);


app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
    console.log(`Live on http://localhost:${port}`);
})

