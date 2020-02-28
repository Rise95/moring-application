import React from 'react'
import {
    Description,
    Container,
    Content,
    Thumbnail,
    Name,
    ContainerInfo,
    Button
} from '#/components/item/style'
import {
    MdStar,
    MdStarBorder
} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Types } from '#/store/ducks/buildings'

const Status = ({check}) => {
    if (check) {
        return  (
            <MdStar 
                size={20}
                color="#3930AC"
            />
        )
    } else {
        return  (
            <MdStarBorder
                size={20}
                color="#3930AC"
            />
        )
    }
}

export default ({
    data
}) => {
    const dispatch = useDispatch()
    const {
        buildingsData
    } = useSelector(({ Buildings }) => Buildings)

    let { name, default_image, description } = data ?? {}

    

    return (
        <Container>
            <Thumbnail 
                src={default_image['200x140']}
            />
            <Content>
                <ContainerInfo>
                    <Name>
                        {name ?? ''}
                    </Name>
                    <Description>
                        {description ?? ''}
                    </Description>
                </ContainerInfo>
                <Button
                    onClick={() => {
                        buildingsData.forEach(element => {
                            if (element.id === data.id) {
                                if (element.check) {
                                    delete element.check
                                } else {
                                    element.check = true
                                }
                            }
                        });
                        dispatch({
                            type: Types.SET_BUILDINGS_DATA,
                            payload: buildingsData
                        })
                    }}
                >
                    <Status check={data.check} />   
                </Button>
            </Content>
        </Container>
    )
}