import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
			setIsMobileMenuOpen(false)
		}
	}

	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' },
	]

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-6 py-4'>
				<div className='flex justify-between items-center'>
					<button
						onClick={() => scrollToSection('home')}
						className='text-2xl font-bold text-white hover:text-blue-400 transition-colors'
					>
						AK
					</button>

					<div className='hidden md:flex space-x-8'>
						{navItems.map(item => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className='text-white hover:text-blue-400 transition-colors font-medium'
							>
								{item.label}
							</button>
						))}
					</div>

					<button
						className='md:hidden text-white'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{isMobileMenuOpen && (
					<div className='md:hidden mt-4 pb-4 space-y-4 animate-fadeIn'>
						{navItems.map(item => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className='block w-full text-left text-white hover:text-blue-400 transition-colors font-medium'
							>
								{item.label}
							</button>
						))}
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navigation
