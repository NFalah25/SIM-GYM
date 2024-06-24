<?php

namespace App\Http\Controllers;

use App\Models\jadwal;
use App\Models\langganan;
use App\Models\presensi;
use App\Models\transaksi;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PresensiController extends Controller
{
    public function index()
    {
        //        thead, tbody, basePath, columns, pagination
        if (Auth::user()->role === 'admin') {
            $presensis = presensi::with('jadwal.program', 'langganan.user', 'langganan.transaksi.detail_transaksi.program')
                ->paginate('10');
        } else if (Auth::user()->role === 'trainer') {
            // $presensis = presensi::with('jadwal', 'langganan.user', 'langganan.transaksi.detail_transaksi.program')
            //     ->whereHas('jadwal', function ($query) {
            //         $query->where('id_user', Auth::user()->id);
            //     })
            //     ->paginate('10');
            $presensis = jadwal::with('program')->where('id_user', Auth::user()->id)->paginate(10);
        } else {
            $presensis = presensi::with('jadwal', 'langganan.user', 'langganan.transaksi.detail_transaksi.program')
                ->whereHas('langganan', function ($query) {
                    $query->where('id_user', Auth::user()->id);
                })
                ->paginate('10');
        }

        // dd($presensis);

        $thead = ['Member Name', 'Trainer Name', 'Program Name', 'Date', 'Time'];

        $theadTrainer = ['Program Name', 'Date', 'Time', 'Action'];

        $basePath = 'presensi';
        $columns = '1fr 1fr 1.5fr 1fr 1fr';
        $tbody = [];
        $tbodyTrainer = [];

        if (Auth::user()->role === 'trainer') {
            $dateNow = Carbon::now()->format('l');

            // ambil nama hari
            foreach ($presensis as $item) {

                if ($item->hari === $dateNow) {

                    $tbodyTrainer[] = [
                        'id' => $item->program->id,
                        'program' => $item->program->nama_program,
                        'tanggal' => $item->hari,
                        'jam' => $item->waktu_mulai,
                    ];
                }
            }
            $columns = '1fr 1fr 1.5fr 1fr';
        }


        if (Auth::user()->role !== 'trainer') {
            foreach ($presensis as $item) {
                // // Initialize a variable to hold program names
                // $programNames = [];

                // // Iterate through each detail_transaksi to get the program names
                // foreach ($item->langganan->transaksi->detail_transaksi as $detail) {
                //     $programNames[] = $detail->program->nama_program;
                // }

                // Join the program names into a single string, separated by commas
                // $programNamesString = implode(', ', $programNames);

                // Add the formatted data to the tbody array
                $date_presens = Carbon::parse($item->waktu_presensi)->format('d-m-Y');
                $time_presens = Carbon::parse($item->waktu_presensi)->format('H:i');
                $tbody[] = [
                    'nama' => $item->langganan->user->name,
                    'trainer' => $item->jadwal->user->name,
                    'program' => $item->jadwal->program->nama_program,
                    'tanggal' => $date_presens,
                    'jam' => $time_presens,
                ];

                // $tbodyTrainer[] = [
                //     'program' => $programNamesString,
                //     'tanggal' => $item->created_at->format('d-m-Y'),
                //     'jam' => $item->created_at->format('H:i'),
                // ];
            }
        }
        return Inertia::render('Presensi/Index', [
            'theadTrainer' => $theadTrainer,
            'thead' => $thead,
            'tbodyTrainer' => $tbodyTrainer,
            'tbody' => $tbody,
            'basePath' => $basePath,
            'columns' => $columns,
            'pagination' => $presensis,
        ]);
    }

    public function showProfile($id)
    {
        $user = User::findOrFail($id);

        return Inertia::render('Presensi/ShowProfile', [
            'user' => $user
        ]);
    }


    public function create($id)
    {
        $presensi = langganan::with('transaksi.user', 'transaksi.program')
            ->where('tanggal_akhir', '>', now())
            ->whereHas('transaksi', function ($query) use ($id){
                $query->where('id_program', $id);
            })
            ->paginate(10);

        $jadwal = jadwal::where('id_user', Auth::user()->id)->where('hari', Carbon::now()->format('l'))->get();
        $id_jadwal = $jadwal[0]->id;
        // dd($id_jadwal);

        $thead = ['Member Name', 'Address', 'Height', 'Weight', 'Presence'];
        $basePath = 'presensi/create';
        $columns = '1fr 1fr 1fr 1fr 1.5fr';
        $tbody = [];
        foreach ($presensi as $item) {
            // cek apakah $item->id sudah ada di presensi::class
            // jika sudah ada maka tidak ditampilkan
            $data_presensi = presensi::where('id_langganan', $item->id)->where('id_jadwal', $id_jadwal)->get();
            // dd($data_presensi);
            // jika data_presensi tidak kosong maka return true
            if ($data_presensi->isNotEmpty()) {
                $presens = true;
            } else {
                $presens = false;
            }

            // dd($presens);

            $tbody[] = [
                'presens' => $presens,
                'id_jadwal' => $id_jadwal,
                'id_langganan' => $item->id,
                'id' => $item->transaksi->user->id,
                'nama' => $item->transaksi->user->first_name,
                'alamat' => $item->transaksi->user->address,
                'tinggi' => $item->transaksi->user->height,
                'berat' => $item->transaksi->user->weight,
            ];
        }

        // dd($tbody);



        return Inertia::render(
            'Presensi/Create',
            [
                'thead' => $thead,
                'tbody' => $tbody,
                'basePath' => $basePath,
                'columns' => $columns,
                'pagination' => $presensi,
            ]
        );
    }

    public function store($id, $id_jadwal, $id_langganan)
    {

        presensi::create([
            'id_langganan' => $id_langganan,
            'id_jadwal' => $id_jadwal,
            'waktu_presensi'=>now(),
        ]);

        return redirect()->route('presensi');
    }
}
