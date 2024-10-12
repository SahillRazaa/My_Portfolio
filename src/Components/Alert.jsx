import React from 'react';
import { keyframes, styled } from 'styled-components';

// Styled components for the Alert component
const Container = styled.div`
    /* Add any additional styling here if needed */
`;

// Keyframes for the animation
const AnimateMessage = keyframes`
    from {
        right: -100%;
        opacity: 0;
    }
    to {
        right: 0%;
        opacity: 1;
    }
`;

// Styled component for the message container
const MessageContainer = styled.div`
    border: 4px solid ${props => props.color};
    height: auto;
    background-color: white;
    width: 20vw;
    color: ${props => props.color};
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0%;
    right: 0;
    border-radius: 10px 0px 0px 10px;
    align-items: center;
    text-align: center;
    padding: 25px 5px;
    font-size: 18px;
    line-height: 20px;
    animation: ${AnimateMessage} 1s ease-in-out;
`;

// Alert component
const Alert = (props) => {
    return (
        <Container>
            {/* Render message container if alert is present */}
            {props.alert &&
                <MessageContainer color={props.alert.txt === "SUCCESS!" ? "green" : "red"}>
                    {/* Display alert text */}
                    {props.alert.txt} {props.alert.msg}
                </MessageContainer>
            }
        </Container>
    );
}

export default Alert;
