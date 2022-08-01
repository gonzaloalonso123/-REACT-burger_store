import React from 'react';
import { useEffect } from 'react';
import './MenuScreen.css';

function Filter({ setFilteredItems, menu, currentSelected, setCurrentSelected, setPopUpItem }) {


  useEffect(() => {
    setPopUpItem(-1);
    if (currentSelected == 'all') {
      setFilteredItems(menu);
      return;
    }
    const filtered = menu.filter(item => item.category === currentSelected);
    setFilteredItems(filtered);
  }, [currentSelected]);

  return (
    <div className='filter-container'>
      <button className = {currentSelected === 'all' ? "active" : ""} onClick={() => setCurrentSelected('all')}>Todo</button>
      <button className = {currentSelected === 'hamburguers' ? "active" : ""} onClick={() => setCurrentSelected('hamburguers')}>Hamburguesas</button>
      <button className = {currentSelected === 'pizzas' ? "active" : ""} onClick={() => setCurrentSelected('pizzas')}>Pizzas</button>
      <button className = {currentSelected === 'sweets' ? "active" : ""} onClick={() => setCurrentSelected('sweets')}>Dulces</button>
    </div>
  )
}

export default Filter;