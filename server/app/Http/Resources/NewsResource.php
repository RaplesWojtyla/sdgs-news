<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class NewsResource extends JsonResource
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
            'thumbnail_url' => $this->thumbnail_url,
            'author' => $this->author,
            'title' => $this->title,
            'content' => $this->content,
            'short_description' => $this->short_description,
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
            'created_at' => $this->created_at,
        ];
    }
}
