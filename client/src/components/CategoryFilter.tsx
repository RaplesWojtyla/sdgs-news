import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { Category } from "@/lib/types"


interface CategoryFilterProps {
    categories: Category[]
    selectedCategoriesIds: string[]
    onCategoryChange: (categoryId: string) => void
}

const CategoryFilter = ({
    categories,
    selectedCategoriesIds,
    onCategoryChange
}: CategoryFilterProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <div className="bg-white h-fit">
            <div
                onClick={() => setIsOpen(prev => !prev)}
                className="flex justify-between min-w-full items-center mb-4"
            >
                <h3 className="font-semibold text-xl">Kategori</h3>
                {isOpen ? <ChevronDown /> : <ChevronUp />}
            </div>

            {isOpen && (
                <div className="space-y-2">
                    {categories.map(category => (
                        <label
                            key={category.id}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <input
                                type='checkbox'
                                className='cursor-pointer'
                                checked={selectedCategoriesIds.includes(category.id)}
                                onChange={() => onCategoryChange(category.id)}
                            />
                            <span className="text-sm text-gray-700">{category.code} {category.name}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CategoryFilter