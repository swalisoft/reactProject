import React from 'react';
import "../assets/styles/components/Item.scss"
import PropTypes from 'prop-types'

const Item = ({cover, title, year, contentRating, duration}) => {
  return (
    <div className="carousel-items">
      <img className="carousel-items__img" src={cover} alt="ups!"/>
      <div className="carousel-items__datails">
        <div>
            <img src="https://i.imgur.com/bO6zjcQ.png" alt="play"/>
            <img src="https://i.imgur.com/HaMtWnF.png" alt="mas"/>
        </div>
        <p className="carousel-items__datails--title">{title || 'Without description'}</p>
        <p className="carousel-items__datails--subtitle">{`${year} ${contentRating} ${duration}` || 'Without destails'}</p>
      </div>
    </div>
  );
}

Item.prototype = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

export default Item;