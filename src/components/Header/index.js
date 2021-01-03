import React from 'react';
import './header.css';
import { Search } from '@material-ui/icons';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img
        src='https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png'
        className='amazon_logo'
      />
      <div className='search_bar'>
        <input type='text' className='search_input'></input>
        <Search className='search_icon'></Search>
      </div>
      <div className='nav'>
        <div className='nav_option'>
          <span className='nav_option_line_1'>Hello Guest</span>
          <span className='nav_option_line_2'>Sign In</span>
        </div>
        <div className='nav_option'>
          <span className='nav_option_line_1'>Returns</span>
          <span className='nav_option_line_2'>& Orders</span>
        </div>
        <div className='nav_option'>
          <span className='nav_option_line_1'>Your</span>
          <span className='nav_option_line_2'>Prime</span>
        </div>
        <div className='nav_option_cart'>
          <ShoppingBasketIcon className='cart' />
          <span className='nav_option_line_2 nav_basket_count'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
