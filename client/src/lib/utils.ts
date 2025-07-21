import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export const SERVER_URL = import.meta.env.VITE_SERVER_URL

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const generatePagination = (totalPages: number, currPage: number) => {
	if (totalPages <= 7) {
		return Array.from({ length: 7 }, (_, i) => i + 1)
	}

	if (currPage < 5) {
		return [1, 2, 3, '...', totalPages]
	}

	if (currPage > totalPages - 4) {
		return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
	}

	return [1, '...', currPage - 1, currPage, currPage + 1, '...', totalPages]
}
