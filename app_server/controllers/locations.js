/* GET 'home' page */
const Homepage = function(req, res){
  res.render('Homepage', { title: 'Home' });
};

/* GET 'Location info' page */
const Contacts = function(req, res){
  res.render('Contacts', { title: 'Contact details'});
};

/* GET 'Add review' page */
const gallery = function(req, res){
  res.render('Gallery', { title: 'gallery' });
};

module.exports = {
  Homepage,
  Contacts,
  gallery
};