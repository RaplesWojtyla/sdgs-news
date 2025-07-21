import { generatePagination } from "@/lib/utils"
import PaginationArrow from "./PaginationArrow"
import PaginationNumber from "./PaginationNumber"



interface PaginationProps {
    totalPages: number
    currPage: number
    onPageChange: (page: number) => void
}

const Pagination = ({
    totalPages,
    currPage,
    onPageChange
}: PaginationProps) => {
    const allPages = generatePagination(totalPages, currPage)

    return (
        <div className="inline-flex justify-center items-center">
            <PaginationArrow 
                direction={'left'}
                onClick={() => onPageChange(currPage - 1)}
                isDisabled={currPage < 2}
            />
            <div className="flex -space-x-p">
                {allPages.map((page, i) => {
                    let position: 'first' | 'last' | 'middle' | 'single' | undefined

                    if (i === 0) position = 'first'
                    if (i === allPages.length - 1) position = 'last'
                    if (allPages.length === 1) position = 'single'
                    if (page === '...') position = 'middle'

                    return (
                        <PaginationNumber 
                            key={`${page}-${i}`}
                            page={page}
                            onClick={onPageChange}
                            position={position}
                            isActive={currPage == page}
                        />
                    )
                })}
            </div>
            <PaginationArrow 
                direction={'right'}
                onClick={() => onPageChange(currPage + 1)}
                isDisabled={currPage >= totalPages}
            />
        </div>
    )
}


export default Pagination