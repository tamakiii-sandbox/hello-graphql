const express = require('express')
const expressPlayground = require('graphql-playground-middleware-express').default

const port = 4000
const host = '0.0.0.0'
const app = express()

app.get('/playground', expressPlayground({ endpoint: 'http://localhost:3000/graphql?' }))
app.listen(port, host, () => console.log(`🚀 http://${host}:${port}/playground`))