import { House } from 'lucide-react'

const Header = () => {
    return (
        <header
            className="relative text-white overflow-hidden"
            style={{
                backgroundImage: 'url(/header-sdgs.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                backgroundSize: 'contain',
                backgroundBlendMode: 'luminosity'
            }}
        >
            <div 
                className='absolute inset-0 w-3/4'
                style={{
                    background: 'linear-gradient(to right, #0B6839, #038A47, #39A935, transparent)'
                }}
                aria-hidden='true'
            />

            <div className='container relative mx-auto px-4 py-16 lg:py-28'>
                <div className='flex absolute top-4 items-center gap-2 text-sm'>
                    <House size={20} className='cursor-pointer' />
                    <span>&gt;</span>
                    <a href="/" className='hover:underline'>
                        Activities
                    </a>
                    <span>&gt;</span>
                    <span className='font-semibold'>News</span>
                </div>
                <h1 className='mt-4 text-4xl md:text-5xl font-bold'>Berita SDGs</h1>
            </div>
        </header>
    )
}

export default Header