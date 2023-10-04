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
  res.render('gallery', { title: 'gallery' });
};
const about = (req, res) => {  
  res.render('about', { title: 'about' }); 
};

module.exports = {
  Homepage,
  Contacts,
  gallery,
  about

};
  