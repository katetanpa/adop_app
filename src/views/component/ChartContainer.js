
import React from 'react';
import { Row, Col, Card} from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import AverageCpmLine from 'views/component/chart/AverageCpmLine';
import BidChart from './chart/BidChart';
import RevLargeLine from './chart/RevLargeLine';
import PieStat1 from './chart/PieStat1';
import PieStat2 from './chart/PieStat2';
import PieStat3 from './chart/PieStat3';
import PieStat4 from './chart/PieStat4';

const ChartContainer = ({data, info, logData}) => {
    return (
        <>
          {/* Chart Content Starts */}
          <div className='d-grid gap-3'>
            {/* Bid Reason Start */}
            <h2 className="small-title">Bid Reject Reasons</h2>
            <Row>
              <Col>
                {/* Title Start */}
                <section className="scroll-section" id="title">
                  <div className="page-title-container">
                    <h1 className="mb-50 pb-0 display-4">Pricing Rule Card</h1>
                  </div>
                  {/* Title End */}
                  <Card className="mb-5" body>
                    <BidChart data={data.bidChartData} />
                  </Card>
                  <Card className="mb-5" body>
                    <AverageCpmLine data={data.cpmLineData} info={info} />
                  </Card>
                </section>
                {/* Title End */}
              </Col>
            </Row>
            {/* Bid Reason End */}

            <Row>
              <Col>
                <section className="scroll-section" id="title">
                  {/* Title Start */}
                  <div className="page-title-container">
                    <h1 className="mb-50 pb-0 display-4">Estimated Revenue over Bid Ranges</h1>
                  </div>
                  {/* Title End */}
                  {/* Revenue Line Detail Starts */}
                  <Card className="mb-50 min-vh-100 h-xl-500-card">
                    <Card.Body className="h-400">
                      <RevLargeLine dataRev={data.revLineData} />
                    </Card.Body>
                  </Card>
                  {/* Revenue Line Detail End */}
                </section>
              </Col>
            </Row>

            <Row>
              {/* Logs Start */}
              <Col xl="6" className="mb-5">
                <h2 className="small-title">Logs</h2>
                <Card className="sh-40 h-xl-100-card">
                  <Card.Body className="mb-n2 scroll-out h-100">
                    <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="h-100">
                      <Row id='totalBid' className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                            <div className="sh-3">
                              <CsLineIcons icon="circle" className="text-primary align-top" />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                            <div className="d-flex flex-column">
                              <div className="text-alternate mt-n1 lh-1-25">Total Bids</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                            <div className="text-muted ms-2 mt-n1 lh-1-25">{logData.totalBid.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row id='totalWin' className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                            <div className="sh-3">
                              <CsLineIcons icon="square" className="text-secondary align-top" />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                            <div className="d-flex flex-column">
                              <div className="text-alternate mt-n1 lh-1-25">Total Bid Win</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                            <div className="text-muted ms-2 mt-n1 lh-1-25">{logData.totalWin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row id='totalRev' className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                            <div className="sh-3">
                              <CsLineIcons icon="triangle" className="text-tertiary align-top" />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                            <div className="d-flex flex-column">
                              <div className="text-alternate mt-n1 lh-1-25">Total Estimated Revenue</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                            <div className="text-muted ms-2 mt-n1 lh-1-25">${logData.totalRev.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row id='bidAtPrice' className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                            <div className="sh-3">
                              <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                            <div className="d-flex flex-column">
                              <div className="text-alternate mt-n1 lh-1-25">Bid Counts at Floor</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                            <div className="text-muted ms-2 mt-n1 lh-1-25">{logData.bidAtPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row id='revAtPrice' className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                            <div className="sh-3">
                              <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                            <div className="d-flex flex-column">
                              <div className="text-alternate mt-n1 lh-1-25">Revenue at Floor</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                            <div className="text-muted ms-2 mt-n1 lh-1-25">${logData.revAtPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row id='totalAvgCPM' className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                            <div className="sh-3">
                              <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                            <div className="d-flex flex-column">
                              <div className="text-alternate mt-n1 lh-1-25">Total Average CPM</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                            <div className="text-muted ms-2 mt-n1 lh-1-25">${logData.totalAvgCPM.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row id='totalRanges' className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                            <div className="sh-3">
                              <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                            <div className="d-flex flex-column">
                              <div className="text-alternate mt-n1 lh-1-25">Total Ranges Shown</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                            <div className="text-muted ms-2 mt-n1 lh-1-25">{logData.totalRanges.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row id='lowestBid' className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                            <div className="sh-3">
                              <CsLineIcons icon="square" className="text-secondary align-top" />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                            <div className="d-flex flex-column">
                              <div className="text-alternate mt-n1 lh-1-25">Lowest Range</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                            <div className="text-muted ms-2 mt-n1 lh-1-25">{logData.lowestBid}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row id='highestBid' className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                            <div className="sh-3">
                              <CsLineIcons icon="triangle" className="text-tertiary align-top" />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                            <div className="d-flex flex-column">
                              <div className="text-alternate mt-n1 lh-1-25">Highest Range</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                            <div className="text-muted ms-2 mt-n1 lh-1-25">{logData.highestBid}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row id='mostBid' className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                            <div className="sh-3">
                              <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                            <div className="d-flex flex-column">
                              <div className="text-alternate mt-n1 lh-1-25">Most Bid At</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                            <div className="text-muted ms-2 mt-n1 lh-1-25">{logData.mostBid}</div>
                          </div>
                        </Col>
                      </Row>
                      <Row id='mostRev' className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                            <div className="sh-3">
                              <CsLineIcons icon="hexagon" className="text-quaternary align-top" />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex flex-column pt-0 pb-0 ps-3 pe-4 h-100 justify-content-center">
                            <div className="d-flex flex-column">
                              <div className="text-alternate mt-n1 lh-1-25">Most Revenue At</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs="auto">
                          <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                            <div className="text-muted ms-2 mt-n1 lh-1-25">{logData.mostRev}</div>
                          </div>
                        </Col>
                      </Row>
                    </OverlayScrollbarsComponent>
                  </Card.Body>
                </Card>
              </Col>
              {/* Logs End */}

              {/* Progress Start */}
              <Col xl="6" className="mb-5">
                <h2 className="small-title">Pie Stats</h2>
                <Row className="g-2">
                  <Col md="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <PieStat1 data={logData.pieData1} />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <PieStat2 data={logData.pieData2} />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <PieStat3 data={logData.pieData3} />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="sh-13">
                      <Card.Body className="py-0 d-flex align-items-center">
                        <PieStat4 data={logData.pieData4} />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
              {/* Progress End */}
            </Row>
          </div>
          {/* Chart Content End */}
        </>
    );
};

export default ChartContainer;