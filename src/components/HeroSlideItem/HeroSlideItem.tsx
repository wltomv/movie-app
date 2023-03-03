import { useNavigate } from 'react-router-dom';
import { IMovie } from '../../models/movies.models';
import { Button, OutlineButton } from '../Button/Button';
import apiConfig from '../../api/apiConfig';
import './HeroSlideItem.scss';

type HeroslideItemArgs = {
    item: IMovie;
    className: string;
};

function HeroslideItem({ item, className }: HeroslideItemArgs) {
    const navigate = useNavigate();

    const background = apiConfig.orginalImage(
        item.backdrop_path || item.poster_path
    );

    return (
        <div
            className={`hero-slide__item ${className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => navigate(`/movie/${item.id}`)}>
                            Watch Now
                        </Button>
                        <OutlineButton onClick={() => console.log('trailer')}>
                            Watch trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img
                        src={apiConfig.w500Image(item.poster_path)}
                        alt={item.title}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroslideItem;
