import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { SwiperCard } from '../models/swiperCard/swiperCard';
import { Navigator } from '../models/navigator/navigator';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const InfinteSwipe = () => {

    const swiperRef = useRef(null);

    return (
        <div className="flex">
            <Navigator
                slideUp={() => swiperRef.current?.slidePrev()}
                slideDown={() => swiperRef.current?.slideNext()}
            />
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
            </Swiper>
        </div>
    );
};
