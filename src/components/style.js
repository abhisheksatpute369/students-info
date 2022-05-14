import styled from "styled-components";

export const STable = styled.table`
    width: 50%;
    height: 500px;
    border-collapse: collapse;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #f5f5f5;
    margin: auto;
    text-align: center;
    margin-top: 50px;

`;

export const STHead = styled.thead`
    border-radius: 10px;
    border-bottom: 2px solid gray;
`;

export const STHeadTR = styled.tr`
    
`;

export const STH = styled.th`
    text-align: center;
`;

export const STBody = styled.tbody`
    
`;

export const STBodyTR = styled.tr`
    border-bottom: 1px solid skyblue;
`;

export const STD = styled.td`
    
`;


export const SInput = styled.input`
    width: 60%;
    height: 25px;
`;

export const SButton = styled.button`
    width: 10%;
    height: 30px;
    margin-right: 20px;
    background-color: teal;
    color: white;
    border: none;
    &:hover{
        background-color: white;
        color: teal;
        border: 2px solid teal;
    }
`;