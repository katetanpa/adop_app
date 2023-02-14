import React from 'react';
import { Row, Col} from 'react-bootstrap';
import InfoCards from './component/InfoCards';
import DropdownStats from './component/DropdownStats';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import useGoogleSheets from 'use-google-sheets';
import Loading from 'components/loading/Loading';
import NotFound from './default/NotFound';
import ChartContainer from './component/ChartContainer';
import { troubleshootData} from 'views/DataSlice';

const TroubleshootOB = () => {
    const code = 10;
    const title = 'Troubleshoot Ad Units';
    const description = 'Troubleshoot Ad Server Performance';
    const breadcrumbs = [
      { to: '', text: 'View Ad Exchange Performance' },
      { to: 'input', text: 'Input Data' },
    ];
    const { data, loading, error } = useGoogleSheets({
      apiKey: 'AIzaSyDPU9dCR-MfmwvmlLYsOXCQUlWT-kL4Fow',
      sheetId: '1zBuiVhNyOTyrJibcRPvj3PXcKs-CiocuCPMRGKiEyC4',
      sheetsOptions: [{ id: 'Bid Range Breakdown', headerRowIndex: 1 }, {id: 'Price Floor Config', headerRowIndex: 0}]
    });
    if (loading) {
      return <Loading /> ;
    };
    if (error) {
      return <NotFound/>;
    };
    const result = troubleshootData(data, code);
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
        <DropdownStats code={code} />
        <InfoCards info={result.info} statType={'Ad Unit'}/>
      </Row>
      <ChartContainer data={result} info={result.info} logData={result.logData} />
    </>
    );
    else return <> <Loading /> </>
};

export default TroubleshootOB;
