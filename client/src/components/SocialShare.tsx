import { FacebookIcon, InstagramIcon, Share2, TwitterIcon } from "lucide-react"

const SocialShare = () => {
    return (
        <div className='flex md:flex-col items-center gap-4 text-gray-500 m-0 p-0'>
            <Share2 size={20} />
            <TwitterIcon size={20} />
            <InstagramIcon size={20} />
            <FacebookIcon size={20} />
        </div>
    )
}

export default SocialShare