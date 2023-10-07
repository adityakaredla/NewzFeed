function addnewsInitial(){
    let newscardContainer = document.getElementById('news-card-container');
    fetch("https://inshortsapi.vercel.app/news?category=all")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then(data => {
        const results = data.data;
        const newsList = [];
        for (let result of results) {
          newsList.push({
            'title': result.title,
            'content': result.content,
            'date': result.date,
            'time': result.time,
            'image': result.imageUrl,
            'readMore': result.readMoreUrl
          });
        }
     // Do something with the newsList data
    for(i in newsList){
        let newsCard = document.createElement('div');
        newsCard.classList.add('news-card');
        let imgElement = document.createElement('img');
        imgElement.src = newsList[i]['image'];
        let cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');
        let h3Element = document.createElement('h3');
        h3Element.innerHTML = newsList[i]['title'];
        let barElement = document.createElement('div');
        barElement.classList.add('projcard-bar');
        let pElement = document.createElement('p');
        pElement.innerHTML = newsList[i]['content']+"..";
        let p1Element = document.createElement('p');
        p1Element.innerHTML = newsList[i]['time'] + '•'+ newsList[0]['date'];
        let aElement = document.createElement('a');
        aElement.href = newsList[i]['readMore'];
        aElement.target = '_blank';
        aElement.innerHTML = 'Read More';
        let infoCard = document.createElement('div');
        infoCard.classList.add('info');
        p1Element.appendChild(aElement);
        cardInfo.appendChild(h3Element);
        cardInfo.appendChild(barElement);
        //infoCard.appendChild(pElement);
        //infoCard.appendChild(p1Element);
        cardInfo.appendChild(pElement);
        newsCard.appendChild(imgElement)
        newsCard.appendChild(cardInfo);
        newscardContainer.appendChild(newsCard);
    }
      })
      .catch(error => {
        console.error("Error:", error);
      });

}
function addnewsCard(category){
    let newscardContainer = document.getElementById('news-card-container');
    let cards = newscardContainer.querySelectorAll('.news-card');
    for(card of cards){
        card.remove();
    }
    fetch("https://inshortsapi.vercel.app/news?category="+category)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then(data => {
        const results = data.data;
        const newsList = [];
        for (let result of results) {
          newsList.push({
            'title': result.title,
            'content': result.content,
            'date': result.date,
            'time': result.time,
            'image': result.imageUrl,
            'readMore': result.readMoreUrl
          });
        }
     // Do something with the newsList data
    for(i in newsList){
        let newsCard = document.createElement('div');
        newsCard.classList.add('news-card');
        let imgElement = document.createElement('img');
        imgElement.src = newsList[i]['image'];
        let cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info');
        let h3Element = document.createElement('h3');
        h3Element.innerHTML = newsList[i]['title'];
        let barElement = document.createElement('div');
        barElement.classList.add('projcard-bar');
        let pElement = document.createElement('p');
        pElement.innerHTML = newsList[i]['content']+"..";
        let p1Element = document.createElement('p');
        p1Element.innerHTML = newsList[i]['time'] + '•'+ newsList[0]['date'];
        let aElement = document.createElement('a');
        aElement.href = newsList[i]['readMore'];
        aElement.target = '_blank';
        aElement.innerHTML = 'Read More';
        let infoCard = document.createElement('div');
        infoCard.classList.add('info');
        p1Element.appendChild(aElement);
        cardInfo.appendChild(h3Element);
        cardInfo.appendChild(barElement);
        //infoCard.appendChild(pElement);
        //infoCard.appendChild(p1Element);
        cardInfo.appendChild(pElement);
        newsCard.appendChild(imgElement)
        newsCard.appendChild(cardInfo);
        newscardContainer.appendChild(newsCard);
    }
      })
      .catch(error => {
        console.error("Error:", error);
      });

}
function toggleMenu(){
    let menu = document.getElementById('menu');
    menu.classList.toggle('bx-x');
    let sideBar = document.getElementById('sidebar');
    let newscardContainer = document.getElementById("news-card-container");
    let footer = document.getElementById('footer');
    sideBar.classList.toggle('checked');
    newscardContainer.classList.toggle('unchecked');
    footer.classList.toggle('unchecked');
}

addnewsInitial();
document.getElementById('menu').addEventListener('click',toggleMenu);

