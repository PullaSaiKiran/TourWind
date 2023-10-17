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
router.get('/india', ctrlLocations.india);
router.get('/australia', ctrlLocations.australia);
router.get('/germany', ctrlLocations.germany);
router.get('/italy', ctrlLocations.italy);
router.get('/thailand', ctrlLocations.thailand);
router.get('/login', ctrlLocations.login);

module.exports = router;