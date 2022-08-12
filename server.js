const express = require('express');
const app = express();
app.use(express.json());

app.get('/kpi', (req, res) => {
    res.json({ registered: 1254, professionals: 40, surgeries: 4287, hospitals: 8642 })
})

app.listen(5000, () => {
    console.log("Server Listening on Port 5000")
})

