const View = require('../model/model.js');

exports.return_json_set = (req, res) => {
    View.getJSONdata(req.params.viewId, function(err, view) {
        if(err) {
            res.send(err);
        }
    });

    //add contollers viewfunctions for chart components
};