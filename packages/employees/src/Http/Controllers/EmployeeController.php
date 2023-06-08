<?php

namespace Lifespikes\Employees\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Lifespikes\Employees\Models\Employee;
use Lifespikes\Employees\Traits\HasToastResponses;
use Lifespikes\Reviews\Models\Reviews;

class EmployeeController extends Controller
{
    use HasToastResponses;

    public function index()
    {
        return Inertia::render('Home/Index', [
            'employees' => Employee::all()
        ]);
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {

        $result = Employee::create($request->all());
        dd($result);
    }

    public function showReviews($id)
    {
        $result = Reviews::where('employees_id', $id)->get()->toArray();
        Inertia::render('', [

        ]);
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
