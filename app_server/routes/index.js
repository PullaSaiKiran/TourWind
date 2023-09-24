const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.Homepage);
router.get('/location', ctrlLocations.Contacts);
router.get('/location/review/new', ctrlLocations.gallery);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;