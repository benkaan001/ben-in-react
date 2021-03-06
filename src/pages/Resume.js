import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GitHubCalendar from 'react-github-calendar';

import './Resume.css';

const Resume = () => {
  return (
    <>
      <Container fluid className='p-5 mb-0 shadow jumbotron'>
        <Container className='text-center'>
          <div className='p-md-5'>
            <h1>
              Skills <span>&amp;</span> Experience
            </h1>
          </div>
        </Container>
      </Container>

      <Container className='py-5 d-flex flex-column flex-md-row justify-content-center align-items-center'>
        <Button
          target='_blank'
          rel='noopener noreferrer'
          className='btn'
          href='https://docs.google.com/document/d/1Dw6ASE2igZDztme0b_df8SAH7XEbdxjnv9dshMWwXcE/edit?usp=sharing'
        >
          View My Resume
        </Button>
      </Container>

      <Container>
        <Row>
          <Col>
            <div className='skills-card'>
              <div className='skills-card-side skills-card-front'>
                <div className='skills-card-info'>
                  <h4 className='mt-4 text-center'>Frontend Skills</h4>
                  <div className='skills-card-img'>
                    <img
                      src='https://img.icons8.com/external-soft-fill-juicy-fish/50/000000/external-css-coding-and-development-soft-fill-soft-fill-juicy-fish.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/000000/external-javascript-is-a-high-level-interpreted-programming-language-logo-shadow-tal-revivo.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/ios-filled/50/000000/html-5--v1.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/wired/100/000000/react.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/color/50/000000/bootstrap.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/color/50/000000/sass.png'
                      alt=''
                    />
                    <img
                      src='https://img.icons8.com/wired/80/000000/api-settings.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>

              <div className='skills-card-side skills-card-back'>
                <button className='btn' disabled={true}>
                  frontEnd skils
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <div className='skills-card'>
              <div className='skills-card-side skills-card-front'>
                <div className='skills-card-info'>
                  <h4 className='mt-4 text-center'>Backend Skills</h4>

                  <img
                    src='https://img.icons8.com/color/100/000000/nodejs.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/external-tal-revivo-filled-tal-revivo/50/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-filled-tal-revivo.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/windows/50/000000/npm.png'
                    alt=''
                  />

                  <img
                    src='https://img.icons8.com/color/100/000000/express.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/color/50/000000/heroku.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/fluency-systems-regular/50/000000/mysql.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/color/50/000000/graphql.png'
                    alt=''
                  />

                  <img
                    src='https://img.icons8.com/wired/50/000000/postman-api.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/ios/50/000000/api.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/ios/50/000000/redux.png'
                    alt=''
                  />
                  <img
                    src='https://img.icons8.com/color/50/000000/java-web-token.png'
                    alt=''
                  />
                </div>
              </div>

              <div className='skills-card-side skills-card-back'>
                <button className='btn' disabled={true}>
                  backend skils
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='justify-content-center mt-4 mb-4'>
        <Row>
          <Col>
            <Card className='github-calendar'>
              <Card.Body className='mt-4 justify-content-center github-calendar'>
                <h4 className='text-center '>Days I coded</h4>
                <div className='p-4'>
                  <GitHubCalendar username='benkaan001' />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Resume;
