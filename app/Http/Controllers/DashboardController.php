<?php

namespace App\Http\Controllers;

use App\Models\langganan;
use App\Models\Program;
use App\Models\ProgramFitness;
use App\Models\transaksi;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index()
    {
        $countUser = User::count();
        $countProgram = Program::count();
        $countLanggananActive = langganan::where('tanggal_akhir', '>', now())->count();
        $transactionAmount = transaksi::sum('total_harga');
        $activeCustomersPerMonth = $this->getActiveCustomersPerMonth();

        // Ambil pendapatan bulanan
        $monthlyRevenue = transaksi::select(
            DB::raw('SUM(total_harga) as total_harga'),
            DB::raw('MONTH(tanggal_transaksi) as month')
        )
            ->where('status', 'Paid')
            ->groupBy(DB::raw('MONTH(tanggal_transaksi)'))
            ->get();

        // Format data agar sesuai dengan kebutuhan chart
        $formattedMonthlyRevenue = $monthlyRevenue->map(function ($item) {
            return [
                'name' => 'Bulan ' . $item->month,
                'total_harga' => $item->total_harga,
            ];
        });



        return Inertia::render('Dashboard/Index', [
            "userCount" => $countUser,
            "programCount" => $countProgram,
            "langgananCount" => $countLanggananActive,
            "transactionAmount" => $transactionAmount,
            "monthlyRevenue" => $formattedMonthlyRevenue,
            "activeCustomersPerMonth" => $activeCustomersPerMonth
        ]);
    }
    private function getActiveCustomersPerMonth()
    {
        $currentYear = Carbon::now()->year;
        $activeCustomers = langganan::selectRaw('YEAR(tanggal_mulai) as year, MONTH(tanggal_mulai) as month, COUNT(*) as count')
            ->whereYear('tanggal_mulai', $currentYear)
            ->groupBy('year', 'month')
            ->orderBy('year', 'asc')
            ->orderBy('month', 'asc')
            ->get();

        $data = [];

        foreach ($activeCustomers as $customer) {
            $data[] = [
                'year' => $customer->year,
                'month' => $customer->month,
                'count' => $customer->count,
            ];
        }

        return $data;
    }
}
