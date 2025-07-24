<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::latest()->paginate(10);

        return view('admin.news.index', compact('news'));
    }

    public function create()
    {
        $categories = Category::all();

        return view('admin.news.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required:string',
            'author' => 'required|string|max:100',
            'thumbnail_url' => 'required|image|mimes:jpeg,png,jpg',
            'content' => 'required|string',
            'categories' => 'required|array',
            'categories.*' => 'exists:categories,id'
        ]);

        if ($request->hasFile('thumbnail_url')) {
            $path = $request->file('thumbnail_url')->store('public/thumbnails');
            $validated['thumbnail_url'] = $path;
        }

        $news = News::create($validated);

        if ($request->has('categories')) {
            $news->categories()->sync($request->categories);
        }

        return redirect()->route('admin.news.index')->with('success', 'Berita baru berhasil ditambahkan!');
    }

    public function edit(News $news)
    {
        $categories = Category::all();

        return view('admin.news.edit', compact('news', 'categories'));
    }

    public function update(Request $request, News $news)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'required:string',
            'author' => 'required|string|max:100',
            'thumbnail_url' => 'nullable|image|mimes:jpeg,png,jpg',
            'content' => 'required|string',
            'categories' => 'required|array',
            'categories.*' => 'exists:categories,id'
        ]);
        
        if ($request->hasFile('thumbnail_url'))
        {
            if ($news->thumbnail_url)
            {
                Storage::delete($news->thumbnail_url);
            }

            $path = $request->file('thumbnail_url')->store('public/thumbnails');
            $validated['thumbnail_url'] = $path;
        }

        $news->update($validated);
        
        $news->categories()->sync($request->categories);

        return redirect()->route('admin.news.index')->with('success', 'Berita berhasil diperbarui!');
    }

    public function destroy(News $news)
    {
        if ($news->thumbnail_url)
        {
            Storage::delete($news->thumbnail_url);
        }

        $news->delete();

        return redirect()->route('admin.news.index')->with('success', 'Berita berhasil dihapus!');
    }
}
