<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;


class UserController extends Controller
{
    public function index()
    {
        $user = User::paginate(10);
        $columns = '1fr 1.5fr 1fr 1fr 1fr 0.5fr';
        $basePath = 'users';
        $thead = ['Nama User', 'Email', 'Role', 'Phone Number', 'Address'];

        $tbody = $user->map(function ($item) {
            return [
                'id' => $item->id,
                'name' => $item->name,
                'email' => $item->email,
                'role' => $item->role,
                'phone_number' => $item->phone_number,
                'address' => $item->address,
            ];
        });

        return Inertia::render('Users/Index', [
            'columns' => $columns,
            'basePath' => $basePath,
            'thead' => $thead,
            'tbody' => $tbody,
            'pagination' => $user
        ]);
    }
    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'height' => 'required|numeric',
            'weight' => 'required|numeric',
            'gender' => 'required|string|in:L,P',
            'date_of_birth' => 'required|date',
            'foto' => 'nullable|image|max:2048',
            'role' => 'required|string|in:admin,user,member',
        ]);

        // Set default photo path
        $avatarPath = 'assets/profile_photo/default_photo_profile.jpg';

        // Check if avatar is uploaded
        if ($request->hasFile('avatar')) {
            // If uploaded, store the uploaded avatar
            $avatarPath = $request->file('avatar')->store('assets/profile_photo', 'public');
        }

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'phone_number' => $validated['phone_number'],
            'address' => $validated['address'],
            'height' => $validated['height'],
            'weight' => $validated['weight'],
            'gender' => $validated['gender'],
            'date_of_birth' => $validated['date_of_birth'],
            'foto' => $avatarPath,
            'role' => $validated['role'],
        ]);

        return redirect()->route('users')->with('success', 'User created successfully');
    }
    public function edit($id)
    {
        $user = User::findOrFail($id);

        return Inertia::render('Users/Edit', [
            'user' => $user
        ]);
    }

    // Method for updating user details
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:8|confirmed',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'height' => 'required|numeric',
            'weight' => 'required|numeric',
            'gender' => 'required|string|in:L,P',
            'date_of_birth' => 'required|date',
            'foto' => 'nullable|image|max:2048',
            'role' => 'required|string|in:admin,user,member',
        ]);

        if ($request->hasFile('foto')) {
            $avatarPath = $request->file('foto')->store('assets/profile_photo', 'public');
        } else {
            $avatarPath = $user->foto;
        }

        $user->update([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => $validated['password'] ? Hash::make($validated['password']) : $user->password,
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'phone_number' => $validated['phone_number'],
            'address' => $validated['address'],
            'height' => $validated['height'],
            'weight' => $validated['weight'],
            'gender' => $validated['gender'],
            'date_of_birth' => $validated['date_of_birth'],
            'foto' => $avatarPath,
            'role' => $validated['role'],
        ]);

        return redirect()->route('users')->with('success', 'User updated successfully');
    }
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        // Hapus file avatar jika ada
        if ($user->foto && \Storage::disk('public')->exists($user->foto)) {
            \Storage::disk('public')->delete($user->foto);
        }

        $user->delete();

        return redirect()->route('users')->with('success', 'User deleted successfully');
    }
}
