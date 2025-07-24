<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class News extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'author',
        'thumbnail_url',
        'title',
        'short_description',
        'content',
    ];

    public function categories(): BelongsToMany 
    {
        return $this->belongsToMany(Category::class, 'category_news');
    }

    public function getThumbnailUrlAttribute($value)
    {
        if (Str::startsWith($value, 'public/'))
        {
            return asset(Storage::url($value));
        }

        return asset($value);
    }
}
