import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Home.css";

const Container = styled.div`
  width: 100;
`;

const Main = styled.div`
  width: 100%;
  height: 600px;
`;

const Main_Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1503236823255-94609f598e71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Slide_P = styled.p`
  font-size: 60px;
  position: relative;
  width: 500px;
  left: 10%;
  top: 215px;
  @media (max-width: 600px) {
    width: 50%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  column-gap: 10px;
  row-gap: 10px;

  @media (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 300px);
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 400px);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 400px);
  }
  padding: 100px 5%;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: hidden;
  text-align: center;
  position: relative;
  display: flex;

  &:hover span {
    opacity: 1;
  }
`;

const StyledImg = styled.img`
  /* background-image: url("https://source.unsplash.com/featured/?beauty"); */
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
    opacity: 0.3;
  }
`;

const StyledSpan = styled.span`
  color: white;
  font-size: 12px;
  margin: 0 auto;
  margin-top: 150px;
  display: inline-block;
  padding: 0 20px;

  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  z-index: 2;

  /* &:hover {
    opacity: 1;
  } */
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <Container>
        <Main>
          <Main_Slide>
            <Slide_P>Curabitur consequat, etiam</Slide_P>
          </Main_Slide>
        </Main>
        <Content>
          <ImgBox>
            <StyledImg src="https://source.unsplash.com/featured/?beauty" />
            <StyledSpan>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam
              faucibus sed elit vivamus posuere.
            </StyledSpan>
          </ImgBox>
          <ImgBox>
            <StyledImg src="https://source.unsplash.com/featured/?makeup" />
          </ImgBox>
          <ImgBox>
            <StyledImg src="https://source.unsplash.com/featured/?model" />
          </ImgBox>
          <ImgBox>
            <StyledImg src="https://source.unsplash.com/featured/?beautiful" />
          </ImgBox>
          <ImgBox>
            <StyledImg src="https://source.unsplash.com/featured/?lotion" />
          </ImgBox>
          <ImgBox>
            <StyledImg src="https://source.unsplash.com/featured/?fashion" />
          </ImgBox>
        </Content>
      </Container>
    );
  }
}

export default Home;
