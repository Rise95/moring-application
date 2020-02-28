import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import I18n from 'i18n-js';
import List from '#/scenes/home/favorites/list'
import {
    Container,
    Content,
    Title,
    Body
} from '#/scenes/home/favorites/style' 

export default () => {
    return (
        <Container>
            <Title>
                {I18n.t('favorites')}
            </Title>
            <Content>
                <Body>
                    <Switch>
                        <Route path='/home/favorites' component={List} />
                    </Switch>
                </Body>
            </Content>
        </Container>
    )
}