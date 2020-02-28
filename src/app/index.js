import React from 'react'
import {
    GlobalStyle
} from '#/app/style'
import Scenes from '#/scenes'
import ConnectStore from '#/app/connect-store'
import ConnectTranslation from '#/app/connect-translation'

export default () => {
    return (
        <>
            <GlobalStyle />
            <ConnectStore>
                <ConnectTranslation>
                    <Scenes />
                </ConnectTranslation>
            </ConnectStore> 
        </>
    )
}