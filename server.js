const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './page');

app.use(express.static('cssfile'));

const mongoUrl = 'mongodb+srv://hslee9275:dlgustn00@first.z34fgef.mongodb.net/';

async function main() {
    try {
        console.log('Connecting to MongoDB...');
        const client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB에 성공적으로 연결되었습니다');

        const db = client.db('first').collection.db; // 데이터베이스 이름을 지정하세요

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });

        app.get('/', (req, res) => {
            res.render('login');
        });

        app.get('/main', (req, res) => {
            res.render('ATM');
        });

        app.get('/login', (req, res) => {
            res.render('ATM');
        });

        app.get('/input', (req, res) => {
            res.render('in');
        });

        app.get('/out', (req, res) => {
            res.render('out');
        });

        app.get('/see', (req, res) => {
            res.render('see');
        });

        app.get('/send', (req, res) => {
            res.render('send');
        });
        
    } catch (err) {
        console.error('MongoDB 연결 중 오류:', err);
    }
}

main().catch(console.error);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
