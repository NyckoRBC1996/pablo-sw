import Link from 'next/link'
import { Instagram, Github, Youtube } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-8 md:flex md:items-center md:justify-between">
                    <nav className="flex flex-wrap justify-center space-x-6 md:order-2" aria-label="Footer">
                        {[
                            { name: 'About', href: '#' },
                            { name: 'Blog', href: '#' },
                            { name: 'Jobs', href: '#' },
                            { name: 'Press', href: '#' },
                            { name: 'Accessibility', href: '#' },
                            { name: 'Partners', href: '#' },
                        ].map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm hover:text-gray-300 mb-2 md:mb-0">
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="border-t border-gray-800 py-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <Link href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" aria-hidden="true" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-6 w-6" aria-hidden="true" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">YouTube</span>
                            <Youtube className="h-6 w-6" aria-hidden="true" />
                        </Link>
                    </div>
                </div>

                <div className="border-t border-gray-800 py-8 md:flex md:items-center md:justify-between">
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-xs leading-5">
                            &copy; {currentYear} Your Company, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

