const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messagesList = document.querySelector("#messages");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messages.textContent = "";

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then(({ error, location, forecast } = {}) => {
      if (error) {
        messageOne.textContent = error;
      } else {
        messageOne.textContent = location;
        for (const prop in forecast) {
          const message = document.createElement("li");
          message.textContent = forecast[prop];
          messagesList.appendChild(message);
        }
      }
    });
  });
});
