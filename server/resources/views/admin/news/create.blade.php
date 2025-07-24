@extends('layouts.admin')

@section('title', 'Tambah Berita Baru')

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Form Tambah Berita</h3>
        </div>
        <div class="card-body">
            <form action="{{ route('admin.news.store') }}" method="POST" enctype="multipart/form-data">
                @csrf

                <div class="mb-3">
                    <label for="title" class="form-label">Judul Berita</label>
                    <input type="text" name="title" id="title" class="form-control" required>
                </div>

                <div class="mb-3">
                    <label for="short_description" class="form-label">Deskripsi Singkat</label>

                    <textarea name="short_description" id="short_description" class="form-control" rows="5"></textarea>
                </div>

                <div class="mb-3">
                    <label for="author" class="form-label">Nama Penulis</label>
                    <input type="text" name="author" id="author" class="form-control"
                        value="{{ Auth::guard('admin')->user()->name }}" required>
                </div>

                <div class="mb-3">
                    <label for="categories" class="form-label">Kategori Berita</label>
                    <select name="categories[]" id="categories" class="form-control" multiple required>
                        @foreach ($categories as $category)
                            <option class="mb-1" value="{{ $category->id }}">{{ $category->code . ' ' . $category->name }}
                            </option>
                        @endforeach
                    </select>
                    <small class="form-text text-muted">Tahan tombol Ctrl (atau Cmd di Mac) untuk memilih lebih dari satu
                        kategori.</small>
                </div>

                <div class="mb-3">
                    <label for="thumbnail_url" class="form-label">Gambar Cover</label>
                    <input type="file" name="thumbnail_url" id="thumbnail_url" class="form-control" required>
                    <small class="form-text text-muted">Unggah gambar untuk thumbnail berita.</small>
                </div>

                <div class="mb-3">
                    <label for="content" class="form-label">Isi Konten</label>

                    <textarea name="content" id="content" class="form-control" rows="10" required></textarea>
                </div>

                <div class="d-flex justify-content-end">
                    <a href="{{ route('admin.news.index') }}" class="btn btn-secondary me-2">Batal</a>
                    <button type="submit" class="btn btn-primary">Simpan Berita</button>
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
