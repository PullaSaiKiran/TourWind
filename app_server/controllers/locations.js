/* GET 'home' page */
const Homepage = function(req, res){
  res.render('Homepage', { title: 'Home' });
};

/* GET 'Location info' page */
const Contacts = function(req, res){
  res.render('Contacts', { title: 'Contact details',content:'Sai kiran--9515703265.\n\ Akshitha--7842112821.\n Manoj Kumar--7013094375' });
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