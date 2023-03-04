import PropTypes from 'prop-types';

type VideoPlayerArgs = {
    src: string;
};

function VideoPlayer({ src }: VideoPlayerArgs) {
    if (src !== '')
        return <iframe src={src} width="100%" height="500px" title="trailer" />;

    return <span>No trailer</span>;
}

VideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
};

export default VideoPlayer;
