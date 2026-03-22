import { Code, Palette, Zap } from 'lucide-react'

const About = () => {
	const features = [
		{
			icon: <Code size={32} />,
			title: 'Clean Code',
			description:
				'Writing maintainable, scalable code following best practices and modern standards.',
		},
		{
			icon: <Palette size={32} />,
			title: 'Beautiful Design',
			description:
				'Creating pixel-perfect interfaces that delight users and enhance experiences.',
		},
		{
			icon: <Zap size={32} />,
			title: 'Performance',
			description:
				'Optimizing every aspect for lightning-fast load times and smooth interactions.',
		},
	]

	return (
		<section id='about' className='py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4 text-black'>
						About Me
					</h2>
					<div className='w-20 h-1 bg-blue-600 mx-auto'></div>
				</div>

				<div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
					<div className='space-y-6'>
						<p className='text-lg text-gray-700 leading-relaxed'>
							Hi! I'm Artem Kushchevskyi, a passionate frontend developer with
							experience building modern web applications. I specialize in
							React, TypeScript, and creating intuitive user interfaces that
							make a difference.
						</p>
						<p className='text-lg text-gray-700 leading-relaxed'>
							My journey in web development started with a curiosity for how
							things work on the web, and it has evolved into a deep passion for
							crafting exceptional digital experiences. I believe in writing
							clean, maintainable code and staying up-to-date with the latest
							industry trends.
						</p>
						<p className='text-lg text-gray-700 leading-relaxed'>
							When I'm not coding, you'll find me exploring new design trends,
							contributing to open-source projects, or sharing knowledge with
							the developer community.
						</p>
					</div>

					<div className='relative'>
						<div className='aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300'>
							<img
								src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'
								alt='Developer workspace'
								className='w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity'
							/>
						</div>
					</div>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2 group'
						>
							<div className='text-blue-600 mb-4 group-hover:scale-110 transition-transform'>
								{feature.icon}
							</div>
							<h3 className='text-xl font-bold mb-3 text-black'>
								{feature.title}
							</h3>
							<p className='text-gray-600'>{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default About
