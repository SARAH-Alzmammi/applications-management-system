<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFormRequest;
use App\Http\Requests\UpdateFormRequest;
use App\Http\Resources\FormResource;
use App\Models\Form;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class FormController extends Controller
{
    public function index()
    {
        $is_admin = Auth::user()->is_admin;

        $status_filter = $is_admin ? ['hr_coordinator_status' => 'accepted', 'hr_manager_status' => 'pending']
                                   : ['hr_coordinator_status' => 'pending'];

        $data = Form::where($status_filter)->get()->toArray();

        return Inertia::render('Dashboard',[
          'applications' => $data
        ]);
    }

    public function store(StoreFormRequest $request)
    {
        $form_applicant = new Form($request->validated());
        $form_applicant->save();
        if ($request->hasFile('cv_attachment')) {
        $file = $request->file('cv_attachment');
        $filePath = $file->store('cv_files', 'public');
        $form_applicant->cv_attachment = $filePath;
        $form_applicant->save();
    }

        return new FormResource($form_applicant);
    }

    public function update(UpdateFormRequest $request,  )
    {
        $user = Auth::user();
        $form=Form::query()->find( $request->form_id );
        $statusKey = $user->is_admin ? 'hr_manager_status' : 'hr_coordinator_status';
        $idKey = $user->is_admin ? 'hr_manager_id' : 'hr_coordinator_id';
        $form->{$statusKey} = $request->action === 'accept' ? 'accepted' : 'rejected';
        $form->{$idKey} = $user->id;
        $form->save();

        return redirect()->back()->with('message', 'Application status updated successfully.');
    }
}
