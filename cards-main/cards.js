var cards = ''

var basketData = []

async function appendCards () {
    cards = await axios.get(`https://fakestoreapi.com/products`)
    console.log(cards)
    let container = document.querySelector('.cards')
    let basketDiv = document.querySelector('.basket')
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
            <div class="add-to-basket" onclick="addToBasket(${element.id})">Add to basket</div>

        </div>
        `)
        if (basket.findIndex(el => el.id === element.id) !== -1) {
            basketDiv.insertAdjacentHTML('afterbegin',`
            <div class="basket-item${element.id}">
                <div class="title">${element.title}</div>
                <div class="qty">
                    <div onclick="plus(${element.id})" class="plus">+</div>
                    <div class="count">1</div>
                    <div onclick="minus(${element.id})" class="minus">-</div>
                </div>
                <div class="price">${element.price}</div>
            </div>
        `)
        }
    });
}

appendCards()

var basket = JSON.parse(localStorage.getItem('basket')) || []

function addToBasket (id) {
    card = cards.data[cards.data.findIndex(el => el.id === id)]
    if (!basket.includes(card)) {
        basket.push(card)
        let removeBtn = `<div class="remove-from-basket" onclick="removeFromBasket(${id})">Remove from basket</div>`
        let addBtn = document.querySelectorAll('.add-to-basket')[id - 1]
        addBtn.outerHTML = removeBtn
        // basketData = [{id: id, count: 1,}]
        localStorage.setItem('basket',JSON.stringify(basket))
    }
}

function removeFromBasket (id) {
    let addBtn = `<div class="add-to-basket" onclick="addToBasket(${id})">Add to basket</div>`
    let removeBtn = document.querySelectorAll('.remove-from-basket')[id - 1]

    basket.splice(basket[basket.findIndex(el => el.id === id)], 1)
    localStorage.setItem('basket',JSON.stringify(basket))
    removeBtn.outerHTML = addBtn
}

function openBasket () {
    let basket = document.querySelector('.centerpoint')
    basket.style.display = 'block'
}

function plus (id) {
    let count = document.querySelector(`.basket-item${id} .count`)
    let price = document.querySelector(`.basket-item${id} .price`)
    priceNum = Number(price.textContent)
    countNum = parseInt(count.textContent)
    count.innerText = countNum + 1
    price.innerText = (priceNum + basket.find(el => el.id === id).price).toFixed(2)
    getSum()
}

function minus (id) {
    let count = document.querySelector(`.basket-item${id} .count`)
    let price = document.querySelector(`.basket-item${id} .price`)
    priceNum = Number(price.textContent)
    countNum = parseInt(count.textContent) 
    if (count.textContent > 1) {
        count.innerText = countNum - 1
        price.innerText = (priceNum - basket.find(el => el.id === id).price).toFixed(2)
        getSum()
    }
}

function getSum () {
    let price = document.querySelectorAll('.price')
    let sumEl = document.querySelector('.summ')
    prices = []
    console.log(price)
    price.forEach(el => {
        console.log(el.textContent)
        prices.push(Number(el.textContent))
    })

    // let sum = prices.reduce((acc, curr) => {
    //     acc + curr
    // })
    // sumEl.innerText = sum
    console.log(prices)
    // console.log(sum)
}

