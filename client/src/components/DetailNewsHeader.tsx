import { House } from "lucide-react";
import { Link } from "react-router-dom";

interface DetailNewsHeaderProps {
	title: string;
	createdAt: string;
	author: string;
	thumbnailUrl: string;
	thumbnailCaption: string;
}

const DetailNewsHeader = ({
	title,
	createdAt,
	author,
	thumbnailUrl,
	thumbnailCaption,
}: DetailNewsHeaderProps) => {
	const formattedDate = new Date(createdAt).toLocaleDateString("id-ID", {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<div className="w-full bg-white px-6 md:px-20 pt-8 pb-12 mb-8">
			<div className="container mx-auto">
				<div className="flex items-center gap-2 text-sm font-semibold mb-20 text-primary">
					<Link to="/" className="hover:underline">
						<House size={20} />
					</Link>
					<span>&gt;</span>
					<Link to="/" className="hover:underline">
						Activites
					</Link>
					<span>&gt;</span>
					<Link to="/" className="hover:underline">
						Berita SDGs
					</Link>
					<span>&gt;</span>
					<span className="text-sm md:text-base max-w-[100px] md:max-w-[400px] lg:max-w-[850px] truncate">
						{title}
					</span>
				</div>

				<div className="flex flex-col md:flex-row gap-10 items-center">
					<div className="w-full md:w-1/2">
						<h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
							{title}
						</h1>
						<div className="flex gap-8">
							<div>
								<p className="text-sm text-gray-500 mb-2">Dipublish Pada</p>
								<p className="text-base font-semibold text-gray-700">{formattedDate}</p>
							</div>
							<div>
								<p className="text-sm text-gray-500 mb-2">Dipublish Oleh</p>
								<p className="text-base font-semibold text-gray-700">{author}</p>
							</div>
						</div>
					</div>

					<div className="w-full md:w-1/2">
						<img
							src={thumbnailUrl}
							alt={title}
							className="w-full h-[350px] object-cover rounded-lg shadow-md"
						/>
						<p className="text-xs text-gray-500 mt-2 italic">
							{thumbnailCaption}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailNewsHeader;