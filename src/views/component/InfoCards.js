import React from "react";
import {Row, Col, Card} from "react-bootstrap";
import CsLineIcons from "cs-line-icons/CsLineIcons";

const InfoCards = ({info, statType}) => {
    if (statType === 'Ad Format') return (
    <>
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
                            <div className="d-flex align-items-center lh-1-25">Ad Format</div>
                        </Col>
                        <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">{info.Format}</div>
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
                            <div className="d-flex align-items-center lh-1-25">Expecting Price Rule</div>
                        </Col>
                        <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">{info.Floor}</div>
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
                            <div className="d-flex align-items-center lh-1-25">Reported Date</div>
                        </Col>
                        <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">{new Date().toJSON().slice(0, 10).replace(/-/g, '/')}</div>
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
                            <div className="d-flex align-items-center lh-1-25">Date Range</div>
                        </Col>
                        <Col xl="auto" className="col-12">
                            <div className="cta-2 text-primary">{info.Duration}</div>
                        </Col>
                        </Row>
                    </Col>
                    </Row>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </div>
    </>);
    else if (statType === 'Ad Unit') return (
        <>
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
                                <div className="d-flex align-items-center lh-1-25">Ad Unit ID</div>
                            </Col>
                            <Col xl="auto" className="col-12">
                                <div className="cta-2 text-primary">{info.Unit}</div>
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
                                <div className="d-flex align-items-center lh-1-25">Price Rule at Range</div>
                            </Col>
                            <Col xl="auto" className="col-12">
                                <div className="cta-2 text-primary">{info.Floor}</div>
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
                                <div className="d-flex align-items-center lh-1-25">Reported Date</div>
                            </Col>
                            <Col xl="auto" className="col-12">
                                <div className="cta-2 text-primary">{new Date().toJSON().slice(0, 10).replace(/-/g, '/')}</div>
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
                                <div className="d-flex align-items-center lh-1-25">Date Range</div>
                            </Col>
                            <Col xl="auto" className="col-12">
                                <div className="cta-2 text-primary">{info.Duration}</div>
                            </Col>
                            </Row>
                        </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </div>
    </>);
};

export default InfoCards;