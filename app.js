const express = require('express')
const cors = require('cors')

require('dotenv/config')

const authRouter = require('./routes/auth.routes')
const productRouter = require('./routes/product.routes')
const addressRouter = require('./routes/address.routes')
const { isAuthenticated } = require('./middleware/jwt.middleware')

const app = express();

const mongoose = require('mongoose')

const PORT = process.env.PORT

app.use(cors({
    origin: '*'
}))

app.use(express.json())


// app.use('/api', isAuthenticated, projectRouter)

app.use('/', productRouter)

app.use('/', addressRouter)

app.use('/auth', authRouter)



mongoose.connect(process.env.MONGODB_URI)
    .then(x => {
        console.log('connected to db', x.connections[0].name)
        app.listen(PORT, () => {
            console.log('server is live on port ' + PORT)
        })
    })
    .catch(err => console.log('error starting the server', err))