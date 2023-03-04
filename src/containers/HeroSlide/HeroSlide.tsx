import { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi, { movieType } from '../../api/tmdbApi';
import HeroslideItem from '../../components/HeroSlideItem/HeroSlideItem';
import { IMovie } from '../../models/movies.models';
import './HeroSlide.scss';

function HeroSlider() {
    const [movieItems, setMovieItems] = useState<IMovie[]>([]);

    SwiperCore.use([Autoplay]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const response = await tmdbApi.getMoviesList(
                    movieType.popular,
                    params
                );
                setMovieItems(response.results.slice(0, 4));
            } catch (error) {
                console.log(error);
            }
        };
        getMovies();
    }, []);

    return (
        <div className="hero-slide">
            <Swiper
                grabCursor
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    reverseDirection: true,
                }}
                modules={[Autoplay]}
            >
                {movieItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        {({ isActive }) => (
                            <HeroslideItem
                                item={item}
                                className={`${isActive ? 'active' : ''}`}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HeroSlider;
