import React, { useState } from 'react'

interface BookFormData {
  titre: string
  auteur: string
  isbn: string
  niveau_scolaire: string
  matiere: string
  etat: string
  valeur_points: number
  description: string
}

const AddBookForm: React.FC = () => {
  const [formData, setFormData] = useState<BookFormData>({
    titre: '',
    auteur: '',
    isbn: '',
    niveau_scolaire: '',
    matiere: '',
    etat: '',
    valeur_points: 50,
    description: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'valeur_points' ? parseInt(value) || 0 : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      // Simulate API call - in real app, this would call Supabase
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage({ type: 'success', text: 'Livre ajouté avec succès ! Vous avez gagné 5 points.' })
      setFormData({
        titre: '',
        auteur: '',
        isbn: '',
        niveau_scolaire: '',
        matiere: '',
        etat: '',
        valeur_points: 50,
        description: ''
      })
    } catch (error) {
      setMessage({ type: 'error', text: 'Erreur lors de l\'ajout du livre. Veuillez réessayer.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {message && (
        <div className={`p-4 rounded-md ${
          message.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Titre */}
        <div>
          <label htmlFor="titre" className="block text-sm font-medium text-gray-700 mb-2">
            Titre du livre *
          </label>
          <input
            type="text"
            id="titre"
            name="titre"
            required
            value={formData.titre}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Ex: Mathématiques 2nde"
          />
        </div>

        {/* Auteur */}
        <div>
          <label htmlFor="auteur" className="block text-sm font-medium text-gray-700 mb-2">
            Auteur/Éditeur *
          </label>
          <input
            type="text"
            id="auteur"
            name="auteur"
            required
            value={formData.auteur}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Ex: Hachette Education"
          />
        </div>

        {/* ISBN */}
        <div>
          <label htmlFor="isbn" className="block text-sm font-medium text-gray-700 mb-2">
            ISBN
          </label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={formData.isbn}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Ex: 978-2-01-125456-7"
          />
        </div>

        {/* Niveau scolaire */}
        <div>
          <label htmlFor="niveau_scolaire" className="block text-sm font-medium text-gray-700 mb-2">
            Niveau scolaire *
          </label>
          <select
            id="niveau_scolaire"
            name="niveau_scolaire"
            required
            value={formData.niveau_scolaire}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Sélectionnez un niveau</option>
            <option value="Primaire">Primaire</option>
            <option value="Collège">Collège</option>
            <option value="Lycée">Lycée</option>
          </select>
        </div>

        {/* Matière */}
        <div>
          <label htmlFor="matiere" className="block text-sm font-medium text-gray-700 mb-2">
            Matière *
          </label>
          <select
            id="matiere"
            name="matiere"
            required
            value={formData.matiere}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Sélectionnez une matière</option>
            <option value="Français">Français</option>
            <option value="Mathématiques">Mathématiques</option>
            <option value="Sciences">Sciences</option>
            <option value="Histoire-Géographie">Histoire-Géographie</option>
            <option value="Anglais">Anglais</option>
            <option value="Espagnol">Espagnol</option>
            <option value="Philosophie">Philosophie</option>
            <option value="SVT">SVT</option>
            <option value="Physique-Chimie">Physique-Chimie</option>
          </select>
        </div>

        {/* État */}
        <div>
          <label htmlFor="etat" className="block text-sm font-medium text-gray-700 mb-2">
            État du livre *
          </label>
          <select
            id="etat"
            name="etat"
            required
            value={formData.etat}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Sélectionnez l'état</option>
            <option value="neuf">Neuf</option>
            <option value="bon">Bon état</option>
            <option value="usagé">Usagé</option>
          </select>
        </div>
      </div>

      {/* Valeur en points */}
      <div>
        <label htmlFor="valeur_points" className="block text-sm font-medium text-gray-700 mb-2">
          Valeur en points *
        </label>
        <div className="relative">
          <input
            type="number"
            id="valeur_points"
            name="valeur_points"
            required
            min="10"
            max="200"
            value={formData.valeur_points}
            onChange={handleInputChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">points</span>
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Recommandé : Neuf (60-100 pts), Bon état (30-70 pts), Usagé (10-40 pts)
        </p>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Description (optionnelle)
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleInputChange}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Décrivez l'état du livre, les annotations éventuelles, etc."
        />
      </div>

      {/* Photo upload placeholder */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Photos du livre
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <span className="font-medium text-green-600 hover:text-green-500 cursor-pointer">
                Cliquez pour ajouter des photos
              </span>
              {' '}ou glissez-déposez
            </p>
            <p className="text-xs text-gray-500">PNG, JPG jusqu'à 10MB</p>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-8 py-3 rounded-md font-medium transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          } text-white`}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Ajout en cours...
            </span>
          ) : (
            'Ajouter le livre'
          )}
        </button>
      </div>
    </form>
  )
}

export default AddBookForm
