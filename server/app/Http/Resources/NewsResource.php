<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

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
            'image_url' => $this->image_url,
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
            'created_at' => $this->created_at,
        ];
    }
}
