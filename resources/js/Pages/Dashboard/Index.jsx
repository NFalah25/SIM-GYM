import Dashboard from "@/Pages/Dashboard";
import Row from "@/Components/Row";
import Card from "@/Components/Card";

function DashboardIndex ({user}) {
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
            <div className="text-white text-center py-6">
                <h1 className="text-4xl font-bold">Selamat Datang!</h1>
                <p className="text-lg">Berikut adalah ringkasan dashboard Anda</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card
                    title="User"
                    content={
                        <ul>
                            <li>Total Users: 1200</li>
                            <li>Active Users: 850</li>
                            <li>New Users this Month: 45</li>
                        </ul>
                    }
                />
                <Card
                    title="Transaksi"
                    content={
                        <ul>
                            <li>Total Transactions: 540</li>
                            <li>Pending Transactions: 15</li>
                            <li>Completed Transactions: 500</li>
                        </ul>
                    }
                />
                <Card
                    title="Program"
                    content={
                        <ul>
                            <li>Ongoing Programs: 5</li>
                            <li>Upcoming Programs: 3</li>
                            <li>Completed Programs: 12</li>
                        </ul>
                    }
                />
                <Card
                    title="Jadwal"
                    content={
                        <ul>
                            <li>Next Event: 2024-06-15</li>
                            <li>Events This Month: 2</li>
                            <li>Upcoming Events: 7</li>
                        </ul>
                    }
                />
            </div>
        </Dashboard>
    );
}

export default DashboardIndex;
