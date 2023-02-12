const Api =
  "http://api.weatherapi.com/v1/current.json?key=169e422dff864613bfe44005231202";

const keyword = document.querySelector(".keyword");
const btnSearch = document.querySelector(".btn-search");
const container = document.getElementById("container");

function cariaku() {
  fetch(`${Api}&q=${keyword.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let element = "";
      element = showElement(data);
      container.innerHTML = element;
    });
}

function showElement(data) {
  return ` 
<h2>${data.location.name}, ${data.location.region}</h2>
<p>${data.current.temp_c}°C</p>
<img src="https:${data.current.condition.icon}" alt="" />
<p>${data.location.localtime}</p>`;
}
