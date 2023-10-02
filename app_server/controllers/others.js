const about = (req, res) => {  
  res.render('generic-text', { title: 'about' });   
};
const Contacts = (req, res) => {  
  res.render('Contacts', { title: 'Contacts' });   
};
module.exports = {
  about,
  Contacts
};