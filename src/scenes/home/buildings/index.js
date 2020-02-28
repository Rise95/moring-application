import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import I18n from 'i18n-js';
import List from '#/scenes/home/buildings/list'
import {
    Container,
    Content,
    Title,
    Body
} from '#/scenes/home/buildings/style' 

export default () => {
    return (
        <Container>
            <Title>
                {I18n.t('buildings')}
            </Title>
            <Content>
                <Body>
                    <Switch>
                        <Route path='/home/buildings' component={List} />
                    </Switch>
                </Body>
            </Content>
        </Container>
    )
}