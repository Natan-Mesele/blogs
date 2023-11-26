import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";

function Section() {

  return (
        <Container >
          {blogs.map((blog) => (
          <News>
            <img src={blog.coverImg} />
            <NewsInfo>
              <Date>
                <span>{blog.date}</span> 
              </Date>
              <Title>
                <Link to='./detail'>{blog.title}</Link>
              </Title>
              <Desc>
                <p>{blog.desc}</p>
              </Desc>
            </NewsInfo>
          </News>))}
        </Container>
  )
}

export default Section

const Container = styled.div`
    margin: 1rem;

   @media(min-width: 768px){
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    margin-top: 10rem;
    padding: 0 4rem;
  }
`
const News = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  background: #EEEDED;
  padding: 1rem;

  img {
    width: 100%;
    height: 15em;
    object-fit: cover;
  }
`
const NewsInfo = styled.div`
  margin-top: 1rem;
`
const Date = styled.div`
  font-size: 0.7rem;
  color: gray;
  margin-bottom: 0.8rem;
`
const Title = styled.div`
  a {
    text-decoration: none;
    color: black;
    font-size: 1.4rem;
  }

`
const Desc = styled.div`
  p {
    font-size: 0.9rem;
    line-height: 1.4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`