import type { Category } from "@/lib/types"
import { Link } from "react-router-dom"

interface NewsCardProps {
    id: string
    thumbnailUrl: string
    title: string
    shortDescription: string
    categories: Category[]
    createdAt: string
}

const NewsCard = ({
    id,
    thumbnailUrl,
    title,
    shortDescription,
    categories,
    createdAt
}: NewsCardProps) => {
    return (
        <Link to={`/news/${id}`} className="block hover:bg-gray-50 rounded-lg">
            <div className="flex gap-4 md:gap-6 p-4">
                <div className="w-[133px] h-[100px] md:w-[200px] md:h-[150px] cursor-pointer">
                    <img
                        src={thumbnailUrl}
                        alt="thumbnail-img"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>

                <div className="flex flex-col flex-1 w-full">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {categories.map(category => (
                            <span
                                key={category.id}
                                className="text-xs px-2.5 py-1 rounded-md font-semibold text-white bg-[#038A47]"
                            >
                                {category.code} <span className="hidden sm:inline">{category.name}</span>
                            </span>
                        ))}
                    </div>
                    <h3 className="text-base md:text-lg line-clamp-2 lg:line-clamp-3 font-semibold md:font-bold text-gray-800 hover:text-gray-950 mb-1 cursor-pointer">
                        {title}
                    </h3>
                    <p className="hidden md:line-clamp-3 text-gray-600 text-sm grow cursor-pointer">
                        {shortDescription}
                    </p>
                    <p className="text-xs text-gray-400 mt-4 cursor-pointer">
                        {new Date(createdAt).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default NewsCard