module.exports = function(app)
{
    //conectar ao banco e fazer query
    app.get('/simulation', function(req, res){
        app.app.controllers.simulation.start_simulation(app, req, res);
    })
}