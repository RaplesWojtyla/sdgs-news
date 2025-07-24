import clsx from "clsx"
import { Button } from "./ui/button"



interface PaginationNumberProps {
    page: number | string
    onClick: (page: number) => void
    isActive: boolean
    position?: 'first' | 'last' | 'middle' | 'single'
}

const PaginationNumber = ({
    page,
    onClick,
    isActive,
    position
}: PaginationNumberProps) => {
    const isEllipsis: boolean = position === 'middle'

    const className = clsx(
        'flex h-10 w-10 items-center justify-center text-sm text-black text-gray-400 cursor-pointer',
        {
            'rounded-l-md': position === 'first' || position === 'single',
            'rounded-r-md': position === 'last' || position === 'single',
            'z-10 text-gray-700 font-bold': isActive,
            'hover:bg-gray-100': !isActive && !isEllipsis,
            'text-gray-400 pointer-events-none': isEllipsis,
        }
    )

    if (isActive || isEllipsis) {
        return (
            <div
                className={className}
            >
                {page}
            </div>
        )
    }

    return (
        <Button
            type="button"
            variant={'ghost'}
            className={className}
            onClick={() => onClick(page as number)}
        >
            {page}
        </Button>
    )
}


export default PaginationNumber