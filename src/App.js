import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';






 const root= ReactDOM.createRoot(document.getElementById('root'));

 root.render(
     <div className='App'>
       <NavBar/>
        
<div className='item_list'>
<ItemListContainer/>
</div>
         </div>
         )

