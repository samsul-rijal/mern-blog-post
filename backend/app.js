const express =  require('express')
const app = express()

const cors = require('cors')
app.use(cors())

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 5000

const db = require('./app/models')
db.mongoose
    .connect(db.url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true // versi baru tidak perlu ini
    })
    .then(() => {
        console.log(`Database connected`);
    }).catch((err) => {
        console.log(`Cannot connect to the database`, err);
        process.exit()
    });

app.get('/', (req, res) =>  {
    res.json({
        message: "Welcome mern stack"
    })
})

require('./app/routes/post.routes')(app)


app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))