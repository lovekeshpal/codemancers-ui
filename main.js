let textArea = document.getElementById("textArea");
let post = document.getElementById("post");
let fig = document.createElement("figure");
let img = document.createElement("img");
let out = document.querySelector(".out");
let createContainer = document.querySelector(".createContainer");

function postNow() {
  let postText = document.createElement("p");
  postText.innerText = textArea.value;
  post.appendChild(postText);
  post.appendChild(fig);
  textArea.value = "";
  createContainer.remove();
}

const APIKEY = "5CDMq1HVy5TqchGznJEmMKXSgjo02QYv";

document.getElementById("btnSearch").addEventListener("click", (e) => {
  e.preventDefault(); //to stop the page reload
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
  let str = document.getElementById("search").value.trim();
  url = url.concat(str);

  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      //  data
      img.src = content.data[0].images.downsized.url;
      fig.appendChild(img);
      out.appendChild(fig);

      document.querySelector("#search").value = "";
    })
    .catch((err) => {
      console.error(err);
    });
});
