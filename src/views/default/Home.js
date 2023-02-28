import React from 'react';
import { Button, Row, Col, Card, Dropdown, Badge, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ChartCustomHorizontalTooltip from '../component/chart/ChartCustomHorizontalTooltip';
import ChartSmallLine1 from '../component/chart/ChartSmallLine1';
import ChartSmallLine2 from '../component/chart/ChartSmallLine2';
import ChartSmallLine3 from '../component/chart/ChartSmallLine3';
import ChartSmallLine4 from '../component/chart/ChartSmallLine4';
import ChartPie from '../component/chart/ChartPie';

const Home = () => {
  const title = 'Daily Monitoring Dashboard';
  const description = 'Daily Monitoring Performance Of A Specific Publisher | Report Visualization';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'ts/adx', text: 'Troubleshoot Ad Units' },
  ];

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(6, 'Must be at least 6 chars!').required('Password is required'),
  });
  const initialValues = { email: '', password: '' };
  const onSubmit = (values) => console.log('submit form', values);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row>
          {/* Title Start */}
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}
      <Row>
        <Col lg="6">
          {/* Stats Start */}
          <div className="d-flex">
            <Dropdown>
              <Dropdown.Toggle className="small-title p-0 align-top h-auto me-2" variant="link">
                Today's
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Weekly</Dropdown.Item>
                <Dropdown.Item>Monthly</Dropdown.Item>
                <Dropdown.Item>Yearly</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h2 className="small-title">Stats</h2>
          </div>
          <div className="mb-5">
            <Row className="g-2">
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="navigate-diagonal" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Shipped Orders</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">22</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="check" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Delivered Orders</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">35</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="alarm" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Pending Orders</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">22</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6">
                <Card className="sh-11 hover-scale-up cursor-pointer">
                  <Card.Body className="h-100 py-3 align-items-center">
                    <Row className="g-0 h-100 align-items-center">
                      <Col xs="auto" className="pe-3">
                        <div className="bg-gradient-light sh-5 sw-5 rounded-xl d-flex justify-content-center align-items-center">
                          <CsLineIcons icon="sync-horizontal" className="text-white" />
                        </div>
                      </Col>
                      <Col>
                        <Row className="gx-2 d-flex align-content-center">
                          <Col xs="12" className="col-12 d-flex">
                            <div className="d-flex align-items-center lh-1-25">Unconfirmed Orders</div>
                          </Col>
                          <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">3</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          {/* Stats End */}

          {/* Sales Start */}
          <h2 className="small-title">Sales</h2>
          <Card className="mb-5 sh-40">
            <Card.Body>
              <ChartCustomHorizontalTooltip />
            </Card.Body>
          </Card>
          {/* Sales End */}
        </Col>

        <Col lg="6" className="mb-5">
          <div className="d-flex justify-content-between">
            <h2 className="small-title">Stocks</h2>
            <Button variant="background-alternate" size="xs" className="btn-icon btn-icon-end p-0 text-small">
              <span className="align-bottom">View More</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
            </Button>
          </div>
          <div className="mb-n2">
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0 mw">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Barmbrack
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-tertiary" className="me-1">
                      STOCK
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">-18.4%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 3.25</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Cheesymite Scroll
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-tertiary" className="me-1">
                      STOCK
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">-13.4%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 4.50</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Cholermüs
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-primary" className="me-1">
                      SALE
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-top" className="me-1" size="14" />
                    <span className="text-medium">+9.7%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 1.75</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Ruisreikäleipä
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-primary" className="me-1">
                      SALE
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">+5.3%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 3.00</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Bagel
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-tertiary" className="me-1">
                      STOCK
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">-2.3%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 4.25</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Buccellato di Lucca
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-secondary" className="me-1">
                      TREND
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">-5.3%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 3.75</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Chapati
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-primary" className="me-1">
                      SALE
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">+7.1%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 1.85</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      Pullman Loaf
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-primary" className="me-1">
                      TREND
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">+2.3%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 2.25</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

      <Row className="gy-5">
        {/* Consumptions Start */}
        <Col xl="6">
          <div className="d-flex">
            <Dropdown>
              <Dropdown.Toggle className="small-title p-0 align-top h-auto me-2" variant="link">
                Today's
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Weekly</Dropdown.Item>
                <Dropdown.Item>Monthly</Dropdown.Item>
                <Dropdown.Item>Yearly</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h2 className="small-title">Stats</h2>
          </div>
          <Card className="sh-50 h-xl-100-card">
            <Card.Body className="h-100">
              <ChartPie />
            </Card.Body>
          </Card>
        </Col>
        {/* Consumptions End */}

        {/* Coins Start */}
        <Col xl="6">
          <h2 className="small-title">Coins</h2>
          <Row className="g-2">
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallLine1 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallLine2 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallLine3 />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <ChartSmallLine4 />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Coins End */}
      </Row>
    </>
  );
};

export default Home;