<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\News;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories_ids = Category::pluck('id');

        if ($categories_ids->isEmpty()) {
            $this->command->info("Tidak ada kategori. Seeder dibatalkan.");
            return;
        }

        News::factory()
            ->count(50)
            ->afterCreating(function(News $news) use ($categories_ids) {
                $categories_to_attach = $categories_ids->random(rand(1, 3));

                $news->categories()->attach($categories_to_attach);
            })
            ->create();
    }
}
