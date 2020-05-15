import React from 'react';
import '../assets/styles/components/Searcher.scss'

const Searcher = () => (
  <section className="main">
      <h2 className="main__title">What do you want to see today?</h2>
      <input className="input" type="text" placeholder="Search..."/>
  </section>
);

export default Searcher;