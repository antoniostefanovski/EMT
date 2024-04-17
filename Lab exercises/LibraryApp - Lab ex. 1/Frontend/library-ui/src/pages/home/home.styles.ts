import styled from "styled-components";

export const HomeContainer = styled.div`

`;

export const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const InputTerm = styled.input<{type: string, name: string, placeholder: string}>`
    padding: 10px;
`;

export const InputButton = styled.button`
    padding: 3px;
    background-color: #20c997;
`;