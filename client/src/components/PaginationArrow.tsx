import clsx from "clsx"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "./ui/button"



interface PaginationArrowProps {
    direction: 'left' | 'right'
    onClick: () => void
    isDisabled?: boolean
}

const PaginationArrow = ({
    direction,
    onClick,
    isDisabled
}: PaginationArrowProps) => {
    return (
        <Button
            type="button"
            variant={'ghost'}
            className={clsx(
                'flex size-10 items-center justify-center rounded-md cursor-pointer',
                {
                    'pointer-events-none text-gray-400 bg-gray-100': isDisabled,
                    'hover:bg-gray-100': !isDisabled,
                    'mr-2 md:mr-4': direction === 'left',
                    'ml-2 md:ml-4': direction === 'right'
                }
            )}
            onClick={onClick}
            disabled={isDisabled}
        >
            {direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </Button>
    )
}

export default PaginationArrow