<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Jadwal Kelas</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>

<div class="container">
    <h1>Tambah Jadwal Kelas</h1>

    <!-- Formulir tambah jadwal kelas -->
    <form method="POST" action="{{ route('kelas.store') }}">
        @csrf
        <div class="form-group">
            <label for="hari">Hari:</label>
            <input type="text" name="hari" id="hari">
        </div>
        <div class="form-group">
            <label for="waktu">Waktu:</label>
            <input type="text" name="waktu" id="waktu">
        </div>
        <div class="form-group">
            <label for="nama_ruangan">Nama Ruangan:</label>
            <input type="text" name="nama_ruangan" id="nama_ruangan">
        </div>
        <button type="submit" class="btn btn-primary">Simpan</button>
    </form>
</div>

</body>
</html>
