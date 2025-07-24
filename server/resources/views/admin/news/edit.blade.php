@extends('layouts.admin')

@section('title', 'Edit Berita')

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Form Edit Berita</h3>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.news.update', $news->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="mb-3">
                    <label for="title" class="form-label">Judul Berita</label>
                    <input type="text" name="title" id="title" class="form-control" value="{{ $news->title }}"
                        required>
                </div>

                <div class="mb-3">
                    <label for="short_description" class="form-label">Deskripsi Singkat</label>

                    <textarea name="short_description" id="short_description" class="form-control" rows="5">{{ $news->short_description }}</textarea>
                </div>

                <div class="mb-3">
                    <label for="author" class="form-label">Nama Penulis</label>
                    <input type="text" name="author" id="author" class="form-control" value="{{ $news->author }}"
                        required>
                </div>

                <div class="mb-3">
                    <label for="categories" class="form-label">Kategori Berita</label>
                    <select name="categories[]" id="categories" class="form-control" multiple required>
                        @foreach ($categories as $category)
                            <option value="{{ $category->id }}" @if ($news->categories->contains($category->id)) selected @endif>
                                {{ $category->code . ' ' . $category->name }}
                            </option>
                        @endforeach
                    </select>
                </div>

                <div class="mb-3">
                    <label for="thumbnail_url" class="form-label">Gambar Thumbnail</label>
                    <input type="file" name="thumbnail_url" id="thumbnail_url" class="form-control">
                    <small class="form-text text-muted">Kosongkan jika tidak ingin mengubah gambar.</small>
                    @if ($news->thumbnail_url)
                        <div class="mt-2">
                            <img src="{{ $news->thumbnail_url }}" alt="Thumbnail" style="max-width: 200px;">
                        </div>
                    @endif
                </div>

                <div class="mb-3">
                    <label for="content" class="form-label">Isi Konten</label>
                    <textarea name="content" id="content" class="form-control" rows="10">{{ $news->content }}</textarea>
                </div>

                <div class="d-flex justify-content-end">
                    <a href="{{ route('admin.news.index') }}" class="btn btn-secondary me-2">Batal</a>
                    <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
                </div>
            </form>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="https://cdn.tiny.cloud/1/8y40ube1zyahyjysrhhnknb8dplt6pcvcu81sc08h6fhhy7g/tinymce/8/tinymce.min.js"
        referrerpolicy="origin" crossorigin="anonymous"></script>
    <script>
        tinymce.init({
            selector: 'textarea#content',
            plugins: [
                // Core editing features
                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media',
                'searchreplace', 'table', 'visualblocks', 'wordcount',
                // Your account includes a free trial of TinyMCE premium features
                // Try the most popular premium features until Aug 7, 2025:
                'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker',
                'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage',
                'advtemplate', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags',
                'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
            ],
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [{
                    value: 'First.Name',
                    title: 'First Name'
                },
                {
                    value: 'Email',
                    title: 'Email'
                },
            ],
        });

        $(document).ready(function() {
            $('#categories').select2({
                placeholder: "Pilih satu atau lebih kategori",
                theme: 'bootstrap-5'
            });
        });
    </script>
@endpush
