import Dashboard from "@/Pages/Dashboard";
import Row from "@/Components/Row";
import Card from "@/Components/Card";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Bar,
    BarChart,
} from "recharts";

function DashboardIndex({
    userCount,
    programCount,
    langgananCount,
    transactionAmount,
    monthlyRevenue,
    activeCustomersPerMonth,
}) {
    const data = monthlyRevenue.map((item) => ({
        name: item.name,
        total_harga: item.total_harga,
    }));
    return (
        <Dashboard>
            <Row
                orientation="horizontal"
                className="flex-col gap-4 md:flex-row lg:flex-row"
            >
                <h2 className="font-poppins text-2xl font-bold text-slate-100">
                    Dashboard
                </h2>
            </Row>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card title="User Count" content={userCount} />
                <Card title="Program Count" content={programCount} />
                <Card title="Active Subscription" content={langgananCount} />
                <Card title="Transaction Amount" content={transactionAmount} />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
                <div className="h-[400px] w-full rounded-lg border border-slate-600 bg-slate-500 bg-opacity-10 p-8 lg:h-[550px]">
                    <p className="pb-2">Transaction per Month</p>
                    <ResponsiveContainer width="100%" height="100%">
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
                            <XAxis dataKey="name" />
                            <YAxis
                                domain={["auto", "auto"]}
                                ticks={[50000, 75000, 100000, 125000, 150000]}
                            />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="total_harga"
                                stroke="#84CC16"
                                activeDot={{ r: 5 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-[400px] w-full rounded-lg border border-slate-600 bg-slate-500 bg-opacity-10 p-8 lg:h-[550px]">
                    <p className="pb-2">Member per Month</p>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={150}
                            height={40}
                            data={activeCustomersPerMonth}
                        >
                            <Bar dataKey="count" fill="#8b5cf6" />
                            <XAxis dataKey="month" />
                            <Tooltip />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Dashboard>
    );
}

export default DashboardIndex;
