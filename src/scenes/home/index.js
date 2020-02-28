import React, { useState } from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Buildings from '#/scenes/home/buildings'
import Favorites from '#/scenes/home/favorites'
import {
    Container
} from '#/scenes/home/style'
import NavBar from '#/components/navBar'
import SideBar from '#/components/sideBar'

export default () => {

    const [ activeSideBar, setActiveSideBar ] = useState(false)

    return (
        <Container>
            <NavBar 
                setActiveSideBar={setActiveSideBar}
            />
            <SideBar 
                activeSideBar={activeSideBar}
                setActiveSideBar={setActiveSideBar}
            />
            <Switch>
                <Route path='/home/buildings' component={Buildings} />
                <Route path='/home/favorites' component={Favorites} />
                <Redirect from='/home' to='/home/buildings' />
            </Switch>
        </Container>
    )
}