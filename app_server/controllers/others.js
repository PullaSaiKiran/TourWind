/* GET home page */
const about = function(req, res){
  res.render('generic-text', {
    title: 'About TourWind',
    content: 'Tourism is a multifaceted industry that has transformed the way we explore the world.\n\n It has the power to stimulate economic growth, foster cultural exchange, and provide memorable experiences for travelers.\n\n However, it is essential to recognize that tourism is a double-edged sword, as its impact extends beyond the leisure and enjoyment of tourists.\n\n This essay explores the profound impact of tourism on local communities and the environment and discusses the imperative of sustainable tourism practices..'
  });
};

module.exports = {
  about
};