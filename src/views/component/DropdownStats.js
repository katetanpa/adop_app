import { Dropdown } from "react-bootstrap";
const DropdownStats = ({code}) => {
    const dropDownValues = [
        {
            "id": '3',
            "title": "Ad Exchange Report",
            "path": "/ts/adx",
            "component": "<TroubleshootAdx data={adxData}/>"
        }, 
        {
            "id": '10',
            "title": "Open Bidding & Ad Server Report",
            "path": "/ts/ob",
            "component": "<OpenBiddingAnalytic data={obData}/>"
        }
    ];
    const activeItem = dropDownValues.filter((el) => el.id === code.toString())[0];
    const inactiveItems =  dropDownValues.filter((el) => el.id != activeItem.id);
    return (<>
              <div className="d-flex">
            <Dropdown>
            <Dropdown.Toggle className="small-title p-0 align-top h-auto me-2" variant="link">
                {activeItem.title}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href={inactiveItems[0].path} >{inactiveItems[0].title}</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <h2 className="small-title">Stats</h2>
          </div>
    </>)
};
export default DropdownStats;