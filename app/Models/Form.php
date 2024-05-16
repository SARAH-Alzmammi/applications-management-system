<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;
    protected $fillable=[ 'name',
        'date_of_birth',
        'gender',
        'nationality',
        'cv_attachment',
        'hr_manager_id',
        'hr_coordinator_id',
        'hr_manager_status',
        'hr_coordinator_status'];
}
