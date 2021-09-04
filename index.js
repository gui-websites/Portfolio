const fs = require('fs')
const yaml = require('js-yaml')

const express = require('express')
const app = express()

let doc = null


// Server stuff

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('static/'))
app.use(express.static('node_modules/@fortawesome/fontawesome-free/'))

app.get('/', (req, res) => {
  try {
    doc = yaml.load(fs.readFileSync('./data.yaml', 'utf8'));
  } catch (e) {
    console.log(e);
  }

  res.render('home', {data: doc})
})


const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))