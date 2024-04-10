let searchForm = document.querySelector('.search-form'), loginForm = document.querySelector('.login-form');

function fadeOut() {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('active');
    }, 6000);
}
fadeOut();

window.onscroll = () => {
    document.querySelector('header .head-2').classList.toggle('active', window.scrollY > 80);
    searchForm.classList.remove('active');
}

document.querySelector('#search-but').onclick = () => {
    searchForm.classList.toggle('active');
}
document.querySelector('#login-but').onclick = () => {
    loginForm.classList.add('active');
}

document.querySelector('#close-login').onclick = () => {
    loginForm.classList.remove('active');
}

var swiper = new Swiper(".book-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

var swiper = new Swiper(".featured-slider", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
});

var swiper = new Swiper(".arrival-slider", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

var swiper = new Swiper(".blog-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});