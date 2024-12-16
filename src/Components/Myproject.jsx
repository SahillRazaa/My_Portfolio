import React from 'react';
import styled from 'styled-components';
import { MyProjects } from '../Project_data/data';
import { maxitab, minilap, minitab } from '../responvise';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    padding: 0% 2%;
    padding-bottom: 10%;
    margin-top: -100px;    
    background-color: black;
`;

const SerialNo = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: white;
`;

const Wrapper = styled.div`
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    ${minitab({
        flexDirection: 'column',
        marginLeft: '10%',
        marginRight: '0px',
    })}
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const Image = styled.img`
    width: ${props => props.currId === 2 ? '45%' : '73%'};
    border-radius: 20px;
    box-shadow: 0px 0px 10px 2px white;
`;

const InfoContainer = styled.div`
    flex: 1;
    ${minitab({
        marginTop: '40px',
    })}
`;

const Title = styled.h3`
    font-size: 50px;
    line-height: 0px;
    color: white;
    ${minilap({
        fontSize: '30px',
    })}
    ${maxitab({
        fontSize: '25px',
    })}
`;

const Desc = styled.p`
    font-size: 18px;
    line-height: 20px;
    color: white;
    ${minilap({
        fontSize: '16px',
        lineHeight: '17px',
    })}
    ${maxitab({
        fontSize: '13px',
        lineHeight: '17px',
    })}
    ${minitab({
        width: '90%',
    })}
`;

const Buttons = styled.div`
    display: flex;
`;

const Button = styled.button`
    border: none;
    color: black; 
    background-color: white;
    padding: 10px 20px;
    margin-right: 20px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.25s ease-out;
    &:hover {
        transform: scale(1.05);
        transition: all 0.25s ease-in;
        color: white; 
        background-color: black;
        box-shadow: 0px 0px 10px 2px white;
    }
    ${maxitab({
        fontSize: '10px',
    })}
`;

const Myproject = () => {
    const navigate = useNavigate();

    const handleNavigate = (currIdx) => {
        navigate(`/project/${currIdx}`); // Navigate using the project ID
    };

    return (
        <Container id='main'>
            {MyProjects.map((item) => (
                <div key={item.id}>
                    <SerialNo>{item.id}</SerialNo>
                    <Wrapper>
                        <ImageContainer>
                            <Image currId={item.currIdx} src={item.image} alt={item.title} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc1}<br />{item.desc2}<br />{item.desc3}<br />{item.desc4}<br />{item.desc5}</Desc>
                            <Buttons>
                                <Button onClick={() => handleNavigate(item.currIdx)}>Know More</Button>
                            </Buttons>
                        </InfoContainer>
                    </Wrapper>
                </div>
            ))}
        </Container>
    );
};

export default Myproject;