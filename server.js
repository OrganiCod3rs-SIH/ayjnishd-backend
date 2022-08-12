const express = require('express')
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())

app.get('/kpi', (req, res) => {
    res.json({ registered: 1254, professionals: 40, surgeries: 4287, hospitals: 8642 })
})

app.listen(port, () => {
    console.log(`Server Listening on Port ${port}`)
})

