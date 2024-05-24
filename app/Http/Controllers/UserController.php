<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $user = User::all();

        $thead = ['Nama User', 'Email', 'First Name', 'Phone Number', 'Address'];

        $tbody = $user->map(function($item){
            return [
                'name' => $item->name,
                'email' => $item->email,
                'first_name' => $item->first_name,
                'phone_number' => $item->phone_number,
                'address' => $item->address,
                ];
        });

        return Inertia::render('Users/Index',[
            'thead' => $thead,
            'tbody' => $tbody,
        ]);
    }
}
