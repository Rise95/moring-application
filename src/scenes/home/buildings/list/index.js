import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useAxios from 'axios-hooks'
import { Types } from '#/store/ducks/buildings'
import {
    ContainerLoading,
    ContainerItem,
    Notification
} from '#/scenes/home/buildings/list/style'
import Loading from '#/components/loading'
import I18n from 'i18n-js'
import Item from '#/components/item'

export default () => {

    const {
        buildingsData,
    } = useSelector(({ Buildings }) => Buildings)
    const dispatch = useDispatch()
    const [{ loading }, buildingsAll] = useAxios({
        url: 'https://www.orulo.com.br/api/v2/buildings',
        method: 'GET',
        headers: {
            "Authorization": process.env.REACT_APP_ORULO_TOKEN
        }
    }, { manual: true })

    const buildingsAllAsync = async () => {
        
        const { data } = await buildingsAll()
        
        if (!loading) {
            const { 
                buildings,
                total,
                page,
                total_pages 
            } = data ?? {}

            buildings.forEach(element => {
                buildingsData.filter(item => {
                    if (item.check && element.id === item.id) {
                        element.check = true
                    } 
                })
            });

            dispatch({
                type: Types.SET_BUILDINGS_DATA,
                payload: buildings 
            })
            dispatch({
                type: Types.SET_BUILDINGS_PAGE,
                payload: page
            })
            dispatch({
                type: Types.SET_BUILDINGS_TOTAL,
                payload: total
            })
            dispatch({
                type: Types.SET_BUILDINGS_TOTAL_PAGES,
                payload: total_pages
            })
        }

    }

    useEffect(() => {

        buildingsAllAsync()

    }, [])

    if (loading) {
        return (
            <ContainerLoading>
                <Loading 
                    height={400}
                    width={400}
                />
            </ContainerLoading>
        )
    } else if (buildingsData.length > 0) {
        return buildingsData.map((building, index) => {
            
            return (
                <ContainerItem
                    key={building.id ?? index}
                >
                    <Item 
                        data={building}
                    />
                </ContainerItem>

            )
        })
    } else {
        return (
            <Notification>
                {I18n.t('notBuildingsList')}
            </Notification>
        )
    }

}