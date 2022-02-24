/*====================================== API Imports ====================================== */
const routes = require('../routes/routes')
const config = require('../config/config.js')

/*====================================== API Config ====================================== */
const app = config.restana
app.use(config.cors())
app.use(config.bodyParser.json())
app.use(config.bodyParser.urlencoded({ // Middleware
    extended: true
}));
app.use(config.morgan('combined'))
/*======================================URL Config ====================================== */
app.post("/api/v1/calculator/amiloved", routes.calculateLove)
app.post("/healthcheck", ()=>{
    res.statusCode =200
    res.send({
        up_time: process.uptime(),
        message: 'Im alive :)',
        date: new Date()
    })
})

const start = async () => {
    try {
        await app.start(5000, '0.0.0.0')
        console.log(`admin-service api running on port: 5000`)
        console.log("----------------------------------------------------");    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}
start()

module.exports = app