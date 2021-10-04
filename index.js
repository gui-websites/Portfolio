const express = require('express')
const app = express()

const fs = require('fs')
const yaml = require('js-yaml')

const https = require('https')

/*=MIDDLEWARE SETUP=======================================================================================================*/

app.set('view engine', 'pug')
app.locals.basedir = __dirname + "/public/"

app.set('views', __dirname + '/public/')
app.use(express.static(__dirname + '/public/'))


/*=MAIN PAGE==============================================================================================================*/

app.get('/', (req, res) => {
  const data = yaml.load(fs.readFileSync(__dirname + '/data.yaml'))
  res.render('home', {data: data})
})


/*=SERVER SETUP===========================================================================================================*/


const port = process.env.PORT || 4000

if(process.env.PROD) {
  const certificate = fs.readFileSync(process.env.SSL_CRT, 'utf-8')
  const privateKey = fs.readFileSync(process.env.SSL_KEY, 'utf-8')
  const credentials = {key: privateKey, cert: certificate}

  https.createServer(credentials, app).listen(port, console.log('Running HTTPS on port ' + port))
} else
  app.listen(port, console.log('Running HTTP on port ' + port))
