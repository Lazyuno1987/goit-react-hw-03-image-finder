import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    display: grid;
 grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 32px;
    padding: 0 15px;

`

export const ImgModal = styled.img`
width: 700px;
`

export const Button = styled.button`
width: 100px;
padding: 5px;
background-color: blue;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
cursor: pointer;

`