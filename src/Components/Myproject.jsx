import React from 'react';
import styled from 'styled-components';
import { MyProjects } from '../Project_data/data';
import { useNavigate } from 'react-router-dom';
import { maxitab, minilap, miniminimobile, minitab } from '../responvise';
import { display, fontSize, lineHeight } from '@mui/system';

const Container = styled.div`
    position: relative;
    width: calc(99vw);
    height: calc(99vh);
    border-radius : 0px;
    overflow: hidden;
`;

const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    opacity: 0.5; 
    z-index: 1;
`;

const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.84);
    z-index: 2;
`;

const Content = styled.div`
    position: relative;
    z-index: 2;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    height: 100%;
    text-align: justify;
    
`;

const LeftCont = styled.div`
    flex : 1;
    margin : 100px 50px;
    ${maxitab ({
        display : 'none'
    })}
    ${miniminimobile ({
        margin : '0px',
    })}
`

const RightCont = styled.div`
    flex : 1;
    margin : 50px 50px;
`

const Title = styled.h1`
    font-size: 80px;
    color : white;
    text-shadow: -3px -3px 10px black, 3px -3px 10px black, -3px 3px 10px black, 3px 3px 10px black;
    ${miniminimobile ({
        fontSize : '60px',
    })}
`;

const Desc = styled.p`
    font-size: 18px;
    margin: 10px 0;
    color :rgb(184, 184, 184);
    font-weight : bold;
    line-height : 30px;
    ${minilap ({
        fontSize : '15px',
    })}
`;
const DescDesc = styled.p`
    font-size: 20px;
    margin: 10px 0;
    color :rgb(184, 184, 184);
    font-weight : bold;
    line-height : 30px;
    ${maxitab ({
        fontSize : '30px',
        lineHeight : '40px',
    })}
    ${minitab ({
        fontSize : '20px',
        lineHeight : '30px',
    })}
    ${miniminimobile ({
        fontSize : '16px',
        lineHeight : '25px',
    })}
`;

const ExploreButton = styled.button`
    border: none;
    color: white; 
    background-color: black;
    padding: 10px 20px;
    font-weight: 600;
    border-radius: 10px;
    margin : 30px 0px;
    cursor: pointer;
    transition: all 0.25s ease-out;
    &:hover {
        transform: scale(1.05);
        color: black; 
        background-color: white;
        box-shadow: 0px 0px 10px 2px #CBA11A;
    }
`;

const ProjectNav = styled.div`
    position: absolute;
    bottom: 50px;
    right: 30px;
    display: flex;
    gap: 30px;
    z-index: 3;
    ${minitab ({
        display : 'grid',
        gridTemplateColumns : 'repeat(3, 1fr)',
        bottom : '20px',
        right : '10px',
    })} 
    ${miniminimobile ({
        gridTemplateColumns : 'repeat(2, 1fr)'
    })} 
`;

const ImageButton = styled.img`
    width: 120px; 
    height: 80px; 
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s;
    box-shadow :  ${props => props.index === props.currentProjectIndex ? '0px 0px 10px 5px #CBA11A' : ''}; 
    transform: ${props => props.index === props.currentProjectIndex ? 'scale(1.1)' : ''}; 
    &:hover {
        transform: scale(1.1);
    }
    ${minilap ({
        width : '100px',
        height : '60px',
    })}
    ${maxitab ({
        width : '70px',
        height : '50px',
    })}
`;

const Index = styled.h2`
    position : absolute;
    top : 0px;
    left : 30px;
    font-size : 50px;
    color : white;
    z-index : 3;
    text-shadow: -3px -3px 10px black, 3px -3px 10px black, -3px 3px 10px black, 3px 3px 10px black;
    ${miniminimobile ({
        fontSize : '40px',
    })}
`

const Myproject = () => {
    const navigate = useNavigate();
    const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0);

    const handleNavigate = (index) => {
        setCurrentProjectIndex(index);
        navigate(`/project/${index}`);
    };

    const handleChangeProject = (nextIndex) => {
        setCurrentProjectIndex(nextIndex);
    };

    const currentProject = MyProjects[currentProjectIndex];

    return (
        <Container>
            <BackgroundImage image={currentProject.image} />
            <DarkOverlay />
            <Index>{currentProject.id}</Index>
            <Content>   
                <LeftCont>
                    <Desc>{currentProject.desc1}<br /><br/>{currentProject.desc2}<br /><br/>{currentProject.desc3}<br /><br/></Desc>
                </LeftCont>
                <RightCont>
                    <Title>{currentProject.title}</Title>
                    <DescDesc>{currentProject.desc}</DescDesc>
                    <ExploreButton onClick={() => handleNavigate(currentProjectIndex + 1)}>Explore</ExploreButton>
                </RightCont>
            </Content>
            <ProjectNav>
            {MyProjects.map((project, index) => (
                    <ImageButton 
                        index = {index}
                        currentProjectIndex = {currentProjectIndex}
                        key={project.id} 
                        src={project.image} 
                        alt={project.title} 
                        onClick={() => handleChangeProject(index)} 
                    />
                ))}
            </ProjectNav>
        </Container>
    );
};

export default Myproject;