const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&%20exclude=hourly,daily&appid=f6878d6973075ff1d5e90ea1222bb663&units=metric`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.message) {
      callback("Unable to find location!", undefined);
    } else {
      const data = `Daily summary: ${body.daily[0].weather[0].description}. It is currently ${body.current.temp} degrees out.`;
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
