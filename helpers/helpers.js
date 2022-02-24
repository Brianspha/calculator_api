/**
 * @dev contains all functions required
 */

const utils = require('../utils/utils');
const config = require('../config/config')
async function calculateLove(loveString, loveModel) {

    /**
     * Step 1: Split string into chars
     * Step 2: Remove any empty characters
     * Step 3: Group by occurences of characters
     * Step 4: Ensure grouping matches sequence of original string
     * Step 5: Caluclate score until we have 2 score in array
     * Ste  6: Concat Remaining values and return to user 
     */
    return new Promise(function (resolve, reject) {
        var characterArray = loveString.split('').filter((character) => character !== ' ')
        var occurence = characterArray.reduce((group, character) => {
            group[character] = group[character] ?? [];
            group[character].push(character);
            return group;
        }, {});
        var scores = []
        var counted = []
        characterArray.map((character, index) => {
            if (!counted.includes(character)) {
                scores.push(occurence[character].length)
                counted.push(character)
            }

            return character;
        })

        var newScores = utils.calculateScores(scores)
        while (new config.bigNumber(newScores.length).mod(new config.bigNumber(2)).isGreaterThan(new config.bigNumber(0))) {
            newScores = utils.calculateScores(newScores)
            console.log("new Scoressss: ", newScores)
        }
        console.log("finalScore: ", newScores)
        console.log("finalScores: ", newScores[0].toString() + newScores[1].toString() + "%")
        resolve({ final_score: ((newScores[0].toString() + newScores[1].toString()).length>=3?"100":(newScores[0].toString() + newScores[1].toString())) + "%", code: 200, message: `Succesfully compatibilty scores between ${loveModel.lover1} and ${loveModel.lover2}` })
    })
}


module.exports = {
    calculateLove
}