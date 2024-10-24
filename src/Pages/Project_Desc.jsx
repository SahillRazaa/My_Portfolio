import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ProjectData } from '../Project_data/data';
import Contact from '../Components/Contact';
import { useEffect } from 'react';

const Container = styled.div`
  padding: 30px;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
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
  width: 100%;
  max-width: 1200px;
  text-align: justify;
  margin-bottom: 20px;
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
`;

const Image = styled.img`
  max-width: ${props =>  props.currId === 2 ? '400px' : '600px'};
  height: auto;
  object-fit: contain;
`;

const Info = styled.div`
  max-width: 500px;
  padding: 20px;
`;

const InfoDesc = styled.p`
  margin-bottom: 10px;
  text-align: justify;
  font-size : 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 10px;
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
            <Details>{project.desc}</Details>

            <Title>Duration</Title>
            <Details>{project.duration}</Details>

            <Title>Dates</Title>
            <Details>{project.dates}</Details>

            <Title>Tech Stacks</Title>
            <Details>{project.stacks}</Details>

            <Title>
              GitHub FrontEnd Link:{" "}
              <StyledLink to={project.frontEnd} target="_blank">
                Click Here
              </StyledLink>
            </Title>
            <Title>
              GitHub BackEnd Link:{" "}
              <StyledLink to={project.backEnd} target="_blank">
                Click Here
              </StyledLink>
            </Title>
          </ProjectDetails>

          <br />
          <br />

          <LowerContainer>
            {project.explainations.map((explaination) => (
              explaination.explain.map((ex, index) => (<>
                <Row key={index}>
                  {index % 2 !== 0 ? 
                  <>            
                  <Image currId = {currIdx} src={ex.image} alt="Project Screenshot" />
                  <Info>
                    <InfoDesc>{ex.explain1}</InfoDesc>
                    <InfoDesc>{ex.explain2}</InfoDesc>
                    <InfoDesc>{ex.explain3}</InfoDesc>
                  </Info> </>:
                  <><Info>
                    <InfoDesc>{ex.explain1}</InfoDesc>
                    <InfoDesc>{ex.explain2}</InfoDesc>
                    <InfoDesc>{ex.explain3}</InfoDesc>
                  </Info>
                  <Image currId = {currIdx} src={ex.image} alt="Project Screenshot" />
                  </>
                  }
                </Row>
                </>
              ))
            ))}
          </LowerContainer>
        </Container>
        <Contact />
        </>
      ) : (
        <p>No project data available</p>
      )}
    </div>
  );
};

export default Project_Desc;