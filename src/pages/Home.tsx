import { Link } from 'react-router-dom';
import { category, movieType, tvType } from '../api/tmdbApi';
import { OutlineButton } from '../components/Button/Button';
import { HeroSlide, MovieList } from '../containers';
import { ISection } from '../models/section.model';

const mainSections: ISection[] = [
    {
        id: '1Trend',
        title: 'Trending',
        navigateTo: '/movie',
        category: category.movie,
        type: movieType.popular,
    },
    {
        id: '2TopRatedMovies',
        title: 'Top Rated Movies',
        navigateTo: '/movie',
        category: category.movie,
        type: movieType.top_rated,
    },
    {
        id: '3TrendingTv',
        title: 'Trending TV',
        navigateTo: '/tv',
        category: category.tv,
        type: tvType.popular,
    },
    {
        id: '4TopRatedTV',
        title: 'Top Rated TV',
        navigateTo: '/tv',
        category: category.tv,
        type: tvType.top_rated,
    },
];
function Home() {
    return (
        <>
            <HeroSlide />
            <div className="container">
                {mainSections.map((section) => (
                    <div className="section mb-3" key={`section-${section.id}`}>
                        <div className="section__header mb2">
                            <h2>{section.title}</h2>
                            <Link to={section.navigateTo}>
                                <OutlineButton
                                    cssClass="small"
                                    onClick={() => {}}
                                >
                                    View More
                                </OutlineButton>
                            </Link>
                        </div>
                        <MovieList
                            _category={section.category}
                            type={section.type}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
