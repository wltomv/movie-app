import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide, Swiper } from 'swiper/react';
import tmdbApi, { category } from '../../api/tmdbApi';
import { IMovie } from '../../models/movies.models';
import { MovieCard } from '../../components';

import './MovieList.scss';

type MovieListArgs = {
    _category: string;
    type: string;
    id: string;
};

function MovieList({ _category, type, id }: MovieListArgs) {
    const [items, setItems] = useState<IMovie[]>([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (type !== 'similar') {
                switch (_category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(type, {
                            params,
                        });
                        break;
                    default:
                        response = await tmdbApi.getTvList(type, {
                            params,
                        });
                }
            } else {
                response = await tmdbApi.similar(_category, id);
            }
            setItems(response.results);
        };
        getList();
    }, [_category, id, type]);

    return (
        <div className="movie-list">
            <Swiper grabCursor spaceBetween={10} slidesPerView="auto">
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <MovieCard item={item} _category={_category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

MovieList.propTypes = {
    _category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
};

MovieList.defaultProps = {
    id: '',
};

export default MovieList;
