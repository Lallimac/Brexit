 url = `https://newsapi.org/v2/everything?sources=bbc-news,the-guardian-uk&q=brexit&apiKey=${key}`

const recievedNews1 = (newsdata) => {
    const articlesDiv = document.querySelector(".column1")
    //articles is an object in the JSON.

    newsdata.articles.forEach((article,index) => {




      //Here we create HTML elements that we add to our HTML file
      const div = document.createElement("div")
      if(index<4){
        div.className = "news"
      }else{
        div.className = "news hidden"

      }

      const link = document.createElement("a")
      link.href = article.url
      link.innerHTML = article.title
      div.appendChild(link)

      articlesDiv.appendChild(div)


    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.

fetch(url)
  .then(response => response.json())
  .then(recievedNews1)
