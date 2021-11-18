import React from "react";




const Menu = ({ items }) => {
  return (
    <main className="l-main">
          <section className="menu section bd-container" id="menu">
              <div className="menu__container bd-grid">

      {items.map((item) => {
        const { id, title, img, price } = item;
        return (       
                  <div key={id} className="menu__content">
                      <img src={img} alt="" className="menu__img"/>
                      <h3 className="menu__name">{title}</h3>
                      <span className="menu__detail"><hr/></span>
                      <span className="menu__preci">{price}</span>
                      
                  </div>
                  
        );
      })}
    </div>
    </section>
      </main>
  );
};

export default Menu;
