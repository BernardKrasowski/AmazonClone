import React from 'react';
import "./Home.css"
import Product from './Product';
const Home = () => {
  return (
    <div className='home'>
      <img className='home__image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      {/* Product id, title, price, rating, image */}
      <Product
        id='12321341'
        title="The Lean Startup: How Constant Innovation Creates"
        price={11.96}
        rating={5}
        images=""
      />

    </div>
  );
}

export default Home;