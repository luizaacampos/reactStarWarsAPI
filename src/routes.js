import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import List from './pages/list'
//import Character from './pages/character'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={List} />
        </Switch>
    </BrowserRouter>
)

export default Routes