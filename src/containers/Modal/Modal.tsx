import PropTypes from 'prop-types';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import './Modal.scss';

type ModalArgs = {
    isOpen: boolean;
    closeModal: () => void;
    title: string;
};

function Modal({
    children,
    isOpen,
    closeModal,
    title,
}: PropsWithChildren<ModalArgs>) {
    return createPortal(
        <article className={`modal ${isOpen && 'is-open'}`}>
            <div className="modal-container">
                <div className="modal-header">
                    <h4>{title}</h4>
                </div>
                <button
                    type="button"
                    className="modal-close"
                    onClick={closeModal}
                >
                    <i className="bx bx-x" />
                </button>
                {children}
            </div>
        </article>,
        document.getElementById('modal') as HTMLElement
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    title: PropTypes.string,
};

Modal.defaultProps = { title: '' };

export default Modal;
