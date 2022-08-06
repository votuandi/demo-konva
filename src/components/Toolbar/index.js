import React from 'react';
import { FaPlus, FaTrash, FaArrowRight } from 'react-icons/fa'
import './styles.scss'

const Toolbar = (props) => {
    const { onAddNewRect } = props

    return (
        <>
            <div className='toolbar'>
                <button onClick={onAddNewRect}><FaPlus /></button>
                <button><FaArrowRight /></button>
                <button><FaTrash /></button>
            </div>
        </>

    );
};

export default Toolbar;