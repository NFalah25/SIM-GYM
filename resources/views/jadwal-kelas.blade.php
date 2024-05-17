<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jadwal Kelas</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>

<div class="container">
    <h1>Jadwal Kelas</h1>

    <button onclick="window.location.href='{{ route('kelas.create') }}'" class="btn btn-primary">Tambah Jadwal Kelas</button>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Hari</th>
                <th>Waktu</th>
                <th>Nama Ruangan</th>
            </tr>
        </thead>
        <tbody>
            <!-- Isi tabel disini -->
            @foreach($jadwal_kelas as $kelas)
                <tr>
                    <td>{{ $kelas->id }}</td>
                    <td>{{ $kelas->hari }}</td>
                    <td>{{ $kelas->waktu }}</td>
                    <td>{{ $kelas->nama_ruangan }}</td>
                    <td>
                        <a href="{{ route('kelas.show', $kelas->id) }}" class="btn btn-info">Detail</a>
                        <a href="{{ route('kelas.edit', $kelas->id) }}" class="btn btn-warning">Edit</a>
                        <form action="{{ route('kelas.destroy', $kelas->id) }}" method="POST" style="display: inline-block;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">Hapus</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

</div>

</body>
</html>
