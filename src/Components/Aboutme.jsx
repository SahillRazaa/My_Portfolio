import React, { useEffect } from 'react';
import styled from 'styled-components';
import Myself from '../assets/my_image.jpg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { contactlap, maxilap, maxitab, miniimobile, minitab } from '../responvise';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 99vw;
    height: auto;
    background-color: black;
    ${miniimobile({
        paddingBottom: '20px'
    })}
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ImageContainer = styled.div`
    padding: 3%;
    flex: 1;
    ${minitab ({
        display : "none",
    })}
`;

const Image = styled.img`
    width: 80%;
    border-radius: 25px;
`;

const InfoContainer = styled.div`
    flex: 1;
    margin-top: 10px;
    ${minitab({
        // flex : "0",
    })}
`;

const Title1 = styled.p`
    font-size: 64px;
    line-height: 0px;
    font-weight: 500;
    color: white;
    ${maxilap({
        fontSize: '50px',
    })}
    ${contactlap({
        fontSize: '30px',
    })}
    ${maxitab({
        fontSize: '25px',
    })}
    ${minitab({
        textAlign : 'center',
    })}
`;

const Title2 = styled.p`
    font-size: 64px;
    line-height: 0px;
    font-weight: 500;
    color: white;
    ${maxilap({
        fontSize: '50px',
    })}
    ${contactlap({
        fontSize: '30px',
    })}
    ${maxitab({
        fontSize: '25px',
    })}
    ${minitab({
        textAlign : 'center',
    })}
`;

const Desc1 = styled.p`
    font-size: 20px;
    width: 85%;
    text-align: justify;
    line-height: 25px;
    color: #D5D5D6;
    ${maxilap({
        fontSize: '15px',
        lineHeight: '20px',
    })}
    ${contactlap({
        fontSize: '13px',
    })}
    ${maxitab({
        fontSize: '10px',
        lineHeight: '15px',
    })}
    ${minitab({
        padding : '0px 25px',
    })}
`;

const Desc2 = styled.p`
    font-size: 20px;
    width: 85%;
    text-align: justify;
    line-height: 25px;
    color: #D5D5D6;
    ${maxilap({
        fontSize: '15px',
        lineHeight: '20px',
    })}
    ${contactlap({
        fontSize: '13px',
    })}
    ${minitab({
        padding : '0px 25px',
    })}
`;

const ResumeButton = styled.button`
    font-size: 20px;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.25s ease-out;
    &:hover {
        transform: scale(1.1);
        transition: all 0.25s ease-in;
        color: white;
        box-shadow: 0px 0px 10px 2px white;
        background-color: transparent;
    }
    ${maxitab({
        fontSize: '15px',
    })}
    ${minitab({
        marginBottom : '20px',
        width : '30%',
    })}
`;

const ButtonCont = styled.div`
    ${minitab({
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
    })}
`

// Variants for motion animation
const boxVariant = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0}
};

const Aboutme = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <div style={{ backgroundColor: "black", width: "99vw" }}>
            {/* Motion div for animation */}
            <motion.div
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >
                <Container>
                    <Wrapper id='about'>
                        <ImageContainer>
                            <Image src={Myself} alt="Sahil Raza Ansari"/>
                        </ImageContainer>
                        <InfoContainer ref={ref}>
                            {/* Title */}
                            <Title1>Hello there!</Title1>
                            <Title2>I’m Sahil Raza Ansari</Title2>
                            {/* Descriptions */}
                            <Desc1>Hey there, I'm Sahil Raza Ansari, currently a third-year student pursuing BTech in Electronics and Communication Engineering (ECE). Since my early school days, I've been captivated by the world of coding, which ignited a passion for software development alongside my academic pursuits.</Desc1>
                            <Desc2>Despite my main focus on ECE, my curiosity for software development has been unrelenting. I've dedicated considerable time to exploring various programming languages and diving into coding projects that fuel my learning and growth.</Desc2>
                            
                            <Link to="https://drive.google.com/file/d/1utNt7A8e2_fHIahptEw_sNTZrsieCCGL/view?usp=sharing" target='_blank'>
                                <ButtonCont><ResumeButton >Resume</ResumeButton></ButtonCont>
                            </Link>
                        </InfoContainer>
                    </Wrapper>
                </Container>
            </motion.div>
        </div>
    );
}

export default Aboutme;
