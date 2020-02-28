import styled from 'styled-components'
import {
    NavLink
} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    z-index: 1;
    height: 100%;
    width: ${({ activeSideBar }) => activeSideBar ? '250px' : '0px'};
    transition-duration: 1s;
    background-color: #A19DE5;
`;

export const Button = styled.button`
    cursor: pointer;
    background-color: initial;
    border: 0
`;

export const Body = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Header = styled.div`
    display: flex;
    padding: 30px;
`;

export const Link = styled(NavLink)`
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    margin-bottom: 10px;
`;