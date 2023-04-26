var cards = ''
async function getCards ()  {
   
}



async function appendCards () {
    cards = await axios.get(`https://fakestoreapi.com/products`)
    console.log(cards)
    let container = document.querySelectorAll('.cards')
    cards.data.forEach(element => {
        container.insertAdjacentHTML('beforeend','1')
        container.insertAdjacentHTML('beforeend',`
            <div class="card-container">
            <div class="category">Men's clothing</div>
            <div class="title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
            <img class="card-img" height="200px" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="">
            <div class="description">
                Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
            </div>
            <div class="price-rate-count">
                <div class="price">109.95$</div>
                <div class="rate">
                    <div>3.9</div> 
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="count">
                    <div>120</div> 
                    <i class="fa-solid fa-boxes-stacked"></i>
                </div>
            </div>
        </div>
        `)
    });
}

appendCards()

