const sharp = require('sharp')


sharp('img.png')
.resize(80)
.toFile('resized.png')
