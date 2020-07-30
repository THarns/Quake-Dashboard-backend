module.exports = function(app) {
    const controller = require('../controller/controller.js');

    //GET route for specific viewId (1 or 24)
    app.route('/data/:viewId')
        .get(controller.return_json_set);

    //GET route for component calls
    app.route('/stats/maxmagHour')
        .get(controller.return_stats_maxMagHR);

    app.route('/stats/totalOfHour')
        .get(controller.return_stats_totalOfHR);

    app.route('/stats/NofCombinedTotals')
        .get(controller.return_stats_last_N_Totals);

    app.route('/stats/lastOfN')
        .get(controller.return_stats_last_N_maxMagHR);

    //Will need 2 component calls for chart.js components
};