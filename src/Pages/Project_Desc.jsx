import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ProjectData } from '../Project_data/data';
import Contact from '../Components/Contact';
import { useEffect } from 'react';
import { contactlap } from '../responvise';

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const MainTitle = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const ProjectHead = styled.h2`
  text-decoration: underline;
  font-size: 24px;
  margin-bottom: 15px;
  color: #444;
`;

const ProjectDetails = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 20px;
  color: #555;
`;

const Details = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.5;
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
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; /* Change to column on mobile */
    align-items: center; /* Center items in column layout */
  }
`;

const Image = styled.img`
  flex: 1;
  max-width: ${(props) => ((props.currId === 1 || props.currId === 6) ? '20%' : props.flag === 'true' ? '35%' : '45%')};
  height: auto;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%; /* Full width on mobile */
    margin-bottom: 20px; /* Add some space below the image */
  }
`;

const Info = styled.div`
  flex: 1;
  max-width: 500px;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const InfoDesc = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  color: #555;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    background-color: transparent;
    color: black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const VideoTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 40px 0 20px;
  color: #444;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  iframe {
    width: 80%;
    height: 400px;
    border: none;
    border-radius: 10px;
    margin-bottom: 100px;
  }
`;

const Project_Desc = () => {
  const { id } = useParams();
  const currIdx = parseInt(id, 10);
  const project = ProjectData.find((proj) => proj.id === currIdx);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      {project ? (
        <>
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

            {project.frontEnd && (
              <Title>
                GitHub FrontEnd Link:{" "}
                <StyledLink to={project.frontEnd} target="_blank">
                  Here
                </StyledLink>
              </Title>
            )}
            {project.backEnd && (
              <Title>
                GitHub BackEnd Link:{" "}
                <StyledLink to={project.backEnd} target="_blank">
                  Here
                </StyledLink>
              </Title>
            )}
          </ProjectDetails>

          <LowerContainer>
            {project.explainations.map((explaination, idx) => (
              explaination.explain.map((ex, index) => (
                <Row key={index}>
                  {index % 2 !== 0 ? (
                    <>
                      <Image flag={ex.flag} currId={currIdx} src={ex.image} alt="Project Screenshot" />
                      {(currIdx === 1 || currIdx === 6) && <Image idx={idx} index={index} currId={currIdx} src={ex.extraImg} alt="Project Screenshot" />}
                      <Info>
                        <Title>{ex.title}</Title>
                        <InfoDesc>{ex.explain1}</InfoDesc>
                        <InfoDesc>{ex.explain2}</InfoDesc>
                        <InfoDesc>{ex.explain3}</InfoDesc>
                      </Info>
                    </>
                  ) : (
                    <>
                      <Info>
                        <Title>{ex.title}</Title>
                        <InfoDesc>{ex.explain1}</InfoDesc>
                        <InfoDesc>{ex.explain2}</InfoDesc>
                        <InfoDesc>{ex.explain3}</InfoDesc>
                      </Info>
                      <Image idx={idx} index={index} currId={currIdx} src={ex.image} alt="Project Screenshot" />
                      {(currIdx === 1 || currIdx === 6) && <Image currId={currIdx} src={ex.extraImg} alt="Project Screenshot" />}
                    </>
                  )}
                </Row>
              ))
            ))}
          </LowerContainer>

          {project.youtubeId && <VideoTitle>Want to know more? See this YouTube Video</VideoTitle>}
          {project.youtubeId && <VideoContainer>
            <iframe
              src={project.youtubeId}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>}
          {project.webLink && <VideoTitle style={{
            marginBottom : '150px',
          }}>Want to know more?<a style={{
            textDecoration : 'none',
            color : 'blue',
          }} target='_blank' href={project.webLink}> click here </a></VideoTitle>}
        </>
      ) : (
        <p>Sorry, this is still under construction.</p>
      )}
      <Contact home = 'false'/>
    </Container>
  );
};

export default Project_Desc;