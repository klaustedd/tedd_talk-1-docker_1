const express = require('express')
const mysql = require('mysql')
const mysqlCon = mysql.createConnection({
    host : 'tedd_talks-docker_1-db.tedd_talks-docker_1',
    user : 'root',
    password : 'root132'
})

const app = express()

app.get('/', (req, res) => {
    console.log("Connected to Endpoint")

    mysqlCon.query('SHOW DATABASES', (error, records) => {
        console.log(error)
        res.json(records)
    })
})

app.listen(3000, () => {
    console.log('Minha API esta funcionando')
})