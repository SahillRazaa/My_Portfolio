import React from 'react';
import styled from 'styled-components';
import { contactlap, maximobile, miniimobile, miniminimobile, minitab } from '../responvise';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  // width : 9vw; 
  background-color: white;
  min-height: 80vh;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding: 20px;
  border-radius: 15px;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 20px;
  ${contactlap({
    fontSize: "3rem",
  })}
  ${minitab({
    fontSize: "2rem",
  })}
  ${miniimobile({
    fontSize: "1.2rem",
  })}
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 40%;
  margin: 10px 0;
  padding: 20px;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: black;
  margin-bottom: 10px;
  ${maximobile({
    fontSize: "1rem"
  })}
  ${miniminimobile({
    fontSize: "0.7rem"
  })}
`;

const CardContent = styled.p`
  font-size: 1rem;
  color: black;
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 0.9rem;
  color: white;
  background-color: black;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: white;
    box-shadow : 0px 0px 20px 5px black;
    color : black;
  }
`;

const achievements = [
  {
    title: 'LeetCode',
    content: 'Solved 256 DSA problems',
    link: 'https://leetcode.com/u/connectwithsahil007/'
  },
  {
    title: 'GeeksForGeeks',
    content: 'Solved 125 DSA problems',
    link: 'https://www.geeksforgeeks.org/user/connectwith7k0/'
  },
];

const Achievements = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>My Coding Achievements</Title>
        {achievements.map((achievement, index) => (
          <Card key={index}>
            <CardTitle>{achievement.title}</CardTitle>
            <CardContent>{achievement.content}</CardContent>
            <LinkButton href={achievement.link} target="_blank" rel="noopener noreferrer">
              View Profile
            </LinkButton>
          </Card>
        ))}
      </InnerContainer>
    </Container>
  );
};

export default Achievements;
