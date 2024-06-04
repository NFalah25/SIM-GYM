<?php

namespace App\Http\Controllers;

use App\Models\langganan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LanggananController extends Controller
{
    public function index(Request $request)
    {
//        $langganan = langganan::with('user', 'transaksi.detail_transaksi.program')->paginate(10);
//
//
//        $tbody = [];
//
//        foreach ($langganan as $key => $value) {
//            if($value->tanggal_selesai < now()){
//                $value->status = 'Active';
//            }else{
//                $value->status = 'Expired';
//            }
//
//            $programNames = [];
//            foreach ($value->transaksi->detail_transaksi as $detail) {
//                $programNames[] = $detail->program->nama_program;
//            }
//
//            // Join the program names with a comma
//            $programNamesString = implode(', ', $programNames);
//
//            $tbody[] = [
//                'user' => $value->user->name,
//                'program' => $programNamesString,
//                'tanggal_mulai'=> Carbon::parse($value->tanggal_mulai)->format('d-m-Y'),
//                'tanggal_selesai'=> Carbon::parse($value->tanggal_selesai)->format('d-m-Y'),
//                'status' => $value->status,
//                'created_at' => $value->created_at->format('d-m-Y'),
//            ];
//        }
        $filter = $request->input('filter');
        $sort = $request->input('sort');

        $langgananQuery = langganan::with('user', 'transaksi.detail_transaksi.program');

// Apply filter if it exists
        if ($filter === 'active') {
            $langgananQuery->where('tanggal_akhir', '>=', now());
        } elseif ($filter === 'expired') {
            $langgananQuery->where('tanggal_akhir', '<', now());
        }

        // Apply sorting if it exists
        if ($sort === 'asc' || $sort === 'desc') {
//            $langgananQuery->join('users', 'langganan.id_user', '=', 'users.id')
//                ->orderBy('users.name', $sort)
//                ->select('langganan.*'); // Ensure only langganan columns are selected
            $langgananQuery->join('users', 'langganans.id_user', '=', 'users.id')
                ->orderBy('users.name', $sort)
                ->select('langganans.*');
        }

        $langganan = $langgananQuery->paginate(10);
        $tbody = [];

        foreach ($langganan as $key => $value) {
            if (Carbon::parse($value->tanggal_akhir) > now()) {
                $value->status = 'Active';
            } else {
                $value->status = 'Expired';
            }

            $programNames = [];
            foreach ($value->transaksi->detail_transaksi as $detail) {
                $programNames[] = $detail->program->nama_program;
            }

            $programNamesString = implode(', ', $programNames);

            $tbody[] = [
                'user' => $value->user->name,
                'program' => $programNamesString,
                'tanggal_mulai' => Carbon::parse($value->tanggal_mulai)->format('d-m-Y'),
                'tanggal_selesai' => Carbon::parse($value->tanggal_akhir)->format('d-m-Y'),
                'status' => $value->status,
            ];
        }
        $thead = ['Nama User', 'Program', 'Tanggal Mulai', 'Tanggal Selesai', 'Status'];
        $basePath = 'langganan';
        $columns = '1fr 1fr 1fr 1fr 1fr';



        return Inertia::render('Langganan/Index',[
            'filter' => $request->filter ?? 'all',
            'sort' => $request->sort ?? 'name-asc',
            'thead' => $thead,
            'tbody' => $tbody,
            'columns' => $columns,
            'basePath' => $basePath,
            'pagination' => $langganan,

        ]);
    }
}
