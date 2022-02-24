/**
 *@dev file contains all utility functions
 */

const utils = require('../utils/utils');
const config = require('../config/config')


/**
 * 
 * @param {used to calculate the lovers scores based of their name characters} scores 
 * @returns the sum of the character occurence in an array
 */
function calculateScores(scores) {
    console.log("getting new scores: ", scores)
    var left = new config.bigNumber(0), right = new config.bigNumber(scores.length - 1)
    var newScores = []
    if (new config.bigNumber(scores.length).mod(new config.bigNumber(2)).isGreaterThan(new config.bigNumber(0))) {
        console.log("in odd if")

        while (left.isLessThan(new config.bigNumber(scores.length).dividedBy(new config.bigNumber(2)).minus(new config.bigNumber(1)))) {
            console.log("score[left]: ", scores[left.toFixed(0)], " scores[right]: ", scores[right.toFixed(0)], " left: ", left.toFixed(0), " right:", right.toFixed(0), " new: ", config.bigNumber(scores[left.toFixed(0)]).plus(scores[right.toFixed(0)]).toFixed(0))
            newScores.push(new config.bigNumber(scores[left.toFixed(0)]).plus(new config.bigNumber(scores[right.toFixed(0)])).toFixed(0))
            left = left.plus(new config.bigNumber(1))
            right = right.minus(new config.bigNumber(1))
        }
        newScores.push(scores[left.toFixed(0)])
        console.log(newScores)
        return newScores
    }
    else {
        console.log("in else")
        while (left.isLessThan(new config.bigNumber(scores.length).dividedBy(new config.bigNumber(2)))) {
            console.log("score[left]: ", scores[left.toFixed(0)], " scores[right]: ", scores[right.toFixed(0)], " left: ", left.toFixed(0), " right:", right.toFixed(0), " new: ", scores[left.toFixed(0)] + scores[right.toFixed(0)])
            newScores.push(new config.bigNumber(scores[left.toFixed(0)]).plus(new config.bigNumber(scores[right.toFixed(0)])).toFixed(0))
            left = left.plus(new config.bigNumber(1).toFixed(0))
            right = right.minus(new config.bigNumber(1).toFixed(0))
        }

        return newScores

    }
}

module.exports = { calculateScores }