/**
 * @dev file contains all routes
 */

const schemas = require('../schemas/schemas')
const helpers = require('../helpers/helpers')
async function calculateLove(req, res, next) {
    var loveModel = req.body
    const valid = schemas.validLoveInput(loveModel)
    console.log("valid: ", valid)
    if (!valid.hasOwnProperty("error")) {
        loveModel.loves = "LOVES"
        var score = await Promise.resolve(helpers.calculateLove(loveModel.lover1 + "LOVES" + loveModel.lover2,loveModel))
        res.statusCode = score.code
        res.send(score)
    }
    else {
        res.statusCode = 400;
        res.send(valid)
    }
}

module.exports = {
    calculateLove
}