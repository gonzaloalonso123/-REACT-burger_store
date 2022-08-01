import React, { useEffect } from 'react'

function AddPopUp({ allItems, setAllItems, popUpItem }) {

    const handleClick = (operation) => {
        let current = allItems[popUpItem].numberOrdered;
        switch (operation) {
            case '+':
                current++;
                break;
            case '-':
                if (current != 0) {
                    current--;
                }
                break;
        }

        const aux = [...allItems];
        aux[popUpItem].numberOrdered = current;
        setAllItems(aux);
    }

    return (
        <div className='add-popup'>
            <label></label>
            <button onClick={() => handleClick('-')}>-</button>
            <label className='numberLabel'>{allItems[popUpItem].numberOrdered}</label>
            <button onClick={() => handleClick('+')}>+</button>
        </div>
    )
}

export default AddPopUp