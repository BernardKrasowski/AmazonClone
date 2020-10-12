import React from 'react';
import "./Home.css"
import Product from './Product';
const Home = () => {

  return (
    <div className='home'>
      <img className='home__image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      <div className="home__row">
        <Product
          id='121341'
          title="Iphone 11 SIM-free - Apple"
          price={11.96}
          rating={5}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_0fEf50KGgxZ_k0__zhclp97CFUWO3r4iUw&usqp=CAU'
        />
        <Product
          id='12341'
          title="Charvel launches the Pro-Mod So-Cal Style 2"
          price={799.99}
          rating={5}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdfUu5OS5IP2gCz2PjsZR3IRikn7VjdhL3cg&usqp=CAU'
        />
      </div>
      <div className="home__row">
        <Product
          id='1213'
          title="Mens Sale Shoes. Nike.com"
          price={30}
          rating={4}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8tq6ozt32RlW-z_EqXMWDfTd3evU329JD2g&usqp=CAU'
        />
        <Product
          id='12321341'
          title="Galaxy Smartwatch, Steel Gold"
          price={81.56}
          rating={3}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlzG4xIPiNUDlBofgg5niv5OeGil_-VRq7gwP2SNpsOGVhbId8wTOSwwjRkOS34OWo5niDHeMs&usqp=CAc'
        />
        <Product
          id='1258341'
          title="Termomix Tm6 Newest Model - Brand"
          price={1200.99}
          rating={4}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwGGZSyhBxBaWMKjW-J0ULPlaGTi1e6TdFr437wFuvhcpen9JyyuKp4JrO7w&usqp=CAc'
        />
      </div>
      <div className="home__row">
        <Product
          id='5'
          title="Audi RS4, new model !!"
          price={7999.99}
          rating={5}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTMv43FNzDDn5HYQtRfjkdICgpj-9xbiR0zQ&usqp=CAU'
        />
      </div>
    </div>
  );
}

export default Home;