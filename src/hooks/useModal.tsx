import { useState } from 'react';

type UseModalType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

const useModal = (initialValue = false): UseModalType => {
    const [isOpen, setIsOpen] = useState<boolean>(initialValue);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return { isOpen, openModal, closeModal };
};

export default useModal;
