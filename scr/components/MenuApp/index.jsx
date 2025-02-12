import React from 'react';
import MenuItem from '../MenuItem';

const MenuApp = ({ data }) => {
    return (
        <div className="App">
            {data.map((menu, index) => (
                <div key={index}>
                    <h1>{menu.menuName} Menu</h1>
                    <div className="menuItems">
                        {menu.menuItems.map((item) => (
                            <MenuItem
                                key={item.itemId}
                                itemId={item.itemId}
                                itemPrice={item.itemPrice}
                                itemName={item.itemName}
                                itemDescription={item.itemDescription}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuApp;
