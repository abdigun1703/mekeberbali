import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';

// impor modul navigasi & pagination
import { Navigation, Pagination } from 'swiper/modules';

// registrasi modul ke Swiper
            Swiper.use([Navigation, Pagination]);
            // inisialisasi
            new Swiper('.mySwiper', {
            slidesPerView: 2,
            spaceBetween: 28,
            loop: true,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    centeredSlides: false,
                },
                568: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                    centeredSlides: false,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                    centeredSlides: false,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
            },
            });










