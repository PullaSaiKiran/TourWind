/* GET home page */
const index = function(req, res){
    res.render('index', { title: 'TourWind' });
  };
  
  module.exports = {
    index
  };