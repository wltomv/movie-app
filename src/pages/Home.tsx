import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/Button/Button';
import HeroSlide from '../containers/HeroSlide/HeroSlide';

function Home() {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb2">
                        <h2>Trending</h2>
                        <Link to="/movie">
                            <OutlineButton cssClass="small" onClick={() => {}}>
                                View More
                            </OutlineButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
