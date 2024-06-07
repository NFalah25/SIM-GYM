<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UpdateProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        $user = auth()->user();
        return Inertia::render('Profile/Edit', [
            'user' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $user = User::findOrFail($request->id); 

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'height' => 'required|numeric',
            'weight' => 'required|numeric',
            'gender' => 'required|string|in:L,P',
            'date_of_birth' => 'required|date',
            'foto' => 'nullable|image|max:2048',
        ]);


        // simpan avatar ke public storage dan simpan path-nya ke database
        $avatarPath = $user->foto;
        if ($request->hasFile('avatar')) {
            // Hapus file avatar lama jika ada
            if ($user->foto && Storage::disk('public')->exists($user->foto)) {
                Storage::disk('public')->delete($user->foto);
            }

            // Simpan file avatar baru
            $avatarPath = $request->file('avatar')->store('assets/profile_photo', 'public');
        }

        $user->update([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'phone_number' => $validated['phone_number'],
            'address' => $validated['address'],
            'height' => $validated['height'],
            'weight' => $validated['weight'],
            'gender' => $validated['gender'],
            'date_of_birth' => $validated['date_of_birth'],
            'foto' => $avatarPath,
        ]);

        return redirect()->route('profile.update')->with('success', 'User updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
