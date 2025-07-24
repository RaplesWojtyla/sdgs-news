import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "@/lib/utils";
import type { News } from "@/lib/types";
import DetailNewsHeader from "@/components/DetailNewsHeader";
import DetailNewsSkeleton from "@/components/skeletons/DetailNewsSkeleton";
import SocialShare from "@/components/SocialShare";
import { Badge } from "@/components/ui/badge";

const DetailNewsPage = () => {
	const { id } = useParams<{ id: string }>();
	const [news, setNews] = useState<News | null>(null);
	const [relatedNews, setRelatedNews] = useState<News[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchNewsDetail = useCallback(async () => {
		if (!id) return;

		setIsLoading(true);
		try {
			const detailRes = await axios.get(`${SERVER_URL}/api/news/${id}`);
			setNews(detailRes.data.data);

			const relatedRes = await axios.get(`${SERVER_URL}/api/news`);
			setRelatedNews(
				relatedRes.data.data
					.filter((item: News) => item.id !== id)
					.slice(0, 3)
			);
		} catch (error) {
			console.error(`[fetchNewsDetail] Error: ${error}`);
			setNews(null);
			setRelatedNews([]);
		} finally {
			setIsLoading(false);
		}
	}, [id]);

	useEffect(() => {
		fetchNewsDetail();
	}, [fetchNewsDetail]);


	if (isLoading) {
		return <DetailNewsSkeleton />;
	}

	if (!news) {
		return (
			<main className="bg-gray-50 min-h-screen flex items-center justify-center">
				<div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
					<img
						src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
						alt="Not found"
						className="mx-auto mb-4 w-20 h-20 opacity-80"
					/>
					<h2 className="text-2xl font-bold mb-2 text-gray-800">Berita tidak ditemukan</h2>
					<p className="text-gray-600 mb-6">
						Maaf, berita yang Anda cari tidak tersedia atau telah dihapus.
					</p>
					<Link
						to="/"
						className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
					>
						Kembali ke Beranda
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className="min-h-screen">
			<DetailNewsHeader
				title={news.title}
				author={news.author}
				thumbnailUrl={news.thumbnail_url}
				thumbnailCaption="Deskripsi thumbnail lorem ipsum"
				createdAt={news.created_at}
			/>

			<div className="container mx-auto pb-12">
				<div className="max-w-4xl mx-auto">
					<div className="flex justify-center md:hidden mb-12">
						<SocialShare />
					</div>
					<div className="flex gap-0 md:mx-14">
						<div className="hidden md:block md:p-8 md:mt-10">
							<SocialShare />
						</div>
						<div className="flex-1">
							<article className="p-6 md:p-8 mb-12">
								<div
									className="prose lg:prose-lg max-w-none text-gray-800"
									dangerouslySetInnerHTML={{ __html: news.content }}
								/>

								<div className="mt-10 space-x-4 space-y-4">
									{news.categories.map(category => (
										<Badge
											key={category.id}
											className="py-2 text-primary rounded-sm"
											variant={'secondary'}
										>
											{category.code} {category.name}
										</Badge>
									))}
								</div>
							</article>

						</div>

					</div>

					<div>
						<h3 className="font-semibold mb-6 text-center text-gray-500 text-sm">Find Other News</h3>
						<div className="grid grid-rows-3 md:grid-cols-3 gap-14 md:gap-8">
							{relatedNews.map((relatedItem) => (
								<Link to={`/news/${relatedItem.id}`}>
									<div className="text-gray-500 mx-8">
										<p className="text-xs mb-2">
											Internasional
										</p>
										<p className="md:line-clamp-5 lg:line-clamp-6">
											{relatedItem.title + "asfnaljnfa awefawef awufehawefhuw aw fwaufa hwfawf"}
										</p>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DetailNewsPage;