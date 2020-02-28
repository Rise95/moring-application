import React from 'react'
import {
    MdArrowBack
} from 'react-icons/md'

import {
    Container,
    Body,
    Button,
    Header,
    Link
} from '#/components/sideBar/style'
import I18n from 'i18n-js'

export default ({
    setActiveSideBar,
    activeSideBar
}) => {
    return (
        <Container
            activeSideBar={activeSideBar ? 1 : 0}
        >
            <Header>
                <Button
                    onClick={() => setActiveSideBar(false)}
                >
                    <MdArrowBack 
                        size={30}
                        color="White"
                    />
                </Button>
            </Header>
            <Body>
                <Link
                    activeStyle={{ color: '#3930AC' }}
                    onClick={() => setActiveSideBar(false)}
                    to="/home/buildings"
                >
                    {I18n.t('buildings')}
                </Link>
                <Link
                    activeStyle={{ color: '#3930AC' }}
                    onClick={() => setActiveSideBar(false)}
                    to="/home/favorites"
                >
                    {I18n.t('favorites')}
                </Link>
            </Body>
        </Container>
       
    )
}