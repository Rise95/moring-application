import React from 'react'
import { useSelector } from 'react-redux'
import {
    ContainerItem,
    Notification
} from '#/scenes/home/buildings/list/style'
import I18n from 'i18n-js'
import Item from '#/components/item'

const filterFavorite = data => {
    const listFilter = data.filter(element => {
        if (element.check) {
            return true
        }
    })
    return listFilter
}

export default () => {

    const {
        buildingsData,
    } = useSelector(({ Buildings }) => Buildings)

    if (filterFavorite(buildingsData).length > 0) {
        return filterFavorite(buildingsData).map((favorite, index) => {
            
            return (
                <ContainerItem
                    key={favorite.id ?? index}
                >
                    <Item 
                        data={favorite}
                    />
                </ContainerItem>

            )
        })
    } else {
        return (
            <Notification>
                {I18n.t('notFavoritesList')}
            </Notification>
        )
    }

}