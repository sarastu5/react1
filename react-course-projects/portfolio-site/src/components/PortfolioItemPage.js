import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const PortfolioItem = (props) => (
    <div>
        <h1>A ting I've done</h1>
        <p>This page is for the item with the id of {PortfolioItem.match.params.id}</p>
    </div>
);

export default PortfolioItemPage;