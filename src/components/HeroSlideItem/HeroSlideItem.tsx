import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMovie } from '../../models/movies.models';
import { Button, OutlineButton } from '../Button/Button';
import apiConfig from '../../api/apiConfig';
import './HeroSlideItem.scss';
import Modal from '../../containers/Modal/Modal';
import useModal from '../../hooks/useModal';
import VideoPlayer from '../ModalContent/VideoPlayer';
import tmdbApi, { category } from '../../api/tmdbApi';

type HeroslideItemArgs = {
    item: IMovie;
    className: string;
};

function HeroslideItem({ item, className }: HeroslideItemArgs) {
    const navigate = useNavigate();
    const [src, setSrc] = useState('');
    const [srcProp, setSrcProp] = useState('');

    const { isOpen, openModal, closeModal } = useModal();

    const background = apiConfig.orginalImage(
        item.backdrop_path || item.poster_path
    );

    useEffect(() => {
        const getVideos = async () => {
            const videos = await tmdbApi.getVideos(
                category.movie,
                item.id.toString()
            );
            if (videos.results.length > 0) {
                const videoSrc = `https://www.youtube.com/embed/${videos.results[0].key}`;
                setSrc(videoSrc);
            }
        };
        getVideos();
    }, [item]);

    const handleOpen = () => {
        setSrcProp(src);
        openModal();
    };

    const handleClose = () => {
        setSrcProp('');
        closeModal();
    };

    return (
        <>
            <div
                className={`hero-slide__item ${className}`}
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="hero-slide__item__content container">
                    <div className="hero-slide__item__content__info">
                        <h2 className="title">{item.title}</h2>
                        <div className="overview">{item.overview}</div>
                        <div className="btns">
                            <Button
                                onClick={() => navigate(`/movie/${item.id}`)}
                            >
                                Watch Now
                            </Button>
                            <OutlineButton onClick={handleOpen}>
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
            <Modal isOpen={isOpen} closeModal={handleClose} title={item.title}>
                <VideoPlayer src={srcProp} />
            </Modal>
        </>
    );
}

export default HeroslideItem;
