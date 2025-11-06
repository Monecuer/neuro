<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Store;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Create a default store
        Store::firstOrCreate([
            'id' => 1,
        ], [
            'name' => 'NeuraPOS HQ',
            'address' => 'Harare, Zimbabwe',
            'contact_number' => '0770000000',
            'sale_prefix' => 'NP',
            'current_sale_number' => 0,
        ]);

        // Roles
        $superAdminRole = Role::firstOrCreate(['name' => 'super-admin']);
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $userRole = Role::firstOrCreate(['name' => 'user']);

        // Permissions
        $permissions = [
            'pos', 'products', 'inventory', 'sales', 'customers', 'vendors', 'charges',
            'collections', 'expenses', 'quotations', 'reloads', 'cheques', 'sold-items',
            'purchases', 'payments', 'stores', 'employees', 'payroll', 'media', 'settings'
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Assign permissions
        $superAdminRole->givePermissionTo(Permission::all());
        $adminRole->givePermissionTo($permissions);
        $userRole->givePermissionTo(['pos', 'products']);

        // Super Admin account
        $superAdmin = User::updateOrCreate(
            ['email' => 'master@neurapos.com'],
            [
                'name' => 'Super Admin',
                'user_name' => 'master',
                'user_role' => 'super-admin',
                'store_id' => 1,
                'password' => Hash::make('Monecuer123!'),
            ]
        );

        $superAdmin->assignRole($superAdminRole);
    }
}
