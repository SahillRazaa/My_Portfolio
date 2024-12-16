import React from 'react';
import { styled } from 'styled-components';
import ReactImage from '../assets/Images/react.png';
import JavaScript from '../assets/Images/javascript.png';
import HtmlImage from '../assets/Images/html.png';
import CssImage from '../assets/Images/css.png';
import NodeJsImage from '../assets/Images/nodejs.png';
import FlutterImage from '../assets/Images/flutter.png';
import MongoDB from '../assets/Images/mongo.png';
import CPlusImage from '../assets/Images/c++.png';
import Dart from '../assets/Images/dart.png';
import GoogleApi from '../assets/Images/GApi.png';
import CImage from '../assets/Images/cimage.png';
import PythonImage from '../assets/Images/pythonimage.png';
import { maximobile, miniminimobile, minitab } from '../responvise';

const Container = styled.div`
  width: 99vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  overflow: hidden;
  position : relative;
  ${maximobile({
    height : '50vh',
  })}
  ${miniminimobile ({
    height : '40vh',
  })}
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 30px;
  text-align: center;
`;

const Text = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: black;
  text-shadow: 2px 2px 5px black;
  ${minitab ({
    fontSize : '4rem',
  })}
  ${maximobile ({
    fontSize : '3.5rem',
  })}
  ${miniminimobile ({
    fontSize : '2.5rem',
  })}
`;

const LoopContainer = styled.div`
  position : absolute;
  bottom : 30%;
  display: flex;
  width: 200%;
  animation: loop 15s linear infinite;

  @keyframes loop {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  ${maximobile ({
    animation: 'loop 5s linear infinite',
    bottom : '20%',
  })}
  
`;

const TechStack = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-shrink: 0; 
`;

const StackImage = styled.img`
  width: 80px;
  height: 80px;
  margin: 0;
  padding: 0px 40px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  ${minitab ({
    width : '100px',
    height : '100px',
  })}
  ${maximobile ({
    padding : '0px 30px',
  })}
   ${miniminimobile ({
    width : '60px',
    height : '60px',
  })}
`;

const MyTechStack = () => {
  const techStackImages = [
    ReactImage,
    JavaScript,
    HtmlImage,
    CssImage,
    NodeJsImage,
    FlutterImage,
    Dart,
    GoogleApi,
    MongoDB,
    CPlusImage,
    CImage,
    PythonImage,
  ];

  return (
    <Container>
      <TitleContainer>
        <Text>My Tech Stacks</Text>
      </TitleContainer>
      <LoopContainer>
        {/* First instance of images */}
        <TechStack>
          {techStackImages.map((image, index) => (
            <StackImage key={index} src={image} alt={`Tech ${index}`} />
          ))}
        </TechStack>
        {/* Second instance of images for seamless loop */}
        <TechStack>
          {techStackImages.map((image, index) => (
            <StackImage key={index + techStackImages.length} src={image} alt={`Tech ${index}`} />
          ))}
        </TechStack>
      </LoopContainer>
    </Container>
  );
};

export default MyTechStack;
