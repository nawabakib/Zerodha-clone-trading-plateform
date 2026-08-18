import React from 'react';

const accountCharges = [
  {
    account: "Individual account",
    charge: "FREE",
  },
  {
    account: "Minor account",
    charge: "FREE",
  },
  {
    account: "NRI account",
    charge: "₹ 500",
  },
  {
    account: "HUF account",
    charge: (
      <>
        <span className="free-badge">FREE</span>
        <span className="charge-text">
          (online) / ₹ 500 (offline)
        </span>
      </>
    ),
  },
  {
    account: "Partnership, LLP, and Corporate accounts (offline only)",
    charge: "₹ 500",
  },
];

function AccountOpeningCharges() {
  return (
    <section className="account-charges">

      <h2>Charges for account opening</h2>

      <div className="account-table-wrapper">

        <table className="account-table">

          <thead>
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>

          <tbody>
            {accountCharges.map((item, index) => (
              <tr key={index}>

                <td>
                  {item.account}
                </td>

                <td>
                  {item.charge === "FREE" ? (
                    <span className="free-badge">
                      FREE
                    </span>
                  ) : (
                    item.charge
                  )}
                </td>

              </tr>
            ))}
          </tbody>

        </table>


      </div>
      <div className='row mt-5' >
        <div className='col-6 text-muted mt-5' style={{ fontSize: "13px" }}>
          <h2 className='text-muted'>Charges Explained</h2>
          <p>Securities/Commodities transaction tax</p>
          <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.

          </p>
          <p>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
          <p>Transaction/Turnover Charges</p>
          <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
          <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
          <p>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
          <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
          <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
          <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
          <p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>

        </div>
        <div className='col-6 text-muted mt-5' style={{ fontSize: "13px" }}>
          <p>GST</p>
          <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
          <p>SEBI Charges</p>
          <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
          <p>DP (Depository participant) charges</p>
          <p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
          <p>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
          <p>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
          <p>Pledging charges</p>
          <p>₹30 + GST per pledge request per ISIN.</p>
          <p>AMC (Account maintenance charges)</p>
          <p>Free for the first year on all new resident individual accounts.</p>
          <p>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here

          </p>
          <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

        </div>
        <div className='container mt-5 text-muted'style={{ fontSize: "13px" }} >
          <h2 className='text-muted'>Disclaimer</h2>
          <p>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
      </div>
    </section>

  );
}

export default AccountOpeningCharges;