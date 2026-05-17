'use client'

import { useState } from 'react'

export default function TalentoTopEmpleo() {
  const [searchTerm, setSearchTerm] = useState('')
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [submitted, setSubmitted] = useState(false)

  const jobs = [
    {
      title: 'Desarrollador Web',
      company: 'Tech Solutions',
      location: 'Remoto',
      salary: '$3.000.000 COP'
    },
    {
      title: 'Asistente Administrativo',
      company: 'Grupo Empresarial',
      location: 'Cartagena',
      salary: '$2.200.000 COP'
    },
    {
      title: 'Diseñador Gráfico',
      company: 'Creativos Studio',
      location: 'Barranquilla',
      salary: '$2.800.000 COP'
    }
  ]

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearch = (e) => {
    e.preventDefault()
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formData.nombre && formData.email && formData.mensaje) {
      console.log('Formulario enviado:', formData)
      setSubmitted(true)
      setFormData({ nombre: '', email: '', mensaje: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Talento Top Empleo</h1>
            <p className="text-sm mt-1 text-blue-100">
              Encuentra oportunidades laborales rápidas y seguras
            </p>
          </div>

          <nav className="flex gap-4 mt-4 md:mt-0">
            <a href="#empleos" className="hover:text-yellow-300 transition">
              Empleos
            </a>
            <a href="#sobre" className="hover:text-yellow-300 transition">
              Sobre Nosotros
            </a>
            <a href="#contacto" className="hover:text-yellow-300 transition">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Tu próximo trabajo empieza aquí
          </h2>

          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Publicamos vacantes actualizadas todos los días para ayudarte a encontrar empleo rápido.
          </p>

          <form onSubmit={handleSearch} className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="text"
              placeholder="Buscar empleo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-5 py-3 rounded-2xl border border-gray-300 w-full md:w-96 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-3 rounded-2xl font-semibold shadow-md"
            >
              Buscar
            </button>
          </form>
        </div>
      </section>

      {/* Jobs */}
      <section id="empleos" className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Vacantes Destacadas
          </h3>

          {filteredJobs.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:scale-105 transition"
                >
                  <h4 className="text-2xl font-bold text-blue-700">
                    {job.title}
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Empresa: <span className="font-semibold">{job.company}</span>
                  </p>

                  <p className="text-gray-600 mt-1">
                    Ubicación: <span className="font-semibold">{job.location}</span>
                  </p>

                  <p className="text-gray-600 mt-1">
                    Salario: <span className="font-semibold">{job.salary}</span>
                  </p>

                  <button className="mt-5 w-full bg-yellow-400 hover:bg-yellow-500 transition text-black py-3 rounded-2xl font-bold">
                    Aplicar Ahora
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 text-lg">
              <p>No se encontraron empleos con "{searchTerm}"</p>
              <p className="mt-2 text-sm">Intenta con otros términos de búsqueda</p>
            </div>
          )}
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">
            Sobre Talento Top Empleo
          </h3>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Somos una plataforma enfocada en conectar empresas con personas talentosas.
            Nuestro objetivo es facilitar la búsqueda de empleo en Colombia y Latinoamérica.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-800">
            Contáctanos
          </h3>

          {submitted && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-2xl text-center">
              ✅ ¡Mensaje enviado exitosamente! Te contactaremos pronto.
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="mt-8 space-y-5">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleFormChange}
              className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />

            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleFormChange}
              className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 transition text-white py-3 rounded-2xl font-bold"
            >
              Enviar Mensaje
            </button>
          </form>

          <div className="mt-8 text-center text-gray-600">
            <p>Email: talentotopempleo@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2026 Talento Top Empleo - Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
