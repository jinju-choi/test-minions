import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import PrdImg1 from '../../../assets/img/minions_slide1.jpg';
import PrdImg2 from '../../../assets/img/minions_slide2.PNG';
import PrdImg3 from '../../../assets/img/minions_slide3.PNG';

import { Autoplay, Navigation, Pagination } from 'swiper';

const ImgArray = [PrdImg1, PrdImg2, PrdImg3];

export default function MainSlide() {
    return (
        <>
            <SlideContainer>
                <Swiper
                    navigation={true}
                    pagination={true}
                    autoplay={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {ImgArray.map((img, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={img} alt="슬라이드 이미지" />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </SlideContainer>
        </>
    );
}

const SlideContainer = styled.div`
    position: relative;
    width: 100%;
    height: 700px;
    margin-bottom: 80px;
    background: #ccc;
    overflow: hidden;

    & .mySwiper {
        height: 100%;
    }

    & .swiper-pagination-bullet {
        width: 20px;
        height: 10px;
        border-radius: 8px;
    }

    & .swiper-pagination-bullet-active {
        /* background: #f7d508; */
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
