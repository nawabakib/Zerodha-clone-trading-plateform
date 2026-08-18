import React, { useState } from "react";
function CreateTicket() {

    const [openIndex, setOpenIndex] = useState(null);

    const categories = [
        {
            title: "Account Opening",
            icon: <i class="fa fa-plus-circle" aria-hidden="true"></i>,
            content: "Learn how to open your Zerodha account, complete KYC, and start investing."
        },
        {
            title: "Your Zerodha Account",
            icon: <i class="fa fa-user-circle-o" aria-hidden="true"></i>,
            content: "Manage your profile, account settings, password, and other account-related information."
        },
        {
            title: "Kite",
            icon: "◉",
            content: "Learn about Kite trading platform, orders, charts, positions, and portfolio."
        },
        {
            title: "Funds",
            icon: <i class="fa fa-inr" aria-hidden="true"></i>,
            content: "Learn how to add funds, withdraw funds, and manage your trading balance."
        },
        {
            title: "Console",
            icon: "◎",
            content: "View reports, statements, holdings, P&L and other information in Console."
        },
        {
            title: "Coin",
            icon: "◷",
            content: "Learn how to invest in mutual funds using the Coin platform."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="support-page">

            <div className="container">

                <div className="row">

                    {/* LEFT SIDE */}
                    <div className="col-lg-8">

                        {categories.map((item, index) => (

                            <div className="support-item" key={index}>

                                <div
                                    className="support-header"
                                    onClick={() => toggleAccordion(index)}
                                >

                                    {/* Icon */}
                                    <div className="support-icon">
                                        {item.icon}
                                    </div>

                                    {/* Title */}
                                    <div className="support-title">
                                        {item.title}
                                    </div>

                                    {/* Arrow */}
                                    <div className="support-arrow">
                                        {openIndex === index ? "⌃" : "⌄"}
                                    </div>

                                </div>

                                {/* Content */}
                                {openIndex === index && (
                                    <div className="support-content">
                                        {item.content}
                                    </div>
                                )}

                            </div>

                        ))}

                    </div>


                    {/* RIGHT SIDE */}
                    <div className="col-lg-4">

                        {/* Announcements */}
                        <div className="announcement-box">

                            <ul>
                                <li>
                                    <a href="#">
                                        Surveillance measure on scrips -
                                        August 2026
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        Latest Intraday leverages and
                                        Square-off timings
                                    </a>
                                </li>
                            </ul>

                        </div>


                        {/* Quick Links */}
                        <div className="quick-links">

                            <div className="quick-title">
                                Quick links
                            </div>

                            <a href="#">1. Track account opening</a>

                            <a href="#">2. Track segment activation</a>

                            <a href="#">3. Intraday margins</a>

                            <a href="#">4. Kite user manual</a>

                            <a href="#">5. Learn how to create a ticket</a>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default CreateTicket;