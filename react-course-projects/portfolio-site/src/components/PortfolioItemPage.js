import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const PortfolioItemPage = (props) => (
    <div>
        <h1>A thing I've Done</h1>
        <p>This page is for the item with the id of {props.match.params.id}</p>
    </div>
);

export default PortfolioItemPage;