import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookListContainer = styled.div`
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 5px;
`;

export const Text = styled.p`
    font-size: 1.4rem;
    display: flex;
    justify-content:center;
    font-weight: 500;
`;

export const AddBookButton = styled(Link)`
    text-decoration: none;
    display: block;
    width: 100px;
    color: white;
    background-color: #20c997;
    padding: 10px;
    margin-bottom: 15px;
    margin-left: 76px;
    text-align: center;

    align-self: flex-start;
`;