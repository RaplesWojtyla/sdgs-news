import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "@/lib/utils";
import type { News } from "@/lib/types";
import NewsCard from "@/components/NewsCard";
import DetailNewsHeader from "@/components/DetailNewsHeader";
import DetailNewsSkeleton from "@/components/skeletons/DetailNewsSkeleton";

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
		<main className="bg-gray-50 min-h-screen">
			<DetailNewsHeader
				title={news.title}
				author={news.author}
				thumbnailUrl={news.thumbnail_url}
				thumbnailCaption="Deskripsi thumbnail lorem ipsum"
				createdAt={news.created_at}
			/>

			<div className="container mx-auto pb-12">
				<div className="max-w-4xl mx-auto">
					<article className="p-6 md:p-8 mb-12">
						<div
							className="prose lg:prose-lg max-w-none text-gray-800"
							dangerouslySetInnerHTML={{ __html: news.content }}
						/>
					</article>

					<div>
						<h3 className="text-2xl font-bold mb-4">Berita Terkait</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{relatedNews.map((relatedItem) => (
								<NewsCard
									key={relatedItem.id}
                                    id={relatedItem.id}
									thumbnailUrl={relatedItem.thumbnail_url}
									title={relatedItem.title}
									shortDescription={relatedItem.short_description}
									categories={relatedItem.categories}
									createdAt={relatedItem.created_at}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DetailNewsPage;