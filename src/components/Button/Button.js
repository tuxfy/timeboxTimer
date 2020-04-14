import React from 'react';
import './Button.scss';

const Button = ({ title, size, value, clickEvent }) => {
    const classes = {
        small: 'small',
        medium: 'medium',
        big: 'big',
    };

    return (
        <>
            <button
                className={classes[size]}
                value={value}
                onClick={(event) => {
                    event.stopPropagation();
                    clickEvent(parseInt(event.currentTarget.value));
                }}
            >
                {title}
            </button>
        </>
    );
};

export default Button;
