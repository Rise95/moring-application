import React from 'react'
import I18n from 'i18n-js';
import ptBR from '#/app/connect-translation/translations/pt-BR.json'
import {
    Container
} from '#/app/connect-translation/style'

export default ({
    children
}) => {

    I18n.fallbacks = true;

    I18n.translations = {
        "pt-BR": ptBR
    };

    I18n.defaultLocale = "pt-BR";

    return (
        <Container>
            {children}
        </Container>
    )
}