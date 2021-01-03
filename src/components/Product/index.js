import React from 'react';
import './product.css';
import StarIcon from '@material-ui/icons/Star';

function index({ id, title, image, price, rating }) {
  return (
    <div className='product'>
      <div className='info'>
        <p className='title'>{title}</p>
        <p className='price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className='star' />
            ))}
        </div>
      </div>
      <img src={image}></img>
      <button>Add to cart</button>
    </div>
  );
}

export default index;
