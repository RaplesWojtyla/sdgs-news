<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $thumbnails = ['/thumbnail1.png', '/thumbnail2.png', '/thumbnail3.png', '/thumbnail4.png'];
        $images = ['/image1.png'];

        return [
            'thumbnail_url' => fake()->randomElement($thumbnails),
            'title' => fake()->sentence(6),
            'content' => fake()->paragraphs(4, true),
            'image_url' => fake()->randomElement($images),
            'category_id' => Category::inRandomOrder()->first()->id
        ];
    }
}
