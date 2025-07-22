<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    private const DEFAULT_PER_PAGE = 5;
    /**
     * Get a paginated list of news items.
     *
     * Query Parameters:
     * - categories: array, filter news by category IDs.
     * - search: string, filter news by title.
     * - per_page: int, number of items per page (default: 5).
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $query = News::query();

        $query->with('categories');

        $query->when($request->categories, function ($q, $category_ids) {
            $category_ids = is_array($category_ids) ? $category_ids : [$category_ids];

            return $q->whereHas('categories', function ($category_query) use ($category_ids) {
                $category_query->whereIn('id', $category_ids);
            }, '=', count($category_ids));
        });

        $query->when($request->search, function ($q, $searchTerm) {
            return $q->where('title', 'like', "%{$searchTerm}%");
        });

        $perPage = $request->input('per_page', self::DEFAULT_PER_PAGE);
        $news = $query->paginate($perPage);

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
     * Display the specified resource.
     *
     * @param  string  $id
     * @return \App\Http\Resources\NewsResource
     */
    public function show(string $id)
    {
        $news = News::with('categories')->findOrFail($id);

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
