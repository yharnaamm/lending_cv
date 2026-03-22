import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section
			id='home'
			className='min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white relative overflow-hidden'
		>
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFmMmEzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

			<div className='max-w-7xl mx-auto px-6 text-center relative z-10'>
				<div className='animate-fadeInUp'>
					<h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fadeInUp'>
						<span className='inline-block hover:scale-105 transition-transform'>
							Artem
						</span>{' '}
						<span className='inline-block hover:scale-105 transition-transform text-blue-400'>
							Kushchevskyi
						</span>
					</h1>

					<p className='text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 animate-fadeInUp animation-delay-200'>
						Frontend Developer & UI/UX Enthusiast
					</p>

					<p className='text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fadeInUp animation-delay-400'>
						Crafting beautiful, performant web experiences with modern
						technologies. Passionate about clean code and pixel-perfect designs.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp animation-delay-600'>
						<button
							onClick={() => scrollToSection('projects')}
							className='px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-xl'
						>
							View My Work
						</button>
						<button
							onClick={() => scrollToSection('contact')}
							className='px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-lg transition-all transform hover:scale-105'
						>
							Get In Touch
						</button>
					</div>

					<div className='flex gap-6 justify-center animate-fadeInUp animation-delay-800'>
						<a
							href='https://github.com'
							target='_blank'
							rel='noopener noreferrer'
							className='p-3 bg-white/10 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110'
						>
							<Github size={24} />
						</a>
						<a
							href='https://linkedin.com'
							target='_blank'
							rel='noopener noreferrer'
							className='p-3 bg-white/10 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110'
						>
							<Linkedin size={24} />
						</a>
						<a
							href='mailto:john@example.com'
							className='p-3 bg-white/10 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110'
						>
							<Mail size={24} />
						</a>
					</div>
				</div>
			</div>

			<button
				onClick={() => scrollToSection('about')}
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'
			>
				<ChevronDown size={32} className='text-white/70' />
			</button>
		</section>
	)
}

export default Hero
