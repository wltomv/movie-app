import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import { Category } from '../../models/category.models';
import { category as categoryType } from '../../api/tmdbApi';
import { Button } from '../Button/Button';

import './MovieSearch.scss';

type MovieSearchArgs = {
    keyword: string;
    category: string;
};

function MovieSearch({ keyword, category }: MovieSearchArgs) {
    const navigate = useNavigate();
    const [currentKeyword, setCurrentKeyword] = useState(keyword);

    const goToSearch = useCallback(() => {
        if (currentKeyword.trim().length > 0) {
            navigate(
                `/${
                    categoryType[category as keyof Category]
                }/search/${currentKeyword}`
            );
        }
    }, [currentKeyword, category, navigate]);

    useEffect(() => {
        const enterEvent = (e: KeyboardEvent) => {
            e.preventDefault();
            if (e.key === 'Enter') {
                goToSearch();
            }
        };
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [goToSearch]);

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={currentKeyword}
                onChange={(e) => setCurrentKeyword(e.target.value)}
            />
            <Button cssClass="small" onClick={goToSearch}>
                Search
            </Button>
        </div>
    );
}

export default MovieSearch;
