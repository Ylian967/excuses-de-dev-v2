import React from 'react';

const GenerateButton = ({ onClick, disabled}) => {
    return (
    <button 
    className='button'
    onClick={onClick}
    disabled={disabled}
    >
        {disabled ? 'ça charge...' : 'Générer une excuse'}
    </button>
    );
};

export default GenerateButton;