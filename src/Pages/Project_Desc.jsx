import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ProjectData } from '../Project_data/data';
import Contact from '../Components/Contact';
import { useEffect } from 'react';
import { contactlap } from '../responvise';

const Container = styled.div`
  width : 90vw;
  margin: 0 auto;
`;

const MainTitle = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const ProjectHead = styled.h1`
  text-decoration: underline;
`;

const ProjectDetails = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Details = styled.p`
  width: 90%;
  text-align: start;
  font-size: 22px;
`;

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom : 100px;
  ${contactlap`
    flex-direction : column;
  `}
`;


const Image = styled.img`
  flex: 1;
  max-width: ${(props) => 
    props.currId === 2
      ? '20%' 
      : props.flag === 'true' ? '35%' : '45%'};
  height: auto;
  object-fit: contain;
  border-radius: 25px;

  ${contactlap`
    max-width: 60%;
  `}
`;

const Info = styled.div`
  flex : 1;
  max-width: 500px;
  padding: 20px;
  margin : 50px;
  height : auto;
`;

const InfoDesc = styled.p`
  margin-bottom: 10px;
  text-align: start;
  font-size : 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 10px;
  &:hover{
    transform : scale(1.05);
    transition : all 0.25s ease-in;
    color : black;
    background-color : transparent;
    box-shadow : 0px 0px 10px 2px black;
  }
`;

const NewBox = styled.div`
  width : 100%;
  height : 6px;
  background-color : black;
`

const InfoTitle = styled.h2`

`

const VideoTitle = styled.h2`
    font-size: 30px;
    font-weight : bold;
    text-align : center;
`

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  iframe {
    width: 60%;
    height: 400px;
    border: none;
    border-radius: 10px;
    margin-bottom : 100px;
  }
`;


const Project_Desc = () => {
  const location = useLocation();
  const { currIdx } = location.state;
  const project = ProjectData.find((proj) => proj.id === currIdx);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {project ? (
        <>
        <Container>
          <MainTitle>
            Go To Home → <StyledLink to="/">HOME</StyledLink>
          </MainTitle>

          <ProjectHead>Project Description:</ProjectHead>

          <ProjectDetails>
            <Title>Title</Title>
            <Details>{project.title}</Details>

            <Title>Description</Title>
            <Details>{project.desc.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}</Details>

            <Title>Duration</Title>
            <Details>{project.duration}</Details>

            <Title>Dates</Title>
            <Details>{project.dates}</Details>

            <Title>Tech Stacks</Title>
            <Details>{project.stacks}</Details>

            {project.frontEnd && <Title>
              GitHub FrontEnd Link:{" "}
              <StyledLink to={project.frontEnd} target="_blank">
                Here
              </StyledLink>
            </Title>}
            {project.backEnd && <Title>
              GitHub BackEnd Link:{" "}
              <StyledLink to={project.backEnd} target="_blank">
                Here
              </StyledLink>
            </Title>}
          </ProjectDetails>

          <br />
          <br />

          <LowerContainer>
            {project.explainations.map((explaination, idx) => (
              explaination.explain.map((ex, index) => (<>
                <Row key={index}>
                  {index % 2 !== 0 ? 
                  <>            
                  <Image flag = {ex.flag} currId = {currIdx} src={ex.image} alt="Project Screenshot" />
                  {currIdx === 2 && <Image idx = {idx} index = {index} currId = {currIdx} src={ex.extraImg} alt="Project Screenshot" />}
                  <Info>
                    <InfoTitle>{ex.title}</InfoTitle>
                    <InfoDesc>{ex.explain1}</InfoDesc>
                    <InfoDesc>{ex.explain2}</InfoDesc>
                    <InfoDesc>{ex.explain3}</InfoDesc>
                  </Info> </>:
                  <><Info>
                    <InfoTitle>{ex.title}</InfoTitle>
                    <InfoDesc>{ex.explain1}</InfoDesc>
                    <InfoDesc>{ex.explain2}</InfoDesc>
                    <InfoDesc>{ex.explain3}</InfoDesc>
                  </Info>
                  <Image idx = {idx} index = {index} currId = {currIdx} src={ex.image} alt="Project Screenshot" />
                  {currIdx === 2 && <Image currId = {currIdx} src={ex.extraImg} alt="Project Screenshot" />}
                  </>
                  }
                  <NewBox></NewBox>
                </Row>
                </>
              ))
            ))}
          </LowerContainer>
          <VideoTitle>Want to know more? See this YouTube Video</VideoTitle>
          <VideoContainer>
              <iframe
                src={project.youtubeId}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </VideoContainer>
        </Container>
        <Contact />
        </>
      ) : (
        <p>Sorry This is still under construction</p>
      )}
    </div>
  );
};

export default Project_Desc;