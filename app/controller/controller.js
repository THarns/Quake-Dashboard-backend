const View = require('../model/model.js');

exports.return_json_set = (req, res) => {
    View.getJSONdata(req.params.viewId, function(err, view) {
        if(err) {
            res.send(err);
        }
    });
};

exports.return_stats_maxMagHR = (req, res) => {
    View.getMaxMagHour(function(err, view) {
        if(err) {
            res.send(err);
        }
    });
};

exports.return_stats_totalOfHR = (req, res) => {
    View.getTotalOfHour(function(err, view) {
        if(err) {
            res.send(err);
        }
    });
};

exports.return_stats_last_N_maxMagHR = (req, res) => {
    View.getLastNofMaxMagHour(function(err, view) {
        if(err) {
            res.send(err);
        }
    });
};