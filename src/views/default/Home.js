import React from 'react';
import { Button, Row, Col, Card, Dropdown, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import PerformanceLine from 'views/component/chart/PerformanceLine';
import CtrLine from 'views/component/chart/CtrLine';
import BidsAndRequestsBar from 'views/component/chart/BidsAndRequestsBar';
import GeoLine from 'views/component/chart/GeoLine';

const Home = () => {
  const title = 'App Monitoring Dashboard';
  const description = 'Monitoring Performance Of A Specific App | Report Visualization';
  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'upr-card', text: 'Troubleshoot Ad Units' },
  ];
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
                Date Range
              </Dropdown.Toggle>
            </Dropdown>
            <h2 className="small-title">App ID</h2>
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
                            <div className="d-flex align-items-center lh-1-25">Total Revenue</div>
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
                            <div className="d-flex align-items-center lh-1-25">Total Fillrate</div>
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
                            <div className="d-flex align-items-center lh-1-25">Total eCPM</div>
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
                            <div className="d-flex align-items-center lh-1-25">Top GEOs</div>
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

          {/* CTR Start */}
          <h2 className="small-title">CTR by Days</h2>
          <Card className="mb-5 sh-40">
            <Card.Body>
              <CtrLine />
            </Card.Body>
          </Card>
          {/* CTR End */}
        </Col>

        {/* Top & Worst Zones Start */}
        <Col lg="6" className="mb-5">
          <div className="d-flex justify-content-between">
            <h2 className="small-title">Highest & Lowest Zones</h2>
            <Button variant="background-alternate" size="xs" className="btn-icon btn-icon-end p-0 text-small">
              <span className="align-bottom">View Zone Details</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
            </Button>
          </div>
          <div className="mb-n2">
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0 mw">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                      INT_0.85
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-secondary" className="me-1">
                      Interstitial
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">0.00%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 0.00</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                    INT_2.85
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-secondary"  className="me-1">
                    Interstitial
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">0.00%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 0.00</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                    INT_3.85
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-secondary"  className="me-1">
                    Interstitial
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">0.00%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 0.00</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                    INT_4.85
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-secondary"  className="me-1">
                    Interstitial
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-danger justify-content-center">
                    <CsLineIcons icon="arrow-bottom" className="me-1" size="14" />
                    <span className="text-medium">0.00%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 0.00</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                    Splash_DT_INT_47.85
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-secondary"  className="me-1">
                    Interstitial
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-top" className="me-1" size="14" />
                    <span className="text-medium">1.62%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 2,160.37</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                    Splash_DT_INT_117.12
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-secondary"  className="me-1">
                    Interstitial
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-top" className="me-1" size="14" />
                    <span className="text-medium">0.18%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 1,231.02</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                    Splash_DT_INT_80.85
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-secondary"  className="me-1">
                    Interstitial
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-top" className="me-1" size="14" />
                    <span className="text-medium">0.25%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 1,011.62</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2 sh-10 sh-md-8">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col className="d-flex align-items-center mb-2 mb-md-0">
                    <NavLink to="/pages/portfolio/detail" className="body-link text-truncate">
                    DT_INT_117.12
                    </NavLink>
                  </Col>
                  <Col className="d-flex align-items-center text-muted text-medium mb-1 mb-md-0">
                    <Badge bg="outline-secondary" className="me-1">
                    Interstitial
                    </Badge>
                  </Col>
                  <Col className="d-flex align-items-center text-medium text-success justify-content-center">
                    <CsLineIcons icon="arrow-top" className="me-1" size="14" />
                    <span className="text-medium">1.09%</span>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-end text-muted text-medium">
                    <span>$ 984.18</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
        {/* Top & Worst Zones End */}
      </Row>

      <Row className="gy-5">
        {/* Requests & Bids Start */}
        <Col xl="6">
          <div className="d-flex">
            <h2 className="small-title">Requests & Bids</h2>
          </div>
          <Card className="sh-50 h-xl-100-card">
            <Card.Body className="h-100">
              <BidsAndRequestsBar />
            </Card.Body>
          </Card>
        </Col>
        {/* Requests & Bids End */}

        {/* GEO Start */}
        <Col xl="6">
          <h2 className="small-title">Traffic Quality</h2>
          <Row className="g-2">
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <GeoLine data={{
                    labels: ['April 1', 'April 2', 'April 3', 'April 4', 'April 5', 'April 6', 'April 7'],
                    country: 'United States',
                    requests: [13092692, 13621577, 14473952, 14546858, 16501686, 14270515, 14659047]
                  }}/>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <GeoLine data={{
                    labels: ['April 1', 'April 2', 'April 3', 'April 4', 'April 5', 'April 6', 'April 7'],
                    country: 'United States',
                    requests: [13092692, 13621577, 14473952, 14546858, 16501686, 14270515, 14659047]
                  }}/>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <GeoLine data={{
                    labels: ['April 1', 'April 2', 'April 3', 'April 4', 'April 5', 'April 6', 'April 7'],
                    country: 'United States',
                    requests: [13092692, 13621577, 14473952, 14546858, 16501686, 14270515, 14659047]
                  }}/>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" xl="12">
              <Card className="sh-13">
                <Card.Body className="py-0 d-flex align-items-center">
                  <GeoLine data={{
                    labels: ['April 1', 'April 2', 'April 3', 'April 4', 'April 5', 'April 6', 'April 7'],
                    country: 'United States',
                    requests: [13092692, 13621577, 14473952, 14546858, 16501686, 14270515, 14659047]
                  }}/>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* GEO End */}
      </Row>

      <h2 className="small-title mt-5">eCPM & Fill-rate by Days</h2>
      <Card className="mb-5 sh-40">
        <Card.Body>
          <PerformanceLine />
        </Card.Body>
      </Card>
    </>
  );
};

export default Home;
