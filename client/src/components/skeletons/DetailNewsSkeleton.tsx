import { Skeleton } from "@/components/ui/skeleton";

const DetailNewsSkeleton = () => {
    return (
        <main className="min-h-screen animate-pulse">
            <div className="w-full bg-white px-6 md:px-8 lg:px-16 pt-8 pb-12 md:mb-8">
                <div className="container mx-auto">
                    <div className="flex items-center gap-2 text-sm font-semibold mb-20">
                        <Skeleton className="h-5 w-5" />
                        <span>&gt;</span>
                        <Skeleton className="h-5 w-20" />
                        <span>&gt;</span>
                        <Skeleton className="h-5 w-24" />
                        <span>&gt;</span>
                        <Skeleton className="h-5 w-40" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="space-y-3">
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-11/12" />
                                <Skeleton className="h-8 w-3/4" />
                            </div>
                            <div className="flex gap-8">
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-5 w-40" />
                                </div>
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-5 w-32" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Skeleton className="w-full lg:max-h-[350px] h-[350px] rounded-lg" />
                            <Skeleton className="h-4 w-1/2 mt-2" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto pb-12">
                <div className="max-w-4xl mx-auto">
                    <div className="flex gap-0 md:mx-14">
                        <div className="hidden md:block md:p-8 md:mt-10">
                            <div className="flex flex-col gap-4">
                                <Skeleton className="h-8 w-8 rounded-full" />
                                <Skeleton className="h-8 w-8 rounded-full" />
                                <Skeleton className="h-8 w-8 rounded-full" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <article className="p-6 md:p-8 mb-12">
                                <div className="space-y-4">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-11/12" />
                                    <Skeleton className="h-4 w-full" />
                                    <br />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-5/6" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-11/12" />
                                </div>
                                <div className="mt-10 flex flex-wrap gap-4">
                                    <Skeleton className="h-8 w-24 rounded-sm" />
                                    <Skeleton className="h-8 w-28 rounded-sm" />
                                </div>
                            </article>
                        </div>
                    </div>
                    <div>
                        <Skeleton className="h-4 w-48 mx-auto mb-6" />
                        <div className="grid grid-rows-3 md:grid-cols-3 gap-14 md:gap-8">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="mx-8 space-y-2">
                                    <Skeleton className="h-3 w-20" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-11/12" />
                                    <Skeleton className="h-4 w-5/6" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DetailNewsSkeleton;