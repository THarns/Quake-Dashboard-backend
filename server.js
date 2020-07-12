const express = require('express'), bodyParser = require('body-parser'), port = process.env.PORT || 3000;
const mysql = require('mysql');
const routes = require('./app/routes/routes.js');
const cors = require('cors');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'quake_db'
});

//Connect
db.connect((err) => {
    if(err) {
        throw err;
    }

    console.log('MySQL connected...');
});

const app = express();
app.use(cors());

app.listen(port, ()=> {
    console.log('server started on ' + port);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);