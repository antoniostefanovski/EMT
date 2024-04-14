import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 15px 0;
    border-bottom: 1px solid black;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
    padding: 0 15px;

    color: black;
`;
