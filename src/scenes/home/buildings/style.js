import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 30px;
`;

export const Title = styled.h1`
    font-size: 50px
`;

export const Content = styled.div`
    margin-top: 40px;
    display: flex;
    overflow: auto;
    flex: 1;
    flex-direction: column;
    height: 100%;
    position: relative;
`;

export const Body = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
`;