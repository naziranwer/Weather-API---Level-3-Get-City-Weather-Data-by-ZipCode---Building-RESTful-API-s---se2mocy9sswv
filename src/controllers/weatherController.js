const fs = require('fs');

async function getDataFromDatabase() {
  return new Promise((resolve, reject) => {
    fs.readFile('src/data/data.json', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

async function getWeatherDataByZipCode(zipCode) {
  try {
    const data = await getDataFromDatabase();
    const cityData = data.find((city) => city.zipCode === zipCode);

    if (!cityData) {
      throw new Error('ZipCode not found');
    }

    return cityData.weather;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getWeatherDataByZipCode,
};
