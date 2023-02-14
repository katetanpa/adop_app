export function getBidChartData (response) {
  let bidChart = response.data.reduce((a, { Range, Reason, Bids }) => {
    let item = a.find(el => el.Range === Range);
    if(!item) {
      return [...a, {Range, Reason: [Reason], Bids: [Bids] }]
    };
    item.Reason.push(Reason);
    item.Bids.push(Bids);
    return [...a, item];
  },[]).map(el => 
  {
    let item = {};
    el.Reason.forEach((key, i) => 
    {
      if (!item[key]) item[key] = el.Bids[i];
      else item[key] += el.Bids[i];
    }
    );
    item.Range = el.Range;
    return item;
  });
  return bidChart;
};
export function getCpmLineData (response) {
  let result = response.data.reduce((a, { Range, Reason, CPM }) => {
    let item = a.find(el => el.Range === Range);
    if(!item) return [...a, {Range, Reason: [Reason], CPM: [parseFloat(CPM.replace('$', ""))] }];
    item.Reason.push(Reason);
    item.CPM.push(parseFloat(CPM.replace('$', "")));
    return a;
  },[]).map((el) => {
    let obj = el.Reason.reduce((accumulator, element, index) => {
    return {...accumulator, [element]: el.Reason[index]}}, {});
    obj.Range = el.Range;
    obj.CPM = el.CPM;
    obj.highest = el.Reason[el.CPM.indexOf(Math.max(...el.CPM))];
    return obj;
  });
  return result;
};
export function getRevLineData(response) {
  let result = response.data.reduce((a, { Range, Reason, Bids, CPM }) => {
    let item = a.find(el => el.Range === Range);
    if(!item) return [...a, {Range, Reason: [Reason], Bids: [Bids], CPM: [CPM] }];
    item.Reason.push(Reason)
    item.Bids.push(Bids);
    item.CPM.push(CPM);
    return a;
  },[]).map(el => 
  {
    let item = {};
    el.Reason.forEach((key, i) => 
    {
      if (!item[key]) item[key] = [el.Bids[i], el.CPM[i]];
      else {
        item[key].push(el.Bids[i]);
        item[key].push(el.CPM[i]);
      };
    }
    );
    item.Range = el.Range;
    return item;
  });
  return result;
};
export const troubleshootData = (data, code) => {
    const info = data[1].data[0];
    let response = {};
    const parse = data[0].data.map((el) => JSON.parse(JSON.stringify(el), function(k, v) { return (typeof v === "object" || isNaN(v)) ? v : parseFloat(v);}) )
    if (code === 0) 
    {
        const input2 = parse; 
        let logData = {
            totalBid: input2.reduce((acc, el) => (acc += el.Bids), 0),
            totalAvgCPM: (input2.reduce((acc, el) => (acc += parseFloat(el.CPM.replace("$", ""))), 0) / input2.length).toFixed(3),
            totalWin: input2.filter((el) => el.Code === 1).reduce((acc, cur) => (acc += cur.Bids), 0),
            totalRev: input2
              .filter((el) => el.Code === 1)
              .reduce((acc, cur) => (acc += (cur.CPM.replace("$", "") / 1000) * cur.Bids), 0)
              .toFixed(2),
            bidAtPrice: input2.filter((el) => el.Range === info.Floor).reduce((ac, cur) => (ac += cur.Bids), 0),
            revAtPrice: input2
              .filter((el) => el.Range === info.Floor && el.Code === 1)
              .reduce((acc, cur) => (acc += (cur.CPM.replace("$", "") / 1000) * cur.Bids), 0),
            totalRanges: [...new Set(input2.map((el) => el.Range))].length,
            lowestBid: [...new Set(input2.map((el) => el.Range))][0],
            highestBid: [...new Set(input2.map((el) => el.Range))][[...new Set(input2.map((el) => el.Range))].length - 1],
            mostBid: `${Math.max(
              ...[...new Set(input2.map((el) => el.Range))].map((range) => {
                return input2.filter((el) => el.Range === range).reduce((acc, cur) => (acc += cur.Bids), 0);
              }))} Bids at: ${
              [...new Set(input2.map((el) => el.Range))][
                [...new Set(input2.map((el) => el.Range))]
                  .map((range) => {
                    return input2.filter((el) => el.Range === range).reduce((acc, cur) => (acc += cur.Bids), 0);
                  })
                  .indexOf(
                    Math.max(
                      ...[...new Set(input2.map((el) => el.Range))].map((range) => {
                        return input2.filter((el) => el.Range === range).reduce((acc, cur) => (acc += cur.Bids), 0);
                      })
                    )
                  )
              ]
            }`,
            mostRev: `$${Math.max(
              ...[...new Set(input2.map((el) => el.Range))].map((range) => {
                return input2.filter((el) => el.Range === range && el.Code === 1).reduce((acc, cur) => (acc += (cur.CPM.replace("$", "") / 1000) * cur.Bids), 0);
              })
            ).toFixed(3)} at: ${
              [...new Set(input2.map((el) => el.Range))][
                [...new Set(input2.map((el) => el.Range))]
                  .map((range) => {
                    return input2.filter((el) => el.Range === range && el.Code === 1).reduce((acc, cur) => (acc += (cur.CPM.replace("$", "") / 1000) * cur.Bids), 0);
                  })
                  .indexOf(
                    Math.max(
                      ...[...new Set(input2.map((el) => el.Range))].map((range) => {
                        return input2
                          .filter((el) => el.Range === range && el.Code === 1)
                          .reduce((acc, cur) => (acc += (cur.CPM / 1000) * cur.Bids), 0);
                      })
                    )
                  )
              ]
            }`,
          };
        const pieDatas = {
        pieData1: [logData.totalWin, logData.totalBid - logData.totalWin],
        pieData2: [
            input2.filter((el) => el.Range === info.Floor && el.Code === 1)[0].Bids,
            logData.bidAtPrice - input2.filter((el) => el.Range === info.Floor && el.Code === 1)[0].Bids,
        ],
        pieData3: [
            input2.filter((el) => el.Code === 3).reduce((ac, cur) => (ac += cur.Bids), 0),
            logData.totalBid - input2.filter((el) => el.Code === 3).reduce((ac, cur) => (ac += cur.Bids), 0),
        ],
        pieData4: [
            input2.filter((el) => [7, 8, 5, 6].includes(el.Code)).reduce((ac, cur) => (ac += cur.Bids), 0),
            logData.totalBid - input2.filter((el) => [7, 8, 5, 6].includes(el.Code)).reduce((ac, cur) => (ac += cur.Bids), 0),
        ],
        };
        const response = {
            "info": info,
            "data": input2,
            "logData": { ...logData, ...pieDatas },
        };
        return response;
    }
    else 
    {
    const input2 = parse.filter((el) => el.ID === code);
    console.log(input2);
    let logData = {
        totalBid: input2.reduce((acc, el) => (acc += el.Bids), 0),
        totalAvgCPM: (input2.reduce((acc, el) => (acc += parseFloat(el.CPM.replace("$", ""))), 0) / input2.length).toFixed(3),
        totalWin: input2.filter((el) => el.Code === 1).reduce((acc, cur) => (acc += cur.Bids), 0),
        totalRev: input2
          .filter((el) => el.Code === 1)
          .reduce((acc, cur) => (acc += (cur.CPM.replace("$", "") / 1000) * cur.Bids), 0)
          .toFixed(2),
        bidAtPrice: input2.filter((el) => el.Range === info.Floor).reduce((ac, cur) => (ac += cur.Bids), 0),
        revAtPrice: input2
          .filter((el) => el.Range === info.Floor && el.Code === 1)
          .reduce((acc, cur) => (acc += (cur.CPM.replace("$", "") / 1000) * cur.Bids), 0).toFixed(3),
        totalRanges: [...new Set(input2.map((el) => el.Range))].length,
        lowestBid: [...new Set(input2.map((el) => el.Range))][0],
        highestBid: [...new Set(input2.map((el) => el.Range))][[...new Set(input2.map((el) => el.Range))].length - 1],
        mostBid: `${Math.max(
          ...[...new Set(input2.map((el) => el.Range))].map((range) => {
            return input2.filter((el) => el.Range === range).reduce((acc, cur) => (acc += cur.Bids), 0);
          })).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Bids at: ${
          [...new Set(input2.map((el) => el.Range))][
            [...new Set(input2.map((el) => el.Range))]
              .map((range) => {
                return input2.filter((el) => el.Range === range).reduce((acc, cur) => (acc += cur.Bids), 0);
              })
              .indexOf(
                Math.max(
                  ...[...new Set(input2.map((el) => el.Range))].map((range) => {
                    return input2.filter((el) => el.Range === range).reduce((acc, cur) => (acc += cur.Bids), 0);
                  })
                )
              )
          ]
        }`,
        mostRev: `$${Math.max(
          ...[...new Set(input2.map((el) => el.Range))].map((range) => {
            return input2.filter((el) => el.Range === range && el.Code === 1).reduce((acc, cur) => (acc += (cur.CPM.replace("$", "") / 1000) * cur.Bids), 0);
          })
        ).toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} at: ${
          [...new Set(input2.map((el) => el.Range))][
            [...new Set(input2.map((el) => el.Range))]
              .map((range) => {
                return input2.filter((el) => el.Range === range && el.Code === 1).reduce((acc, cur) => (acc += (cur.CPM.replace("$", "") / 1000) * cur.Bids), 0);
              })
              .indexOf(
                Math.max(
                  ...[...new Set(input2.map((el) => el.Range))].map((range) => {
                    return input2
                      .filter((el) => el.Range === range && el.Code === 1)
                      .reduce((acc, cur) => (acc += (cur.CPM.replace("$", "") / 1000) * cur.Bids), 0);
                  })
                )
              )
          ]
        }`,
    };
    const pieDatas = {
      pieData1: [logData.totalWin, logData.totalBid - logData.totalWin],
      pieData2: [
        input2.filter((el) => el.Range === info.Floor && el.Code === 1).length ? input2.filter((el) => el.Range === info.Floor && el.Code === 1)[0].Bids : 0,
        logData.bidAtPrice - (input2.filter((el) => el.Range === info.Floor && el.Code === 1).length ? input2.filter((el) => el.Range === info.Floor && el.Code === 1)[0].Bids : 0),
      ],
      pieData3: [
        input2.filter((el) => el.Code === 3).reduce((ac, cur) => (ac += cur.Bids), 0),
        logData.totalBid - input2.filter((el) => el.Code === 3).reduce((ac, cur) => (ac += cur.Bids), 0),
      ],
      pieData4: [
        input2.filter((el) => [7, 8, 5, 6].includes(el.Code)).reduce((ac, cur) => (ac += cur.Bids), 0),
        logData.totalBid - input2.filter((el) => [7, 8, 5, 6].includes(el.Code)).reduce((ac, cur) => (ac += cur.Bids), 0),
      ],
    };
    response = {
    "info": info,
    "data": input2,
    "logData": { ...logData, ...pieDatas },
    };
    };
    response.bidChartData = getBidChartData(response);
    response.cpmLineData = getCpmLineData(response);
    response.revLineData = getRevLineData(response);
    return response;
};