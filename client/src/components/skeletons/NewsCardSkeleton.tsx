import { Skeleton } from "@/components/ui/skeleton"

const NewsCardSkeleton = () => {
    return (
        <div className="flex gap-4 md:gap-6 p-4">
            <Skeleton className="w-[133px] h-[100px] md:w-[200px] md:h-[150px] rounded-md" />

            <div className="flex flex-col flex-1 w-full">
                <div className="flex flex-wrap gap-2 mb-2">
                    <Skeleton className="h-5 w-20 rounded-md" />
                    <Skeleton className="h-5 w-24 rounded-md" />
                </div>

                <div className="space-y-2 mb-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[90%]" />
                </div>

                <div className="hidden md:flex flex-col space-y-2 grow mt-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-4/5" />
                </div>
                
                <Skeleton className="h-3 w-1/4 mt-4" />
            </div>
        </div>
    )
}

export default NewsCardSkeleton