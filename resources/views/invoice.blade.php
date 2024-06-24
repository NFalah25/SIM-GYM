<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Invoice Payment</title>
</head>
<style>
    .container {
        width: 100%;
        margin: 0 0;
        /* padding: 0 20px; */
    }

    p {
        font-size: 0.8em;
    }

    .text-lg {
        font-size: 1.125em;
        text-align: center;
    }

    .rincian {
        width: 100%;
        border-radius: 1%;
        border: 1px solid rgb(233, 242, 235);
        padding: 0.5rem;
        font-size: 0.8em;
        font-weight: bold;
        background: rgb(233, 242, 235);
    }

    .rincian td {
        padding: 0.5rem;
    }

    .masa_berlaku {
        width: 100%;
        border-radius: 1%;
        border: 1px solid rgb(239, 232, 233);
        padding: 0.5rem;
        font-size: 0.8em;
        font-weight: bold;
        background: rgb(239, 232, 233);
    }

    .masa_berlaku td {
        padding: 0.5rem;
    }
</style>

<body>

    <div class="container">
        <h1 class="text-lg">Invoice Payment</h1>
    </div>
    <div class="salam">
        <p>Yth. Bapak/Ibu {{ $detail_pembayaran[0]['nama_user'] }}</p>
        <p>Terima kasih anda telah melakukan pendaftaran program {{ $detail_pembelian[0]['nama_program'] }} pada tanggal
            {{ $detail_pembelian[0]['tanggal_mulai'] }}</p>
        <p>Pembayaran Anda telah berhasil kami terima dengan rincian sebagai berikut:</p>
    </div>

    <div class="detail">
        <table class="rincian">
            <tr>
                <td>Nama Program</td>
                <td>:</td>
                <td>{{ $detail_pembelian[0]['nama_program'] }}</td>
            </tr>
            <tr>
                <td>Tanggal Bayar</td>
                <td>:</td>
                <td>{{ $detail_pembelian[0]['tanggal_mulai'] }}</td>
            </tr>
            <tr>
                <td>Harga</td>
                <td>:</td>
                <td>{{ $detail_pembelian[0]['harga'] }}</td>
            </tr>
            <tr>
                <td>Metode Pembayaran</td>
                <td>:</td>
                <td style="text-transform: capitalize">{{ $detail_pembelian[0]['payment_type'] }}</td>
            </tr>
            <tr>
                <td>Status Pembayaran</td>
                <td>:</td>
                <td>{{ $detail_pembelian[0]['status'] }}</td>
            </tr>
        </table>
    </div>

    <div class="durasi">
        <p>Berikut masa berlaku langganan GYM {{ $detail_pembelian[0]['nama_program'] }} </p>
        <table class="masa_berlaku">
            <tr>
                <td>Mulai berlaku</td>
                <td>:</td>
                <td style="color: green">{{ $detail_pembelian[0]['tanggal_mulai'] }}</td>
            </tr>
            <tr>
                <td>Selesai berlaku</td>
                <td>:</td>
                <td style="color:red">{{ $detail_pembelian[0]['tanggal_akhir'] }}</td>
            </tr>
    </div>

    <div class="footer">
        <p>Terima kasih telah melakukan pembayaran, semoga program yang anda ikuti dapat memberikan manfaat yang besar
            bagi anda.</p>
            
    </div>

</body>

</html>
