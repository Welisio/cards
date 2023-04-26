var cards = ''
async function getCards ()  {
   
}



async function appendCards () {
    cards = await axios.get(`https://fakestoreapi.com/products`)
    console.log(cards)
    let container = document.querySelector('.cards')
    cards.data.forEach(element => {
        container.insertAdjacentHTML('beforeend',`
            <div class="card-container">
            <div class="category">${element.category}</div>
            <div class="title">${element.title}</div>
            <img class="card-img" height="200px" src="${element.image}" alt="">
            <div class="description">
              ${element.description}
            </div>
            <div class="price-rate-count">
                <div class="price">${element.price}$</div>
                <div class="rate">
                    <div>${element.rating.rate}</div> 
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="count">
                    <div>${element.rating.count}</div> 
                    <i class="fa-solid fa-boxes-stacked"></i>
                </div>
            </div>
        </div>
        `)
    });
}

appendCards()

