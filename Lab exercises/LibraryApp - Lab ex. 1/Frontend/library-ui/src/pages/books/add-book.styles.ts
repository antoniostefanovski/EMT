import styled from "styled-components";

export const AddBookContainer = styled.div`
    width: 50%;
    margin: auto;
`;

export const InputElement = styled.input<{type: string, name: string, placeholder: string}>`
    width: 300px;
    padding: 8px;
    font-size: 1.2rem;
`;

export const Label = styled.p`
    font-size: 1.2rem;
`;

export const Select = styled.select`
  width: 300px;   
  background: white;
  padding: 8px;
  font-size: 1.2rem;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  display: block;
  font-size: 1.1rem;
  background-color: #0d6efd;
  border: none;
  color: white;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
`;