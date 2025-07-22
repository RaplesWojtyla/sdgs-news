import { Skeleton } from "@/components/ui/skeleton";

const DetailNewsSkeleton = () => {
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Header Skeleton (Full-width) */}
            <div className="w-full bg-white pt-8 pb-12 mb-8 shadow-sm">
                <div className="container mx-auto">
                    <Skeleton className="h-5 w-3/5 mb-6" />
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2 space-y-3">
                            <Skeleton className="h-8 w-full" />
                            <Skeleton className="h-8 w-3/4" />
                            <Skeleton className="h-5 w-1/2 mt-4" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <Skeleton className="w-full h-56 rounded-lg" />
                            <Skeleton className="h-3 w-1/2 mt-2" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Skeleton (Centered) */}
            <div className="container mx-auto pb-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-12 space-y-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <br />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>

                    <div>
                        <Skeleton className="h-7 w-1/3 mb-4" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="border rounded-lg p-4">
                                    <Skeleton className="w-full h-32 mb-4" />
                                    <Skeleton className="h-5 w-3/4 mb-2" />
                                    <Skeleton className="h-4 w-full" />
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