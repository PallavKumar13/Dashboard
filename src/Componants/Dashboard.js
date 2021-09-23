import React from 'react'
import './dashboard.css';
import img from './man.png';
import { Doughnut, Line, Bar } from 'react-chartjs-2';


export default function Dashboard() {
    // Date
    const date = new Date().toDateString();

    // chart Total Application
    const adata = {
        datasets: [
            {
                data: [70, 30],
                backgroundColor: ['skyblue', 'gray'],
                cutout: 40,
                borderWidth: 0
            }
        ]
    }
    // chart shortlist Application
    const sdata = {
        datasets: [
            {
                data: [60, 40],
                backgroundColor: ['white', 'gray'],
                cutout: 40,
                borderWidth: 0
            }
        ]
    }
    // chart Total Application
    const tdata = {
        datasets: [
            {
                data: [40, 60],
                backgroundColor: ['red', 'gray'],
                cutout: 40,
                borderWidth: 0
            }
        ]
    }
    //Line chart application received
    const rdata = {
        labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: "",
                data: [30, 60, 40, 50, 80, 70, 60],
                tension: 0.3,
                borderColor: ["rgba(255,0,0,0.2)"],
                backgroundColor: ["rgba(255,0,0,0.2)"],
                fill: true
            },
            {
                label: " ",
                data: [50, 40, 60, 50, 70, 60, 40],
                tension: 0.3,
                borderColor: ["rgba(0,0,0,0.2)"]
            }
        ]
    }
    //total application bar charts
    const bdata = {
        labels: ["Application", "Shortlisted", "Rejected", "On hold", "Accepted"],
        datasets: [
            {
                label: "",
                data: [70, 35, 10, 5, 15],
                backgroundColor: ["skyblue", "blue", "red", "white", "green"]
            }
        ]
    }
    const options = {
        indexAxis: "y",
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false
                }
            },
            y: {
                stacked: true,
                grid: {
                    display: false
                }
            }
        }
    }
    //Positions by department chat
    const pdata = {
        datasets: [
            {
                data: [45, 30, 25],
                backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(40, 133, 170, 0.5)', 'rgba(138,43,226, 0.5)'],
                borderWidth: 0
            }
        ]
    }

    return (
        <>
            <div>
                <div className="dashboard-grid">
                    <div className="grid-item1">
                        <div className="profile">
                               <i class='bx bxs-bell' type="button"></i>
                                <div class="dropdown">
                                    <button class="dropbtn">
                                        <h1 className="profile-name">Pallaw Kumar</h1>
                                        <img className="profile-img" src={img} alt="" />
                                        <span><i class='bx bx-chevron-down'></i></span>
                                    </button>
                                    <button class="dropdown-content" type="submit">Logout</button>
                                </div>
                        </div>
                    </div>
                    <div className="grid-item2">
                        <div className="dashboard-head">
                            <h1 className="dashboard-title">Dashboard</h1>
                            <p className="date">{date}</p>
                            <button className="addbtn">Add +</button>
                            <div className="search-area"><i class='bx bx-search'></i>
                                <input className="search-bar" placeholder="Search for Application Here" />
                            </div>
                        </div>
                    </div>
                    <div className="grid-item3">
                        <div className="application-data">
                            <div className="application-title">Total Applications</div>
                            <div className="application-num">7956</div>
                            <div className="application-value"><i class='bx bx-right-top-arrow-circle'></i>+3.95%</div>
                        </div>
                        <button className="application-option"><i class='bx bx-dots-horizontal-rounded'></i></button>
                        <div className="chart">
                            <Doughnut data={adata} /><span className="chart-value">70%</span>
                        </div>
                    </div>
                    <div className="grid-item4">
                        <div className="shortlist-data">
                            <div className="shortlist-title">Shortlisted Candidates</div>
                            <div className="shortlist-num">4658</div>
                            <div className="shortlist-value"><i class='bx bx-right-top-arrow-circle'></i>+0.6%</div>
                        </div>
                        <button className="shortlist-option"><i class='bx bx-dots-horizontal-rounded'></i></button>
                        <div className="schart">
                            <Doughnut data={sdata} /><span className="schart-value">60%</span>
                        </div>
                    </div>
                    <div className="grid-item5">
                        <div className="total-application-data">
                            <div className="total-application-title">Total Applications</div>
                            <div className="total-application-num">1501</div>
                            <div className="total-application-value"><i class='bx bx-right-down-arrow-circle'></i>-0.4%</div>
                        </div>
                        <button className="total-application-option"><i class='bx bx-dots-horizontal-rounded'></i></button>
                        <div className="tchart">
                            <Doughnut data={tdata} /><span className="tchart-value">40%</span>
                        </div>
                    </div>
                    <div className="grid-item6">
                        <div className="notification">
                            <div className="notification-head">
                                Hello, Pallaw Kumar<br />
                                You have 8 New Applications Today !
                            </div>
                            <div className="applicants-list">
                                <div className="applicants-head">New Applicants<i class='bx bx-right-arrow-alt' type="button"></i></div>
                                <div className="user" type="buttom">
                                    <div className="userimg"><i class='bx bx-user-circle'></i></div>
                                    <div className="username">Shruti Singh</div>
                                    <div className="user-contacts" type="button"><i class='bx bxs-message-detail'></i><i class='bx bxs-phone-call' ></i></div>
                                </div>
                                <div className="user" type="buttom">
                                    <div className="userimg"><i class='bx bx-user-circle'></i></div>
                                    <div className="username">Sweety Kumari</div>
                                    <div className="user-contacts" type="button"><i class='bx bxs-message-detail'></i><i class='bx bxs-phone-call' ></i></div>
                                </div>
                                <div className="user" type="buttom">
                                    <div className="userimg"><i class='bx bx-user-circle'></i></div>
                                    <div className="username">Shiti Pragyan</div>
                                    <div className="user-contacts" type="button"><i class='bx bxs-message-detail'></i><i class='bx bxs-phone-call' ></i></div>
                                </div>
                                <div className="user" type="buttom">
                                    <div className="userimg"><i class='bx bx-user-circle'></i></div>
                                    <div className="username">Shiwang</div>
                                    <div className="user-contacts" type="button"><i class='bx bxs-message-detail'></i><i class='bx bxs-phone-call' ></i></div>
                                </div>
                                <div className="user" type="buttom">
                                    <div className="userimg"><i class='bx bx-user-circle'></i></div>
                                    <div className="username">Saurav Kumar</div>
                                    <div className="user-contacts" type="button"><i class='bx bxs-message-detail'></i><i class='bx bxs-phone-call' ></i></div>
                                </div>
                                <div className="user" type="buttom">
                                    <div className="userimg"><i class='bx bx-user-circle'></i></div>
                                    <div className="username">Anushka</div>
                                    <div className="user-contacts" type="button"><i class='bx bxs-message-detail'></i><i class='bx bxs-phone-call' ></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item7">
                        <div className="received-application">
                            <p className="received-title">Applications Recevied</p>
                            <div className="received-btn">
                                <button className="r-year">This Year</button>
                                <button className="r-week">This Week</button>
                                <button className="r-year">Today</button>
                                <button className="r-download"><i class='bx bxs-cloud-download'></i>Download Report</button>
                                <button className="r-menu"><i class='bx bx-dots-vertical-rounded' ></i></button>
                            </div>
                        </div>
                        <div className="r-line-chart">
                            <Line data={rdata} options={{
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes: {
                                        min: 0, max: 100, stepSize: 10
                                    },
                                    x: {
                                        grid: {
                                            display: false
                                        }
                                    }
                                },
                            }} />
                        </div>
                    </div>
                    <div className="grid-item8">
                        <div className="total-application-bar">
                            <p className="total-application-bar-title">Total Applications</p>
                            <div className="application-bar">
                                <Bar data={bdata} options={options} />
                            </div>
                        </div>
                    </div>
                    <div className="grid-item9">
                        <div className="campaign-stats">
                            <div className="campaign-stats-title">Referals and Campaign Stats</div>
                            <i class='bx bx-send'></i>
                            <div className="campaign-stats-sum">
                                <span className="campaign-stats-sum1">40 Campaigns sent in total</span>
                                <span className="campaign-stats-sum2">4 Campaigns sent in last month</span>
                            </div>
                            <div className="campaign-stats-data">
                                <div className="campaign-stats-data1">
                                    <div className="campaign-stats-data1-title">User Reached</div>
                                    <div className="campaign-stats-data1-num">7956</div>
                                    <div className="campaign-stats-data1-value"><i class='bx bx-right-top-arrow-circle'></i>+16%</div>
                                </div>
                                <div className="campaign-stats-data1">
                                    <div className="campaign-stats-data1-title">Referals</div>
                                    <div className="campaign-stats-data1-num">0661</div>
                                    <div className="campaign-stats-data1-value"><i class='bx bx-right-top-arrow-circle'></i>+13.55%</div>
                                </div>
                                <div className="campaign-stats-data1">
                                    <div className="campaign-stats-data1-title">Shares</div>
                                    <div className="campaign-stats-data1-num">1432</div>
                                    <div className="campaign-stats-data1-value"><i class='bx bx-right-top-arrow-circle'></i>+21.05%</div>
                                </div>
                                <div className="campaign-stats-data1">
                                    <div className="campaign-stats-data1-title">Applications</div>
                                    <div className="campaign-stats-data1-num">1022</div>
                                    <div className="campaign-stats-data1-value"><i class='bx bx-right-top-arrow-circle'></i>+11.12%</div>
                                </div>
                            </div>
                            <div className="campaign-stats-btn">
                                <button className="campaign-stats-btn1 start">Start a New Campaigns</button>
                                <button className="campaign-stats-btn1 pause">Pause All Running Campaigns</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item10">
                        <div className="positions">
                            <div className="position-title">Open Positions by Department</div>
                            <button className="position-menu"><i class='bx bx-dots-horizontal-rounded'></i></button>
                            <div className="pchart">
                                <Doughnut data={pdata} />
                                <span className="ptitle">Open positions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
