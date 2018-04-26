const key = "01c00d58f3e144d6b2f32bba2c2a3085"

/* Example url: https://newsapi.org/v2/top-headlines?q=bitcoin */
let url = `https://newsapi.org/v2/top-headlines?q=brexit&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".container")
    //articles is an object in the JSON.

    newsdata.articles.forEach((article,index) => {
      //Here we create HTML elements that we add to our HTML file

if(index<4)

{

  const div = document.createElement("div")
          div.className = "teaser"

          const img = document.createElement("img")
          img.src = article.urlToImage
          div.appendChild(img)

          const link = document.createElement("a")
					link.href = article.url
					link.innerHTML = article.title
					div.appendChild(link)

          articlesDiv.appendChild(div)


                                  }

    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.

fetch(url)
  .then(response => response.json())
  .then(recievedNews)


  
