import './Button.scss';
import PropTypes from 'prop-types';
import { PropsWithChildren } from 'react';

type ButtonArgs = {
    onClick: () => void;
    cssClass: string;
};

function Button({
    onClick,
    cssClass,
    children,
}: PropsWithChildren<ButtonArgs>) {
    return (
        <button type="button" className={`btn ${cssClass}`} onClick={onClick}>
            {children}
        </button>
    );
}

function OutlineButton({
    onClick,
    cssClass,
    children,
}: PropsWithChildren<ButtonArgs>) {
    return (
        <Button cssClass={`btn-outline ${cssClass}`} onClick={onClick}>
            {children}
        </Button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    cssClass: PropTypes.string,
};

Button.defaultProps = {
    cssClass: '',
};

export { Button, OutlineButton };
