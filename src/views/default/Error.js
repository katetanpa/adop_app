import React from 'react';
import { NavLink } from 'react-router-dom';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';

const Error = () => {
  const title = 'Error';
  const description = 'Error Page';

  const rightSide = (
    <div className="sw-lg-80 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
      <div className="sw-lg-60 px-5">
        <div className="sh-11">
          <NavLink to="/">
            <div className="logo-default" />
          </NavLink>
        </div>
        <div className="mb-5">
          <h2 className="cta-1 mb-0 text-primary">Ooops, it looks there is no valid data!</h2>
          <h2 className="display-2 text-primary">Error 404</h2>
        </div>
        <div className="mb-5">
          <p className="h6">It looks like the data you are looking for is not available at Input Sheet.</p>
          <p className="h6">
            If you think that is a mistake, please <a href='https://docs.google.com/spreadsheets/d/14sye2sr4-tV_Ic3TCd-ETpr-FtumUDDg3-PLZIzXvWQ/edit#gid=1157232749'>check your input file</a> here.
          </p>
        </div>
        <div>
          <a href="https://docs.google.com/spreadsheets/d/1tiipv7rM72nniasT5EEP13SZCzwAVcYfpQE019ncCjk/edit#gid=0" target={'blank'} className="btn btn-icon btn-icon-start btn-primary">
            <CsLineIcons icon="arrow-left" /> <span>Back to Input File</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage right={rightSide} />
    </>
  );
};

export default Error;
