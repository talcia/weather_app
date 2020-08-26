import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`to {opacity: 1}`;

const FadeInResult = styled.div`
    color: white;
    font-family: arial;
    opacity: 0;
    animation: ${fadeIn} 0.5s 0.5s forwards;
`;

export default FadeInResult;
