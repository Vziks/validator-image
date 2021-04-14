/**
 * @file
 * JSON reporter
 */

/**
 * Reporter
 * @param {Object} validationData
 * @returns {String}
 */
module.exports = function (validationData) {
    delete validationData.feedJson;
    delete validationData.feedXml;
    return JSON.stringify(validationData, null, 2);
};
