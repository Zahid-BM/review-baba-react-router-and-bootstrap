import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const Dashboard = () => {
    const [data, setData] = useChart();
    return (
        <div className='container'>
            <h1 className='mt-5 pb-3 fw-bolder display-5  text-info border-bottom border-5'>Financial statements of the last half year</h1>
            <div className="row mb-5">
                <div className="col-md-6 py-3">
                    <ResponsiveContainer width="100%" aspect={1.4}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="investment" stroke="#FFD36E" />
                            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-6 py-3">
                    <ResponsiveContainer width="100%" aspect={1.4}>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sell" fill="#8884d8" />
                            <Bar dataKey="investment" fill="#FFD36E" />
                            <Bar dataKey="revenue" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;