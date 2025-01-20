"use client"

import { useState } from "react"
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#">
          <Image 
          src="/images/uss-logo.png" 
          alt="Logo" 
          width={64} 
          height={64} 
          className="object-contain"
        />
        </a>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-orange-600">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-orange-600">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-orange-600">
            Services
          </a>
          <a href="#contact" className="text-gray-700 hover:text-orange-600">
            Contact
          </a>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </a>
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-200">
            About
          </a>
          <a href="#services" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Services
          </a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Contact
          </a>
        </div>
      )}
    </header>
  )
}

