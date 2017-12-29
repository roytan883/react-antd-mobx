const fs = require('fs')

let data = fs.readFileSync('./build/index.html')

data = data.toString()

data = data.replace('/static', "static")
data = data.replace('/static', "static")
data = data.replace('/static', "static")
data = data.replace('/static', "static")
data = data.replace('/static', "static")
data = data.replace('/static', "static")
data = data.replace('/static', "static")
data = data.replace('/static', "static")
data = data.replace('/static', "static")
data = data.replace('/static', "static")

fs.writeFileSync('./build/index.html', data)