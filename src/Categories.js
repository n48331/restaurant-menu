import React from "react";

const Categories = ({ categories, filterItems , activeCategory }) => {
  return (

   <div>
   <a href="#" className="scrolltop" id="scroll-top">
   <i className='bx bx-chevron-up scrolltop__icon'></i>
</a>
   <header className="l-header" id="header">
   <nav className="nav bd-container">
       <a href="#" className="nav__logo">Dine Out</a>

       <div className="nav__menu" id="nav-menu">
           <ul className="nav__list">
           {categories.map((category, index) => {
                 return (
               <li onClick={() => filterItems(category)} key={index} className="nav__item">
               <a href="#menu"
               className = {`${
                activeCategory === category ? "nav__link active-link" : "nav__link"
              }`}
               >
               {category}</a></li>
               );
                 })}
               <li><i className='bx bx-moon change-theme' id="theme-button"></i></li>
           </ul>
       </div>

       <div className="nav__toggle" id="nav-toggle">
           <i className='bx bx-menu'></i>
       </div>
   </nav>
</header>
   </div>

  );
};

export default Categories;
