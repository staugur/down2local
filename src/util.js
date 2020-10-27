'use strict'

// test url regex
const isURL = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/

function isObject(o) {
    return o !== null && typeof o === 'object' && Array.isArray(o) === false
}

function isArray(map) {
    return Array.isArray(map)
}

function isValidMap(map) {
    return isArray(map) || isObject(map)
}

module.exports = {
    isURL,
    isObject,
    isArray
}
