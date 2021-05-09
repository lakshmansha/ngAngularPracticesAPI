const mongoose = require("mongoose");

var Logger = mongoose.model('Logging', {
    LogDate: String,
    LogLevel: String,
    Message: String,
    OptionalParams: Object,
    RawData: Object
})

const SetRoutes = (app) => {
    app.post("/logger", async (req, res) => {
        try {
            var logger = new Logger(req.body)

            var savedLogger = await logger.save()
            console.log(`Log Saved : ${savedLogger} `)

            res.sendStatus(200)
        } catch (err) {
            res.sendStatus(500)
            return console.error(error)
        }
    });

    app.get("/logger", async (req, res) => {
        try {
            var allLogs = await Logger.find({});
            res.send(allLogs);
        } catch (err) {
            res.sendStatus(500)
            return console.error(error)
        }
    });

};

module.exports = {
    SetRoutes
}