const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.set('views', './page');

app.use(express.static('cssfile'));

app.get('/', (req, res) => {
  res.render('login');
})

app.get('/main', (req, res) => {
  res.render('ATM');
})

app.get('/login',(req,res) =>{
  res.render('ATM');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})