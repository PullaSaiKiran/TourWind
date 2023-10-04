const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.Homepage);
router.get('/Contacts', ctrlLocations.Contacts);
router.get('/gallery', ctrlLocations.gallery);

/* Other pages */
router.get('/about', ctrlLocations.about);

module.exports = router;