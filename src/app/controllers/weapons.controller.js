class WeaponsController{
     index(req, res) {
         res.render('weapons');
     }
}

module.exports = new WeaponsController;