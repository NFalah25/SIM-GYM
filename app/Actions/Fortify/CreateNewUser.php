<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255', Rule::unique(User::class)],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
            'password_confirmation'=> ['required', 'same:password'],
            'first_name'=> ['required','string', 'max:255'],
            'last_name'=> ['required','string', 'max:255'],
            'phone_number'=> ['required','string', 'max:255'],
            'address'=> ['required','string', 'max:255'],
            'date'=> ['required','date'],
            'height'=> ['required','numeric'],
            'weight'=> ['required','numeric'],
            'gender'=> ['required'],
        ])->validate();

        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        $user->member()->create([
            'first_name'=> $input['first_name'],
            'last_name'=> $input['last_name'],
            'no_hp'=> $input['phone_number'],
            'alamat'=> $input['address'],
            'birth_date'=> $input['date'],
            'tinggi_badan'=> $input['height'],
            'berat_badan'=> $input['weight'],
            'jenis_kelamin'=> $input['gender'],
        ]);

        return $user;
    }
}
