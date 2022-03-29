const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express()

// app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }))

app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 5002

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
