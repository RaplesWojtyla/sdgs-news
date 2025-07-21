import { FileX } from "lucide-react"

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16">
            <FileX className="w-64 h-32 mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Berita Tidak Ditemukan
            </h2>
            <p className="text-gray-500">
                Coba gunakan kata kunci atau filter kategori yang berbeda.
            </p>
        </div>
    )
}

export default NotFound