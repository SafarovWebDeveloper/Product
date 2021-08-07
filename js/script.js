window.addEventListener('DOMContentLoaded', function() {
    let product = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

    function createCard() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            headeing = document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close')

        headeing.textContent = 'Sizning karzinangizda:'
        closeBtn.textContent = 'Yopish'

        document.body.appendChild(cart)
        cart.appendChild(headeing)
        cart.appendChild(field)
        cart.appendChild(closeBtn)

    }
    createCard()

    let cart = document.querySelector('.cart'),
        closeBtn = document.querySelector('.close'),
        field = document.querySelector('.cart-field');

    openBtn.addEventListener('click', () => {
        cart.style.display = 'block'
        cart.style.position = 'fixed'


    })
    closeBtn.addEventListener('click', () => {
        cart.style.display = 'none'
    })
    buttons.forEach((item, i) => {
        // console.log(item);
        // console.log(i);
        item.addEventListener('click', () => {
            let colneItem = product[i].cloneNode(true),
                btn = colneItem.querySelector('button');

            btn.remove()
            field.appendChild(colneItem)
            product[i].remove()
        })
    })
})