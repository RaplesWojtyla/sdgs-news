import { Skeleton } from "@/components/ui/skeleton"

const CategoryFilterSkeleton = () => {
    return (
        <div className="bg-white h-fit">
            <div className="flex justify-between min-w-full items-center mb-4">
                <h3 className="font-semibold text-xl">Kategori</h3>
                <Skeleton className="h-6 w-6" />
            </div>

            <div className="space-y-3">
                {Array.from({ length: 17 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-72" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryFilterSkeleton