var cards = ''

async function appendCards () {
    cards = await axios.get(`https://fakestoreapi.com/products`)
    let container = document.querySelector('.cards')
    let basketDiv = document.querySelector('.basket')
    let wishlistDiv = document.querySelector('.wishlist')
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
          ${basket.findIndex(el => el.id === element.id) === -1 ? `<div class="add-to-basket add-to-basket${element.id}" onclick="addToBasket(${element.id},event)">Add to basket</div>` : `<div class="remove-from-basket remove-from-basket${element.id}" onclick="removeFromBasket(${element.id},event)">Remove from basket</div>`}
          ${wishlist.findIndex(el => el.id === element.id) === -1  ?  `<div class="add-to-wishlist add-to-wishlist${element.id}" onclick="addToWishlist(${element.id},event)">Add to Wishlist</div>` : `<div class="remove-from-wishlist remove-from-wishlist${element.id}" onclick="removeFromWishlist(${element.id},event)">Remove from Wishlist</div>`}
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
              <div class="cross" onclick="removeFromBasket(${element.id},event)">
                <div>Remove</div>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0128 14.8631C16.0883 14.9386 16.1482 15.0282 16.189 15.1269C16.2299 15.2255 16.2509 15.3312 16.2509 15.438C16.2509 15.5447 16.2299 15.6504 16.189 15.7491C16.1482 15.8477 16.0883 15.9373 16.0128 16.0128C15.9373 16.0883 15.8477 16.1482 15.7491 16.189C15.6504 16.2299 15.5447 16.2509 15.438 16.2509C15.3312 16.2509 15.2255 16.2299 15.1269 16.189C15.0282 16.1482 14.9386 16.0883 14.8631 16.0128L8.12545 9.27412L1.3878 16.0128C1.23534 16.1653 1.02856 16.2509 0.812952 16.2509C0.597344 16.2509 0.390566 16.1653 0.238108 16.0128C0.08565 15.8603 4.25015e-09 15.6536 0 15.438C-4.25015e-09 15.2223 0.08565 15.0156 0.238108 14.8631L6.97678 8.12545L0.238108 1.3878C0.08565 1.23534 -1.60641e-09 1.02856 0 0.812952C1.60641e-09 0.597344 0.08565 0.390566 0.238108 0.238108C0.390566 0.08565 0.597344 1.60641e-09 0.812952 0C1.02856 -1.60641e-09 1.23534 0.08565 1.3878 0.238108L8.12545 6.97678L14.8631 0.238108C15.0156 0.08565 15.2223 -4.25015e-09 15.438 0C15.6536 4.25015e-09 15.8603 0.08565 16.0128 0.238108C16.1653 0.390566 16.2509 0.597344 16.2509 0.812952C16.2509 1.02856 16.1653 1.23534 16.0128 1.3878L9.27412 8.12545L16.0128 14.8631Z" fill="#2D2D2B"/>
                </svg>
              </div>
              <div class="price basket-price">${element.price}</div>
          </div>
      `)
      }
      if (wishlist.findIndex(el => el.id === element.id) !== -1) {
        wishlistDiv.insertAdjacentHTML('afterbegin',`
        <div class="wishlist-item${element.id}">
          <div class="title">${element.title}</div>
          <div class="cross" onclick="removeFromWishlist(${element.id},event)">
            <div>Remove</div>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0128 14.8631C16.0883 14.9386 16.1482 15.0282 16.189 15.1269C16.2299 15.2255 16.2509 15.3312 16.2509 15.438C16.2509 15.5447 16.2299 15.6504 16.189 15.7491C16.1482 15.8477 16.0883 15.9373 16.0128 16.0128C15.9373 16.0883 15.8477 16.1482 15.7491 16.189C15.6504 16.2299 15.5447 16.2509 15.438 16.2509C15.3312 16.2509 15.2255 16.2299 15.1269 16.189C15.0282 16.1482 14.9386 16.0883 14.8631 16.0128L8.12545 9.27412L1.3878 16.0128C1.23534 16.1653 1.02856 16.2509 0.812952 16.2509C0.597344 16.2509 0.390566 16.1653 0.238108 16.0128C0.08565 15.8603 4.25015e-09 15.6536 0 15.438C-4.25015e-09 15.2223 0.08565 15.0156 0.238108 14.8631L6.97678 8.12545L0.238108 1.3878C0.08565 1.23534 -1.60641e-09 1.02856 0 0.812952C1.60641e-09 0.597344 0.08565 0.390566 0.238108 0.238108C0.390566 0.08565 0.597344 1.60641e-09 0.812952 0C1.02856 -1.60641e-09 1.23534 0.08565 1.3878 0.238108L8.12545 6.97678L14.8631 0.238108C15.0156 0.08565 15.2223 -4.25015e-09 15.438 0C15.6536 4.25015e-09 15.8603 0.08565 16.0128 0.238108C16.1653 0.390566 16.2509 0.597344 16.2509 0.812952C16.2509 1.02856 16.1653 1.23534 16.0128 1.3878L9.27412 8.12545L16.0128 14.8631Z" fill="#2D2D2B"/>
            </svg>
          </div>
      </div>
    `)
    }
    });
    getSum()
}

appendCards()

var basket = JSON.parse(localStorage.getItem('basket')) || []

var wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

function addToBasket (id, e) {
    let card = cards.data[cards.data.findIndex(el => el.id === id)]
    let basketDiv = document.querySelector('.basket')
    if (!basket.includes(card)) {
      basket.push(card)
      let removeBtn = `<div class="remove-from-basket remove-from-basket${id}" onclick="removeFromBasket(${id},event)">Remove from basket</div>`
      let addBtn = document.querySelector(`.add-to-basket${id}`)
      addBtn.outerHTML = removeBtn
      basketDiv.insertAdjacentHTML('afterbegin', `
        <div class="basket-item${card.id}">
            <div class="title">${card.title}</div>
            <div class="qty">
              <div onclick="plus(${card.id})" class="plus">+</div>
              <div class="count">1</div>
              <div onclick="minus(${card.id})" class="minus">-</div>
            </div>
            <div class="cross" onclick="removeFromBasket(${card.id},event)">
              <div>Remove</div>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0128 14.8631C16.0883 14.9386 16.1482 15.0282 16.189 15.1269C16.2299 15.2255 16.2509 15.3312 16.2509 15.438C16.2509 15.5447 16.2299 15.6504 16.189 15.7491C16.1482 15.8477 16.0883 15.9373 16.0128 16.0128C15.9373 16.0883 15.8477 16.1482 15.7491 16.189C15.6504 16.2299 15.5447 16.2509 15.438 16.2509C15.3312 16.2509 15.2255 16.2299 15.1269 16.189C15.0282 16.1482 14.9386 16.0883 14.8631 16.0128L8.12545 9.27412L1.3878 16.0128C1.23534 16.1653 1.02856 16.2509 0.812952 16.2509C0.597344 16.2509 0.390566 16.1653 0.238108 16.0128C0.08565 15.8603 4.25015e-09 15.6536 0 15.438C-4.25015e-09 15.2223 0.08565 15.0156 0.238108 14.8631L6.97678 8.12545L0.238108 1.3878C0.08565 1.23534 -1.60641e-09 1.02856 0 0.812952C1.60641e-09 0.597344 0.08565 0.390566 0.238108 0.238108C0.390566 0.08565 0.597344 1.60641e-09 0.812952 0C1.02856 -1.60641e-09 1.23534 0.08565 1.3878 0.238108L8.12545 6.97678L14.8631 0.238108C15.0156 0.08565 15.2223 -4.25015e-09 15.438 0C15.6536 4.25015e-09 15.8603 0.08565 16.0128 0.238108C16.1653 0.390566 16.2509 0.597344 16.2509 0.812952C16.2509 1.02856 16.1653 1.23534 16.0128 1.3878L9.27412 8.12545L16.0128 14.8631Z" fill="#2D2D2B"/>
              </svg>
            </div>
            <div class="price basket-price">${card.price}</div>
        </div>
      `)
      getSum()
      localStorage.setItem('basket',JSON.stringify(basket))
    }
}

function removeFromBasket (id,e) {
  let addBtn = `<div class="add-to-basket add-to-basket${id}" onclick="addToBasket(${id},event)">Add to basket</div>`
  let removeBtn = document.querySelector(`.remove-from-basket${id}`)
  let basketItem = document.querySelector(`.basket-item${id}`)
  basket.splice(basket.findIndex(el => el.id === id), 1)
  localStorage.setItem('basket',JSON.stringify(basket))
  basketItem.remove()
  getSum()
  removeBtn.outerHTML = addBtn
}

function openBasket () {
  let basket = document.querySelector('.centerpoint')
  basket.style.display = 'block'
}

function closeBasket () {
  let basket = document.querySelector('.centerpoint')
  basket.style.display = 'none'
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
    let price = document.querySelectorAll('.basket-price')
    let sumEl = document.querySelector('.summ')
    prices = []
    price.forEach(el => {
      prices.push(Number(el.textContent))
    })
    if (prices.length > 0) {
      let sum = prices.reduce((acc, curr) => {
        return acc + curr
      })
      sumEl.innerText = `SUMMARY: ${sum.toFixed(2)}$`
    } else {
      sumEl.innerText = `SUMMARY: 0$`
    }
}

function openWishlist () {
  let container = document.querySelector('.centerpoint2')
  container.style.display = 'block'
}

function closeWishlist () {
  let container = document.querySelector('.centerpoint2')
  container.style.display = 'none'
}

function addToWishlist (id,event) {
  let card = cards.data[cards.data.findIndex(el => el.id === id)]
  let wishlistDiv = document.querySelector('.wishlist')
  if (!wishlist.includes(card)) {
    wishlist.push(card)
    let removeBtn = `<div class="remove-from-wishlist remove-from-wishlist${id}" onclick="removeFromWishlist(${id},event)">Remove from wishlist</div>`
    let addBtn = document.querySelector(`.add-to-wishlist${id}`)
    addBtn.outerHTML = removeBtn
    wishlistDiv.insertAdjacentHTML('afterbegin', `
      <div class="wishlist-item${card.id}">
          <div class="title">${card.title}</div>
          <div class="cross" onclick="removeFromWishlist(${card.id},event)">
            <div>Remove</div>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0128 14.8631C16.0883 14.9386 16.1482 15.0282 16.189 15.1269C16.2299 15.2255 16.2509 15.3312 16.2509 15.438C16.2509 15.5447 16.2299 15.6504 16.189 15.7491C16.1482 15.8477 16.0883 15.9373 16.0128 16.0128C15.9373 16.0883 15.8477 16.1482 15.7491 16.189C15.6504 16.2299 15.5447 16.2509 15.438 16.2509C15.3312 16.2509 15.2255 16.2299 15.1269 16.189C15.0282 16.1482 14.9386 16.0883 14.8631 16.0128L8.12545 9.27412L1.3878 16.0128C1.23534 16.1653 1.02856 16.2509 0.812952 16.2509C0.597344 16.2509 0.390566 16.1653 0.238108 16.0128C0.08565 15.8603 4.25015e-09 15.6536 0 15.438C-4.25015e-09 15.2223 0.08565 15.0156 0.238108 14.8631L6.97678 8.12545L0.238108 1.3878C0.08565 1.23534 -1.60641e-09 1.02856 0 0.812952C1.60641e-09 0.597344 0.08565 0.390566 0.238108 0.238108C0.390566 0.08565 0.597344 1.60641e-09 0.812952 0C1.02856 -1.60641e-09 1.23534 0.08565 1.3878 0.238108L8.12545 6.97678L14.8631 0.238108C15.0156 0.08565 15.2223 -4.25015e-09 15.438 0C15.6536 4.25015e-09 15.8603 0.08565 16.0128 0.238108C16.1653 0.390566 16.2509 0.597344 16.2509 0.812952C16.2509 1.02856 16.1653 1.23534 16.0128 1.3878L9.27412 8.12545L16.0128 14.8631Z" fill="#2D2D2B"/>
            </svg>
          </div>
      </div>
    `)
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
  }
}

function removeFromWishlist (id,e) {
  let addBtn = `<div class="add-to-wishlist add-to-wishlist${id}" onclick="addToWishlist(${id},event)">Add to wishlist</div>`
  let removeBtn = document.querySelector(`.remove-from-wishlist${id}`)
  let wishlistItem = document.querySelector(`.wishlist-item${id}`)
  wishlist.splice(wishlist.findIndex(el => el.id === id), 1)
  localStorage.setItem('wishlist',JSON.stringify(wishlist))
  wishlistItem.remove()
  removeBtn.outerHTML = addBtn
}

