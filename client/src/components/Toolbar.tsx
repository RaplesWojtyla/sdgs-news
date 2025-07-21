import { useState } from "react"
import { Button } from "./ui/button"
import { ChevronDown, ChevronUp, Search } from "lucide-react"


const availableYears: string[] = ['2025', '2024', '2023', '2022', '2021', '2020']

interface ToolbarProps {
    searchTerm: string
    onSearchTermChange: (newTerm: string) => void
}

const Toolbar = ({ searchTerm, onSearchTermChange }: ToolbarProps) => {
    const [selectedYears, setSelectedYears] = useState<string>(availableYears[0])
    const [isYearOpen, setIsYearOpen] = useState<boolean>(false)

    const handleSelectYear = (year: string) => {
        setSelectedYears(year)
        setIsYearOpen(false)
    }

    return (
        <div className="flex gap-4 mb-8 pl-4 justify-between">
            <div className="hidden md:block relative flex-none">
                <div className="flex items-center gap-4">
                    <p className="font-medium">Tahun Rilis</p>
                    <Button
                        variant={'secondary'}
                        onClick={() => setIsYearOpen(prev => !prev)}
                        className="w-full md:w-auto bg-[#39A9354D] text-[#0B6839]"
                    >
                        {selectedYears}
                        {isYearOpen ? <ChevronDown /> : <ChevronUp />}
                    </Button>
                </div>

                {isYearOpen && (
                    <div className="absolute left-24 z-10 mt-2 w-fit bg-white rounded-md shadow-lg border">
                        <ul>
                            {availableYears.map(year => (
                                <li
                                    key={year}
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelectYear(year)}
                                >
                                    {year}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="flex gap-2">
                <div className="relative grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-primary" />
                    <input 
                        type="text"
                        placeholder="CARI DISINI"
                        className="w-full lg:w-[422px] text-sm lg:text-base text-end h-9 pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white"
                        value={searchTerm}
                        onChange={(e) => onSearchTermChange(e.target.value)}
                    />
                </div>
                <Button className="px-6 font-bold cursor-pointer">
                    CARI
                </Button>
            </div>
        </div>
    )
}

export default Toolbar