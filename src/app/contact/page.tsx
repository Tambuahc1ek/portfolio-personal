'use client'

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    github: '',
    instagram: '',
    linkedin: '',
    whatsapp: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contactInfo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      alert('✅ Contact info berhasil dikirim!')
      console.log(data)
    } catch (err) {
      alert('❌ Gagal mengirim data')
      console.error(err)
    }
  }

  return (
    <section className="py-12 px-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow border">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub URL"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
        />
        <input
          type="text"
          name="instagram"
          placeholder="Instagram URL"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn URL"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
        />
        <input
          type="text"
          name="whatsapp"
          placeholder="WhatsApp"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
        />

        <button
          type="submit"
          className="bg-black text-white rounded-lg py-2 px-4 hover:bg-gray-800 transition w-full"
        >
          Kirim
        </button>
      </form>
    </section>
  )
}
