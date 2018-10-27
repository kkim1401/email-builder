import { css } from 'emotion';
import React from 'react';
import Canvas from '../components/Canvas';
import Menu from '../components/Menu';

const homePageStyles = css({
    display: 'flex',
    justifyContent: 'space-between',
    height: '100vh',
});

const Home = () => (
  <div className={homePageStyles}>
    <Canvas/>
    <Menu/>
  </div>
);

export default Home;
