import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import { Menu } from './MenuData';
import './MenuScreen.css';
import Filter from './Filter';
import { motion, AnimatePresence } from "framer-motion";

function MenuScreen() {

    const [filteredItems, setFilteredItems] = useState([]);
    const [currentSelected, setCurrentSelected] = useState('all');
    const [popUpItem, setPopUpItem] = useState(-1);
    const [allItems, setAllItems] = useState([]);
    const [numberOfChartItems, setNumberOfChartItems] = useState(0);

    useEffect(() => {
        setFilteredItems(Menu);
        setAllItems(Menu);
    }, []);

    return (
        <div>
            <Filter setFilteredItems={setFilteredItems} setAllItems={setAllItems} allItems = {allItems} menu={Menu} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected} setPopUpItem ={setPopUpItem}/>
            <div className="menu">
                <AnimatePresence >
                    {filteredItems.map((item, key) => {
                        return <MenuItem 
                        key={key} 
                        id = {key} 
                        item={item} 
                        allItems ={allItems}
                        setAllItems = {setAllItems}
                        setPopUpItem = {setPopUpItem} 
                        popUpItem = {popUpItem}
                        />;
                    })}
                </AnimatePresence>
            </div>

        </div>
    )
}

export default MenuScreen;