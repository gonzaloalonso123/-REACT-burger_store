import React from 'react';
import './MenuScreen.css';
import { motion } from "framer-motion";
import AddPopUp from './AddPopUp';

function MenuItem({ item, setPopUpItem, popUpItem, allItems, setAllItems }) {

    const managePopUp = () => {
        if(popUpItem != -1 && item.id === allItems[popUpItem].id){
            setPopUpItem(-1);
            return;
        }
        allItems.map((oneItem, i) => {
            if (oneItem.id === item.id) {
                setPopUpItem(i);
            }
        });
        
    }

    return (
        <div className="menu-item">
            <h2>{item.name}</h2>
            <img className='menu-img' src={item.image} alt="" onClick={managePopUp}/>
            { popUpItem != -1 && allItems[popUpItem].id === item.id && <AddPopUp allItems = {allItems} setAllItems = {setAllItems} popUpItem={popUpItem}/>}
        </div>
    )
}

export default MenuItem;