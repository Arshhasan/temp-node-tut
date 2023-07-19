// // modules
// commnonJS, every file is module (by default)
// Modeules = Encapsulated Code ( only share minimumal)
const names = require('./4-names')
const sayHI = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')

sayHI(`susan`)
sayHI(names.john)
sayHI(names.peter)