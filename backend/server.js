var express = require('express');
var sql = require('mssql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); 
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
 
// My specific daabase but for some reason sending posts doesn't work
var config = {
    user: 'scoreboardUSR',
    password: 'houiafdafojdswfef3',
    server: '34.209.99.170',
    database: 'scoreboardMariaDB',
    port: '3306'
};

app.post('/', (req, res) => {
    // No idea how to go about this
    const { color1, color2, image1, image2, sport, userID } = req.body;
    const q = `INSERT INTO scoreboards (color1, color2, image1, image2, sport, userID) VALUES (@color1, @color2, @image1, @image2, @sport, @userID)`;
    
    const pool = new sql.ConnectionPool(config);
    pool.connect().then(() => {
        const request = new sql.Request(pool);
        request.input('color1', sql.VarChar, color1)
               .input('color2', sql.VarChar, color2)
               .input('image1', sql.VarChar, image1)
               .input('image2', sql.VarChar, image2)
               .input('sport', sql.VarChar, sport)
               .input('userID', sql.Int, userID);

        request.query(q, (err, result) => {
            pool.close(); 
            if (err) {
                console.error('SQL error', err);
                res.status(500).send('Error executing the query');
            } else {
                res.status(200).send('Data inserted successfully');
            }
        });
    }).catch(err => {
        console.error('SQL connection error', err);
        res.status(500).send('Error connecting to the database');
    });
});

