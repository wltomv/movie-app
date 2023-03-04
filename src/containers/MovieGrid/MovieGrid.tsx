import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCard, MovieSearch, OutlineButton } from '../../components';
import { IMovie, IMoviesResponse } from '../../models/movies.models';
import tmdbApi, {
    category as categoryType,
    movieType,
    tvType,
} from '../../api/tmdbApi';

import './MovieGrid.scss';

type MovieGridArgs = {
    category: string;
};

function MovieGrid({ category }: MovieGridArgs) {
    const [items, setItems] = useState<IMovie[]>([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    const getData = useCallback(
        async (_page: number): Promise<IMoviesResponse> => {
            let response = null;
            if (keyword === undefined) {
                const params = {
                    page: _page,
                };
                switch (category) {
                    case categoryType.movie:
                        response = await tmdbApi.getMoviesList(
                            movieType.upcoming,
                            {
                                params,
                            }
                        );
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, {
                            params,
                        });
                }
            } else {
                const params = {
                    page: _page,
                    query: keyword,
                };
                response = await tmdbApi.search(category, { params });
            }
            return response;
        },
        [category, keyword]
    );

    useEffect(() => {
        const getList = async () => {
            const response = await getData(page);
            setItems(response.results);
            setTotalPage(response.total_pages);
        };
        getList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, keyword]);

    const loadMore = async () => {
        const response = await getData(page + 1);
        setItems((_items) => [..._items, ...response.results]);
        setPage((_page) => _page + 1);
    };

    return (
        <>
            <div className="section mb-3 right">
                <MovieSearch category={category} keyword={keyword || ''} />
            </div>
            <div className="movie-grid">
                {items.map((item) => (
                    <MovieCard _category={category} item={item} key={item.id} />
                ))}
            </div>
            {page < totalPage ? (
                <div className="movie-grid__loadmore">
                    <OutlineButton cssClass="small" onClick={loadMore}>
                        Load more
                    </OutlineButton>
                </div>
            ) : null}
        </>
    );
}

export default MovieGrid;
