import { Link } from 'react-router-dom';
import { category } from '../../api/tmdbApi';
import { IMovie } from '../../models/movies.models';
import { Button } from '../Button/Button';
import { Category } from '../../models/category.models';
import apiConfig from '../../api/apiConfig';

import './MovieCard.scss';

type MovieCardArgs = {
    item: IMovie;
    _category: string;
};

function MovieCard({ item, _category }: MovieCardArgs) {
    const link = `/${category[_category as keyof Category]}/${item.id}`;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div
                className="movie-card"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <Button onClick={() => {}}>
                    <i className="bx bx-play" />
                </Button>
            </div>
            <h4>{item.title || item.name}</h4>
        </Link>
    );
}

export default MovieCard;
