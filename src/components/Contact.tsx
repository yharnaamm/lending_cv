import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Form submitted:', formData)
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const contactInfo = [
		{
			icon: <Mail size={24} />,
			label: 'Email',
			value: 'artemkushchevskyi@gmail.com',
			link: 'mailto:artemkushchevskyi@gmail.com',
		},
		{
			icon: <Phone size={24} />,
			label: 'Phone',
			value: '+380 63 696 79 32',
			link: 'tel:+380 63 696 79 32',
		},
		{
			icon: <MapPin size={24} />,
			label: 'Location',
			value: 'Zaporizhzhia, Ukraine',
			link: null,
		},
	]

	return (
		<section
			id='contact'
			className='py-20 bg-gradient-to-br from-gray-900 to-blue-950 text-white'
		>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4'>Get In Touch</h2>
					<div className='w-20 h-1 bg-blue-400 mx-auto mb-4'></div>
					<p className='text-gray-300 text-lg'>
						Have a project in mind? Let's work together!
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-12'>
					<div className='space-y-8'>
						<div>
							<h3 className='text-2xl font-bold mb-6'>Let's Connect</h3>
							<p className='text-gray-300 mb-8'>
								I'm always interested in hearing about new projects and
								opportunities. Whether you have a question or just want to say
								hi, feel free to reach out!
							</p>
						</div>

						<div className='space-y-6'>
							{contactInfo.map((info, index) => (
								<div
									key={index}
									className='flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group'
								>
									<div className='text-blue-400 group-hover:scale-110 transition-transform'>
										{info.icon}
									</div>
									<div>
										<p className='text-gray-400 text-sm mb-1'>{info.label}</p>
										{info.link ? (
											<a
												href={info.link}
												className='text-white hover:text-blue-400 transition-colors'
											>
												{info.value}
											</a>
										) : (
											<p className='text-white'>{info.value}</p>
										)}
									</div>
								</div>
							))}
						</div>
					</div>

					<div>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium mb-2'
								>
									Name
								</label>
								<input
									type='text'
									id='name'
									name='name'
									value={formData.name}
									onChange={handleChange}
									required
									className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400 transition-all'
									placeholder='Your name'
								/>
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium mb-2'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									required
									className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400 transition-all'
									placeholder='your.email@example.com'
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium mb-2'
								>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									required
									rows={5}
									className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400 resize-none transition-all'
									placeholder='Tell me about your project...'
								></textarea>
							</div>

							<button
								type='submit'
								className='w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2'
							>
								<Send size={20} />
								Send Message
							</button>
						</form>
					</div>
				</div>

				<div className='mt-16 pt-8 border-t border-white/10 text-center text-gray-400'>
					<p>&copy; 2026 Artem Kushchevskyi. All rights reserved.</p>
				</div>
			</div>
		</section>
	)
}

export default Contact
