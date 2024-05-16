<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FormResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'DOB' => $this->date_of_birth,
            'gender' => $this->gender,
            'nationality' => $this->nationality,
            'cv_attachment' => url('storage/' . $this->cv_attachment),
        ];
    }
}
