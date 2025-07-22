'use server'

import Header from "@/components/Header"
import NewsCard from "@/components/NewsCard"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { type News, type Category, type Meta } from "@/lib/types"
import CategoryFilter from "@/components/CategoryFilter"
import Toolbar from "@/components/Toolbar"
import { useDebounce } from "@/lib/useDebounce"
import { SERVER_URL } from "@/lib/utils"
import NewsCardSkeleton from "@/components/skeletons/NewsCardSkeleton"
import CategoryFilterSkeleton from "@/components/skeletons/CategoryFilterSkeleton"
import NotFound from "@/components/NotFound"
import Pagination from "@/components/Pagination"
import { Loader2 } from "lucide-react"

const NewsPage = () => {
	const [categories, setCategories] = useState<Category[]>([])
	const [news, setNews] = useState<News[]>([])
	const [meta, setMeta] = useState<Meta>()

	const [isNewsLoading, setIsNewsLoading] = useState<boolean>(true)
	const [isCategoriesLoading, setIsCategoriesLoading] = useState<boolean>(true)

	const [currPage, setCurrPage] = useState<number>(1)
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [selectedCategoriesIds, setSelectedCategoriesIds] = useState<string[]>([])

	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	const fetchNews = useCallback(async () => {
		setIsNewsLoading(true)
		try {
			const params = {
				page: currPage,
				search: debouncedSearchTerm,
				categories: selectedCategoriesIds
			}

			const res = await axios.get(`${SERVER_URL}/api/news`, { params })

			setNews(res.data.data)
			setMeta(res.data.meta)
		} catch (error) {
			console.error(`[fetchNews] Error: ${error}`)
			setNews([])
		} finally {
			setIsNewsLoading(false)
		}
	}, [currPage, debouncedSearchTerm, selectedCategoriesIds])

	useEffect(() => {
		fetchNews()
	}, [fetchNews])

	useEffect(() => {
		const fetchCategories = async () => {
			setIsCategoriesLoading(true)

			try {
				const res = await axios.get(`${SERVER_URL}/api/categories`)

				setCategories(res.data.data)
			} catch (error) {
				console.error(`[fetchCategories] Error: ${error}`)
				setCategories([])
			} finally {
				setIsCategoriesLoading(false)
			}
		}

		fetchCategories()
	}, [])

	const handleCategoryChange = (categoryIds: string) => {
		setSelectedCategoriesIds(prev => {
			if (prev.includes(categoryIds)) {
				return prev.filter(id => id !== categoryIds)
			}

			return [...prev, categoryIds]
		})
	}

	return (
		<main className="bg-gray-50 min-h-screen">
			<Header />

			<div className="container mx-auto py-8 md:py-12 lg:px-4">
				<div className="flex gap-8 lg:gap-12">
					<div className="w-full md:w-2/3">
						<Toolbar
							searchTerm={searchTerm}
							onSearchTermChange={setSearchTerm}
						/>
						<div className="space-y-3">
							{isNewsLoading ? (
								Array.from({ length: 5 }).map((_, i) => (
									<NewsCardSkeleton key={i} />
								))
							) : (
								news.length > 0 ? (
									news.map(newsItem => (
										<NewsCard
											key={newsItem.id}
											id={newsItem.id}
											thumbnailUrl={newsItem.thumbnail_url}
											title={newsItem.title}
											content={newsItem.content}
											categories={newsItem.categories}
											createdAt={newsItem.created_at}
										/>
									))
								) : (
									<NotFound />
								)
							)}
						</div>
						<div className="flex justify-center items-center mt-7">
							{isNewsLoading ? (
								<div className="flex text-gray-400 items-center gap-3">
									<Loader2 className="animate-spin" />
									<span className="animate-pulse">Loading...</span>
								</div>
							) : (

								<Pagination
									totalPages={meta!.last_page}
									currPage={meta!.current_page}
									onPageChange={setCurrPage}
								/>

							)}
						</div>
					</div>

					<div className="hidden md:block md:w-1/3">
						{isCategoriesLoading ? (
							<CategoryFilterSkeleton />
						) : (
							<CategoryFilter
								categories={categories}
								selectedCategoriesIds={selectedCategoriesIds}
								onCategoryChange={handleCategoryChange}
							/>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}

export default NewsPage