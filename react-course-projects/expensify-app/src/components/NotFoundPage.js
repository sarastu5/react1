import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
    {/*kun käytetään Linkiä, sivu ei lataudu kokonaan uudestaan*/}
        404 - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;