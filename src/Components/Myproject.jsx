import React from 'react';
import styled from 'styled-components';
import { MyProjects } from '../Project_data/data';
import { useNavigate } from 'react-router-dom';
import { minitab } from '../responvise';

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 90vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    z-index: 1;
`;

const Content = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 10%;
    color: white;
    padding: 20px;

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        max-width: 800px;
    }
`;

const ExploreButton = styled.button`
    border: none;
    color: white;
    background-color: black;
    font-size: 1.2rem;
    background-color: black;
    padding: 15px 20px;
    font-weight: 600;
    border-radius: 10px;
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
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin: 0 auto 30px;
    width: fit-content;

    ${minitab({
        flexWrap: 'wrap',
    })}
`;

const ImageButtonContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageButton = styled.img`
    width: 100px;
    height: 70px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: ${props => props.index === props.currentProjectIndex ? '0px 4px 8px rgba(203, 161, 26, 0.8)' : '0px 2px 4px rgba(0, 0, 0, 0.5)'};
    transform: ${props => props.index === props.currentProjectIndex ? 'scale(1.1)' : 'scale(1)'};

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 4px 8px rgba(203, 161, 26, 0.8);
    }
`;

const SubNavExploreButton = styled(ExploreButton)`
    position: absolute;
    top: -100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    ${ImageButtonContainer}:hover & {
        opacity: 1;
        visibility: visible;
    }
`;

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
            <Content>   
            </Content>
            <ProjectNav>
                {MyProjects.map((project, index) => (
                    <ImageButtonContainer key={project.id}>
                        <ImageButton 
                            index={index}
                            currentProjectIndex={currentProjectIndex}
                            src={project.image} 
                            alt={project.title} 
                            onClick={() => handleChangeProject(index)} 
                        />
                        <SubNavExploreButton onClick={() => handleNavigate(index + 1)}>
                            Explore
                        </SubNavExploreButton>
                    </ImageButtonContainer>
                ))}
            </ProjectNav>
        </Container>
    );
};

export default Myproject;
