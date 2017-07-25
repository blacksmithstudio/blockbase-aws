const AWS = require('aws-sdk')

/**
 * Blockbase AWS driver (app.drivers.aws)
 * @memberof app.drivers
 * @author Alexandre Pereira <alex@blacksmith.studio>
 * @param {Object} app - Application namespace
 *
 * @returns {Object} driver object containing public methods
 */
module.exports = (app) => {
    if(app.config.has('aws') && app.config.get('aws').profile)
        AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile : app.config.get('aws').profile })
    else
        AWS.config.credentials = new AWS.SharedIniFileCredentials()
        
    return AWS
}
