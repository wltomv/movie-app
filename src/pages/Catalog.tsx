import { useParams } from 'react-router-dom';
import { category as categoryType } from '../api/tmdbApi';
import PageHeader from '../components/PageHeader/PageHeader';
import { MovieGrid } from '../containers';

function Catalog() {
    const { category } = useParams();

    return (
        <>
            <PageHeader>
                {category === categoryType.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category || ''} />
                </div>
            </div>
        </>
    );
}

export default Catalog;
