import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch ,Link, useHistory} from "react-router-dom";
import { Reset } from 'styled-reset'

/* page */
// main
import MainPage from './views/main/MainPage';
import SubPage from './views/sub/SubPage';
import ProductDetailPage from './views/product/ProductDetailPage';

// 페이지 이동시 최상단으로 이동
import ScrollToTop from './ScrollToTop';

export default function App(){

  return (
    <>
      <Reset />
      <ScrollToTop />
      
      <Router>
        {/* main */}
        <Route exact path="/" component={MainPage}/>

        {/* sub */}
        <Route exact path="/sub" component={SubPage}/>

        {/* product */}
        <Route exact path="/product/ProductDetailPage" component={ProductDetailPage}/>
      </Router>
    </>
        
    );
}

