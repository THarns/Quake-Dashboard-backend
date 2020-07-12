module.exports = function(app) {
    const controller = require('../controller/controller.js');

    //GET route for specific viewId (1 or 24)
    app.route('/data/:viewId')
        .get(controller.return_json_set);
};