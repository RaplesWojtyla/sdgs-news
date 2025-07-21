<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['code' => 'TPB 1', 'name' => 'Tanpa Kemiskinan'],
            ['code' => 'TPB 2', 'name' => 'Tanpa Kelaparan'],
            ['code' => 'TPB 3', 'name' => 'Kehidupan Sehat dan Sejahtera'],
            ['code' => 'TPB 4', 'name' => 'Pendidikan Berkualitas'],
            ['code' => 'TPB 5', 'name' => 'Kesetaraan Gender'],
            ['code' => 'TPB 6', 'name' => 'Air Bersih dan Sanitasi Layak'],
            ['code' => 'TPB 7', 'name' => 'Energi Bersih dan Terjangkau'],
            ['code' => 'TPB 8', 'name' => 'Pekerjaan Layak dan Pertumbuhan Ekonomi'],
            ['code' => 'TPB 9', 'name' => 'Industri, Inovasi dan Infrastruktur'],
            ['code' => 'TPB 10', 'name' => 'Berkurangnya Kesenjangan'],
            ['code' => 'TPB 11', 'name' => 'Kota dan Permukiman Berkelanjutan'],
            ['code' => 'TPB 12', 'name' => 'Konsumsi dan Produksi yang Bertanggung Jawab'],
            ['code' => 'TPB 13', 'name' => 'Penanganan Perubahan Iklim'],
            ['code' => 'TPB 14', 'name' => 'Ekosistem Lautan'],
            ['code' => 'TPB 15', 'name' => 'Ekosistem Daratan'],
            ['code' => 'TPB 16', 'name' => 'Perdamaian, Keadilan dan Kelembagaan yang Tangguh'],
            ['code' => 'TPB 17', 'name' => 'Kemitraan untuk Mencapai Tujuan'],
        ];

        foreach($categories as $category) 
        {
            Category::updateOrCreate(
                ['code' => $category['code']],
                ['name' => $category['name']]
            );
        }
    }
}
