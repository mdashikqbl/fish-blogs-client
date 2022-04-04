import React from 'react';
import './Dashboard.css'
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "id": 1,
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "id": 2,
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "id": 3,
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "id": 4,
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "id": 5,
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "id": 6,
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='dashboard'>
            <div className='month-sell'>
                <h2>MONTH WISE SELL</h2>
                <LineChart width={500} height={300} data={data}>
                    <Line dataKey={'sell'}></Line>
                    <YAxis></YAxis>
                    <XAxis dataKey="month" />
                    <Tooltip />
                </LineChart>
            </div>
            <div className='revenue'>
                <h2>INVESTMENT VS REVENUE</h2>
                <PieChart width={830} height={350} data={data}>
                    <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;