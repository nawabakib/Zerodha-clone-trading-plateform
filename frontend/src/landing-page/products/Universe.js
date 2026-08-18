import React from 'react';
function Universe() {
    return (<div className="container mt-5">
        <div className="row text-center">
            <h1>The Zerodha Universe</h1>
            <p>
                Extend your trading and investment experience even further with our
                partner platforms
            </p>

           <div className="col-4 logo-box">

    <img
        src="media/images/zerodhaFundhouse.png"
        className="logo-img"
        alt="Zerodha Fund House"
    />

    <p className="logo-text">
        Our asset management venture that is creating simple and transparent
        index funds to help you save for your goals.
    </p>

</div>


<div className="col-4 logo-box">

    <img
        src="media/images/sensibullLogo.svg"
        className="logo-img"
        alt="Sensibull"
    />

    <p className="logo-text">
        Options trading platform that lets you create strategies, analyze
        positions, and examine data points like open interest, FII/DII, and more.
    </p>

</div>


<div className="col-4 logo-box">

    <img
        src="media/images/tijori.svg"
        className="logo-img"
        alt="Tijori"
    />

    <p className="logo-text">
        Investment research platform that offers detailed insights on stocks,
        sectors, supply chains, and more.
    </p>

</div>


<div className="col-4 logo-box">

    <img
        src="media/images/streak-logo.png"
        className="logo-img"
        alt="Streak"
    />

    <p className="logo-text">
        Systematic trading platform that allows you to create and backtest
        strategies without coding.
    </p>

</div>


<div className="col-4 logo-box">

    <img
        src="media/images/smallcaseLogo.png"
        className="logo-img"
        alt="Smallcase"
    />

    <p className="logo-text">
        Thematic investing platform that helps you invest in diversified
        baskets of stocks on ETFs.
    </p>

</div>


<div className="col-4 logo-box">

    <img
        src="media/images/dittoLogo.png"
        className="logo-img"
        alt="Ditto"
    />

    <p className="logo-text">
        Personalized advice on life and health insurance. No spam
        and no mis-selling.
    </p>

</div>
           <button className="signup-btn">
    Signup Now
</button>
        </div>
    </div>
    );
}

export default Universe;