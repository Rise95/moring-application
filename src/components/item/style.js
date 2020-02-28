import styled from 'styled-components'

export const Description = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f3f3f3;
    padding: 10px;
    height: 140px;
`;

export const Thumbnail = styled.img`
    height: 140px;
    width: 200px;
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    padding-left: 30px;
    justify-content: space-between;
`;

export const Name = styled.p`
    margin-bottom: 10px;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
`;

export const ContainerInfo = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
`;

export const Button = styled.button`
    cursor: pointer;
    background-color: initial;
    border: 0;
`;