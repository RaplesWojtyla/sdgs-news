<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $query = News::query();

        $query->with('category');

        $query->when($request->category_id, function ($q, $categoryId) {
            return $q->where('category_id', $categoryId);
        });

        $query->when($request->search, function ($que, $searchTerm) {
            return $que->where(function ($q) use ($searchTerm) {
                $q->where('title', 'like', "%{$searchTerm}%")
                      ->orWhere('content', 'like', "%{$searchTerm}%");
            });
        });

        $news = $query->withQueryString()->paginate(10);

        return NewsResource::collection($news);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * @param  \App\Models\News  $news
     * @return \App\Http\Resources\NewsResource
     */
    public function show(News $news)
    {
        $news->load('category');

        return new NewsResource($news);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        //
    }
}
