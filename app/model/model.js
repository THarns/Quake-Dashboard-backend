const sql = require('./db.js');

//constructor
let View = function(view) {
    this.viewId = view;
};

//getJSON data method
View.getJSONdata = (viewId, result) => {
    //create query using viewId parameter
    let query = sql.query( `SELECT Data from json_data WHERE TimeFrame = ?`, viewId, (err, res) => {
        if(err) {
            console.log("error: " + err);
        } else {
            let preparsed = JSON.parse(JSON.stringify(res[0].Data));
            let parsed = JSON.parse(preparsed);

            console.log(parsed);
            result(parsed);
        }
    });   
};

View.getMaxMagHour = (result) => {
    let query = sql.query('SELECT MaxMagHR from stats_log WHERE TimeStamp = (SELECT MAX(TimeStamp) FROM stats_log)', (err, res) => {
        if(err) {
            console.log("error: " + err);
        } else {
            let parsed = JSON.parse(JSON.stringify(res));
            //let parsed = JSON.parse(preparsed);

            console.log(parsed[0].MaxMagHR);
            result(parsed[0].MaxMagHR);
        }
    });
}

View.getLastNofMaxMagHour = (result) => {
    let query = sql.query('SELECT * from stats_log ORDER BY TimeStamp DESC LIMIT 2', (err, res) => {
        if(err) {
            console.log("error: " + err);
        } else {
            let parsed = JSON.parse(JSON.stringify(res));
            //let parsed = JSON.parse(preparsed);

            console.log(parsed);
            result(parsed);
        }
    });
}

View.get24HRTotals = () => {

}

View.getMax24Mag = () => {
    
}

module.exports = View;