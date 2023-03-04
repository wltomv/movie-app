import { ChangeEvent } from 'react';

import './Input.scss';

type InputArgs = {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Input({ type, placeholder, value, onChange }: InputArgs) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
