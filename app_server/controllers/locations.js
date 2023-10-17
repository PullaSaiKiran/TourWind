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
const india = (req, res) => {  
  res.render('india', { title: 'india' }); 
};
const australia = (req, res) => {  
  res.render('australia', { title: 'australia' }); 
};
const germany = (req, res) => {  
  res.render('germany', { title: 'germany' }); 
};
const italy = (req, res) => {  
  res.render('italy', { title: 'italy' }); 
};
const thailand = (req, res) => {  
  res.render('thailand', { title: 'thailand' }); 
};
const login = (req, res) => {  
  res.render('login', { title: 'login' }); 
};

module.exports = {
  Homepage,
  Contacts,
  gallery,
  about,
  india,
  australia,
  germany,
  italy,
  thailand,
  login

  

};
  