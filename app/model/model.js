const sql = require('./db.js');

//constructor
let View = function(view) {
    this.viewId = view;
};

//getJSON data method
View.getJSONdata = (viewId, result) => {
    //create query using viewId parameter
    let query = sql.query( `SELECT Data from json_data WHERE Time = ?`, viewId, (err, res) => {
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

View.getOneHourTotals = () => {

}

View.get24HRTotals = () => {

}

View.getMaxOneHourMag = () => {

}

View.getMax24Mag = () => {
    
}

module.exports = View;