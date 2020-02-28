import React from 'react'
import {
    MdMenu
} from 'react-icons/md'
import {
    Container,
    Title,
    Button
} from '#/components/navBar/styled'

export default ({
    setActiveSideBar
}) => {
    return (
        <Container>
            <Title>
                MORING
            </Title>
            <Button
                onClick={() => setActiveSideBar(true)}
            >
                <MdMenu 
                    size={30}
                    color="White"
                />
            </Button>
        </Container>
    )
}