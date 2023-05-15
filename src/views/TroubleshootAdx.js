import React, { useState } from "react"
import { Row, Col} from 'react-bootstrap';
import { Dropdown } from "react-bootstrap";
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import Loading from 'components/loading/Loading';
import NotFound from './default/NotFound';
import InfoCards from './component/InfoCards';
import ChartContainer from './component/ChartContainer';
import { troubleshootData} from 'views/DataSlice';
import useGoogleSheets from 'use-google-sheets';

const TroubleshootAdx = () => {
    const [demandID, setDemandID] = useState(3);
    const dropDownValues = [
        {
            "id": 3,
            "title": "Ad Exchange Report",
            "path": "/ts/adx",
            "component": "<TroubleshootAdx data={adxData}/>"
        }, 
        {
            "id": 10,
            "title": "Open Bidding & Ad Server Report",
            "path": "/ts/ob",
            "component": "<OpenBiddingAnalytic data={obData}/>"
        }
    ];
    const [activeItem, setActiveItem] = useState(dropDownValues[0]);
    const title = 'Troubleshoot Ad Units';
    const description = 'Troubleshoot Ad Exchange Performance';
    const breadcrumbs = [
      { to: '', text: 'Ad Exchange Performance' },
      { to: 'input', text: 'Input Data' },
    ];
    const { data, loading, error } = useGoogleSheets({
      apiKey: 'AIzaSyDPU9dCR-MfmwvmlLYsOXCQUlWT-kL4Fow',
      sheetId: '1zBuiVhNyOTyrJibcRPvj3PXcKs-CiocuCPMRGKiEyC4',
      sheetsOptions: [{ id: 'Bid Range Breakdown', headerRowIndex: 1 }, {id: 'Ad Unit Config', headerRowIndex: 0}]
    });
    if (loading) {
      return <Loading /> ;
    };
    if (error) {
      return <NotFound />;
    };
    const result = troubleshootData(data, demandID);
    if (result.data.length)
    return (
    <>
      <HtmlHead title={title} description={description} />
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
      <Row>
        <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle className="small-title p-0 align-top h-auto me-2" variant="link">
              {activeItem.title}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => {setDemandID(dropDownValues[0].id); setActiveItem(dropDownValues[0])}}>{dropDownValues[0].title}</Dropdown.Item>
              <Dropdown.Item onClick={() => {setDemandID(dropDownValues[1].id); setActiveItem(dropDownValues[1])}}>{dropDownValues[1].title}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <h2 className="small-title">Stats</h2>
        </div>
        <InfoCards info={result.info} statType={'Ad Unit'}/>
      </Row>
      <ChartContainer data={result} info={result.info} logData={result.logData} />
    </>
    );
    else return <> <Loading /> </>
};

export default TroubleshootAdx;
