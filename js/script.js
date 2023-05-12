/* SEARCH */
let searchButton = document.querySelector('.header__search-button');
let searchBox = document.querySelector('.header__search-box');

searchButton.addEventListener('click', function() {
    if(searchBox.classList.contains('header__search-box--active')) {
        setTimeout(function() {
            searchBox.classList.remove('header__search-box--visible')
        }, 201);
    }
    searchBox.classList.toggle('header__search-box--active'); 
    searchBox.classList.add('header__search-box--visible'); 
});


/* PRODUCT */
let productPadination = document.querySelectorAll('.product__pagination-circle');
let productImage = document.querySelectorAll('.product__img');
let productOldImage = document.querySelector('.product__img--active').getAttribute('data-image');

function openTab(tabId) {
    const productNewPagination = document.querySelector(`[data-pagination="${tabId}"]`);
    const productNewImage = document.querySelector(`[data-image="${tabId}"]`);

    productPadination.forEach(function (pagination) {
        pagination.classList.remove('product__pagination-circle--active');
    });
    
    productImage.forEach(function (image) {
        image.classList.remove('product__img--active');
    });
    
    productNewPagination.classList.add('product__pagination-circle--active');
    setTimeout(function() {
        productNewImage.classList.add('product__img--active');
    }, 100);
    productOldImage = productNewImage.getAttribute('data-image');
}

/* event 1 */
productPadination.forEach(function (step) {
    step.addEventListener('click', function (e) {
        if (productOldImage != e.currentTarget.getAttribute('data-pagination')) {
            openTab(e.currentTarget.getAttribute('data-pagination'));
        }
    });
});