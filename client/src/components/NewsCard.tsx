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
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        {categories.slice(0, 3).map(category => (
                            <span
                                key={category.id + '-mobile'}
                                className="text-xs px-2.5 py-1 rounded-md font-semibold text-white bg-[#038A47] md:hidden"
                            >
                                {category.code}
                            </span>
                        ))}
                        {categories.length > 3 && (
                            <span className="text-xs font-semibold text-gray-500 md:hidden">
                                +{categories.length - 3}
                            </span>
                        )}

                        {categories.slice(0, 2).map(category => (
                            <span
                                key={category.id + '-tablet'}
                                className="hidden md:inline-flex items-center text-xs px-2.5 py-1 rounded-md font-semibold text-white bg-[#038A47] lg:hidden"
                            >
                                {category.code} <span className="ml-1.5">{category.name}</span>
                            </span>
                        ))}
                        {categories.length > 2 && (
                            <span className="hidden text-xs font-semibold text-gray-500 md:inline-block lg:hidden">
                                +{categories.length - 2}
                            </span>
                        )}

                        {categories.slice(0, 4).map(category => (
                            <span
                                key={category.id + '-desktop'}
                                className="hidden lg:inline-flex items-center text-xs px-2.5 py-1 rounded-md font-semibold text-white bg-[#038A47]"
                            >
                                {category.code} <span className="ml-1.5">{category.name}</span>
                            </span>
                        ))}
                        {categories.length > 4 && (
                            <span className="hidden text-xs font-semibold text-gray-500 lg:inline-block">
                                +{categories.length - 4}
                            </span>
                        )}
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