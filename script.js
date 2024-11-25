//toggle class active
const production = document.querySelector('.production');
//ketika menu  di klik
document.querySelector('#menu').onclick = () => {
    production.classList.toggle('active');
};


//klik di luar sidebar untu menghilangkan navigation
const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !production.contains(e.target)) {
        production.classList.remove('active');
    }

});

//slide show
const slides = document.querySelectorAll('.home img');
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'block' : 'none';
    });
    currentSlide = (currentSlide + 1) % slides.length;
    setTimeout(showSlide, 5000); // Ganti slide setiap 5 detik
}
showSlide();


//search engine
let searchForm = document.querySelector('.search-form');

document.querySelector('#search').onclick = (e) => {
    searchForm.classList.toggle('active');
    e.preventDefault();
}

//katalog produk swiper slide
var swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});










//catalog product
const catalog = document.querySelector('.catalog');
  const prevBtn = document.querySelector('.catalog-prev');
  const nextBtn = document.querySelector('.catalog-next');

  let currentIndex = 0;

  function showCatalogItem(index) {
    catalog.scrollTo({
      left: index * catalog.offsetWidth,
      behavior: 'smooth'
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    showCatalogItem(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, catalog.children.length - 1);
    showCatalogItem(currentIndex);
  });
  


// Product list
const searchBox = document.getElementById("search-box");
const productList = document.getElementById("product-list");

// Function to search products
function searchProduct() {
  const searchValue = searchBox.value.toLowerCase();
  const products = document.querySelectorAll(".products-container");

  if (searchValue === "") {
    products.forEach((product) => {
      product.style.display = "";
    });
    window.scrollTo(0, 0);
  } else {
    products.forEach((product) => {
      const productName = product.querySelector(".product-name").textContent.toLowerCase();
      if (productName.includes(searchValue)) {
        product.style.display = "";
        product.scrollIntoView({ behavior: 'smooth' });
      } else {
        product.style.display = "none";
      }
    });
  }
}

// Add event listener to search box
searchBox.addEventListener("input", searchProduct);

// Product data
const productsHTML = document.querySelectorAll(".products-container");
const productsData = [];

productsHTML.forEach((product) => {
  const productName = product.querySelector(".product-name").textContent;
  const productPrice = product.querySelector(".price span").textContent;
  const productImage = product.querySelector("img").src;
  productsData.push({
    name: productName,
    price: productPrice,
    image: productImage,
  });
});

console.log(productsData);