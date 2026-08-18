import React from 'react';

const pricingData = [
  {
    name: "Brokerage",
    delivery: "Zero Brokerage",
    intraday: (
      <>
        0.03% or Rs. 20/executed order
        <br />
        whichever is lower
      </>
    ),
    futures: (
      <>
        0.03% or Rs. 20/executed order
        <br />
        whichever is lower
      </>
    ),
    options: "Flat Rs. 20 per executed order",
  },
  {
    name: "Transaction charges",
    delivery: (
      <>
        NSE: 0.00307%
        <br />
        BSE: 0.00375%
      </>
    ),
    intraday: (
      <>
        NSE: 0.00307%
        <br />
        BSE: 0.00375%
      </>
    ),
    futures: (
      <>
        NSE: 0.00183%
        <br />
        BSE: 0
      </>
    ),
    options: (
      <>
        NSE: 0.03553% (on premium)
        <br />
        BSE: 0.0325% (on premium)
      </>
    ),
  },
  {
    name: "GST",
    delivery: "18% on (brokerage + SEBI charges + transaction charges)",
    intraday: "18% on (brokerage + SEBI charges + transaction charges)",
    futures: "18% on (brokerage + SEBI charges + transaction charges)",
    options: "18% on (brokerage + SEBI charges + transaction charges)",
  },
  {
    name: "SEBI charges",
    delivery: "₹10 / crore",
    intraday: "₹10 / crore",
    futures: "₹10 / crore",
    options: "₹10 / crore",
  },
  {
    name: "Stamp charges",
    delivery: "0.015% or ₹1500 / crore on buy side",
    intraday: "0.003% or ₹300 / crore on buy side",
    futures: "0.002% or ₹200 / crore on buy side",
    options: "0.003% or ₹300 / crore on buy side",
  },
];

function Brokerage() {
  return (
    <div className="container-fluid">

      {/* Tabs */}
      <div className="pricing-tabs">
        <div className="pricing-tab active">Equity</div>
        <div className="pricing-tab">Currency</div>
        <div className="pricing-tab">Commodity</div>
      </div>

      {/* Box */}
      <div className="pricing-box">

        <div className="table-responsive">
          <table className="table pricing-table mb-0">

            <thead>
              <tr>
                <th></th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&amp;O - Futures</th>
                <th>F&amp;O - Options</th>
              </tr>
            </thead>

            <tbody>
              {pricingData.map((row, index) => (
                <tr key={index}>
                  <td className="row-title">
                    {row.name}
                  </td>

                  <td>{row.delivery}</td>
                  <td>{row.intraday}</td>
                  <td>{row.futures}</td>
                  <td>{row.options}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

      {/* Bottom link */}
      <div className="text-center pricing-link">
        Calculate your costs upfront
      </div>

    </div>
  );
}




export default Brokerage;