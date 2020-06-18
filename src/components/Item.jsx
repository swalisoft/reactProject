import React from 'react';
import "../assets/styles/components/Item.scss"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'
import { Link } from 'react-router-dom'

const Item = ({id, cover, title, year, contentRating, duration, isList, setFavorite, deleteFavorite}) => {
  const handleSetFavorite = ()=>{
    setFavorite({
      id, cover, title, year, contentRating, duration,
    })
  }

  const handleDeleteFavorite = (itemId)=>{
    deleteFavorite(itemId);
  }

  return (
    <div className="carousel-items">
      <img className="carousel-items__img" src={cover} alt="ups!"/>
      <div className="carousel-items__datails">
        <div>
            <Link to={`/player/${id}`} ><img src="https://i.imgur.com/bO6zjcQ.png" alt="play"/></Link>
            {isList 
              ?(<img onClick={()=>handleDeleteFavorite(id)} src="https://i.imgur.com/VLn0ULY.png" alt="delete"/>)
              :(<img onClick={handleSetFavorite} src="https://i.imgur.com/HaMtWnF.png" alt="plus"/>)
            }
        </div>
        <p className="carousel-items__datails--title">{title || 'Without description'}</p>
        <p className="carousel-items__datails--subtitle">{`${year} ${contentRating} ${duration}` || 'Without destails'}</p>
      </div>
    </div>
  );
}

Item.prototype = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  isList: PropTypes.bool,
  setFavorite: PropTypes.func,
}

const mapDispachToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispachToProps)(Item)