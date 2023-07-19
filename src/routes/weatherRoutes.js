const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherControllers');

router.get('/city/zipcode/:code', async (req, res) => {
router.get('/city/zipcode/:code', async (req, res) => {
  const { code } = req.params;

  try {
    const weatherData = await weatherController.getWeatherDataByZipCode(code);
    res.status(200).json({
      status: 'success',
      message: 'Weather data retrieved',
      data: weatherData,
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: 'Failed to retrieve weather data',
      error: 'City not found',
    });
  }
});

module.exports = router;
