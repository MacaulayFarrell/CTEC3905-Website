"use strict";

(function() {

  let articles = document.getElementById("showArticles");

  window.addEventListener("load", function(ev) {

    fetch('https://newsapi.org/v2/everything?q=Mercedes-Benz&apiKey=984ac7c03a7e4ce3b0c5f24d5000053e')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let key;
        let articleInfo = "";
        let tmp = data.articles;
        for (key in tmp) {

          articleInfo += `<div class="api"><span class="title">${tmp[key].title}</span><span><img class="article-images" src="${tmp[key].urlToImage}" alt="Article Image"></span><span> ${tmp[key].description} <a href="${tmp[key].url}">Read more</a></span></div>`;

        }

        articles.innerHTML = articleInfo;

      });

    ev.preventDefault();
  }, false);

}());
