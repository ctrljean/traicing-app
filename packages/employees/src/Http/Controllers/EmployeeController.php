<?php

namespace Lifespikes\Employees\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Lifespikes\Employees\Models\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        return Employee::all();
    }

    /**
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {

    }

    public function show($id)
    {

    }

    /**
     * @param Request $request
     * @param $id
     * @return void
     */
    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {
        
    }
}
