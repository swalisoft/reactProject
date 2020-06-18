import React from 'react'
import '../assets/styles/NotFound.scss'

const NotFound = ()=>(
  <section className="error404">
    <img className="error404__img" src="https://i.imgur.com/i52aDDh.png" alt="error" />
    <h1 className="error404__number">error 404</h1>
    <p className="error404__letters">The page was not found, try again. </p>
  </section>
)

export default NotFound;
