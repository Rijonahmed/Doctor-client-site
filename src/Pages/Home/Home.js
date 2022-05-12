import React from 'react';
import Banner from './Banner';
import Exceptional from './Exceptional';
import Info from './Info';
import MakeAppoentment from './MakeAppoentment';
import Services from './Services';
import Textimonials from './Textimonials';

const Home = () => {
  return (
    <div className='mx-12'>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppoentment></MakeAppoentment>
      <Textimonials></Textimonials>

    </div>
  );
};

export default Home;