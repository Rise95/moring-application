import React from 'react'
import {
    HashRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Home from '#/scenes/home'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/home' component={Home} />
                <Redirect from='/' to='/home' />
            </Switch>
        </HashRouter>
    )
}