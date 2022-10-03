import React from 'react';
const cartGlobalContext = React.createContext({
     cartValue: [], setCartValue: (item) => {}
});
export {cartGlobalContext};