import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <React.Fragment>
    <h3 className="description" >{title}</h3>;
    {children};
  </React.Fragment>
);

export default Categories;