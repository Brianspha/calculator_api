const config = require('../config/config')

function validLoveInput(loveModel) {
    var validModel = config.inputValidator.object()
        .keys({
            "lover1": config.inputValidator.string().required(),
            "lover2": config.inputValidator.string().required()

        })
    return validModel.validate(loveModel)
}

module.exports = {
    validLoveInput
}