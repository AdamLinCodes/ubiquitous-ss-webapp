"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-transparent bg-clip-text text-blue-600"
        >
          Ubiquitous
        </a>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-green-600 transition duration-300">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-orange-600 transition duration-300">
            Services
          </a>
          <a href="#partnership" className="text-gray-700 hover:text-red-600 transition duration-300">
            Partnership
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Contact
          </a>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#services" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#partnership" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            Partnership
          </a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  )
}

