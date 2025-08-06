import React, { useState, useEffect } from 'react'
import { X, Save, Plus, Trash2, ExternalLink, Calendar, Car, CloudRain } from 'lucide-react'
import './AddOptionModal.css'

const AddOptionModal = ({ onAdd, onUpdate, onClose, editingVacation }) => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image: '',
    location: '',
    tripDates: '',
    flightPrice: '',
    otherCosts: [],
    accommodations: [],
    activities: [],
    weather: {
      day: '',
      evening: '',
      rainChance: '',
      description: ''
    },
    notes: ''
  })

  useEffect(() => {
    if (editingVacation) {
      setFormData(editingVacation)
    }
  }, [editingVacation])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleWeatherChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      weather: {
        ...prev.weather,
        [field]: value
      }
    }))
  }

  const addOtherCost = () => {
    const newCost = {
      id: Date.now(),
      name: '',
      cost: ''
    }
    setFormData(prev => ({
      ...prev,
      otherCosts: [...prev.otherCosts, newCost]
    }))
  }

  const updateOtherCost = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      otherCosts: prev.otherCosts.map((cost, i) => 
        i === index ? { ...cost, [field]: value } : cost
      )
    }))
  }

  const removeOtherCost = (index) => {
    setFormData(prev => ({
      ...prev,
      otherCosts: prev.otherCosts.filter((_, i) => i !== index)
    }))
  }

  const addAccommodation = () => {
    const newAccommodation = {
      id: Date.now(),
      name: '',
      image: '',
      price: '',
      url: '',
      selected: false
    }
    setFormData(prev => ({
      ...prev,
      accommodations: [...prev.accommodations, newAccommodation]
    }))
  }

  const updateAccommodation = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      accommodations: prev.accommodations.map((acc, i) => 
        i === index ? { ...acc, [field]: value } : acc
      )
    }))
  }

  const removeAccommodation = (index) => {
    setFormData(prev => ({
      ...prev,
      accommodations: prev.accommodations.filter((_, i) => i !== index)
    }))
  }

  const addActivity = () => {
    const newActivity = {
      id: Date.now(),
      name: '',
      image: '',
      description: ''
    }
    setFormData(prev => ({
      ...prev,
      activities: [...prev.activities, newActivity]
    }))
  }

  const updateActivity = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.map((act, i) => 
        i === index ? { ...act, [field]: value } : act
      )
    }))
  }

  const removeActivity = (index) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingVacation) {
      onUpdate({ ...formData, id: editingVacation.id })
    } else {
      onAdd(formData)
    }
  }

  const handleClose = () => {
    setFormData({
      title: '',
      subtitle: '',
      image: '',
      location: '',
      tripDates: '',
      flightPrice: '',
      otherCosts: [],
      accommodations: [],
      activities: [],
      weather: {
        day: '',
        evening: '',
        rainChance: '',
        description: ''
      },
      notes: ''
    })
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{editingVacation ? 'Edit Vacation Option' : 'Add New Vacation Option'}</h2>
          <button className="modal-close" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="e.g., Bali Paradise"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subtitle">Subtitle</label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                placeholder="e.g., Indonesia"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="e.g., Bali, Indonesia"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tripDates">Trip Dates</label>
              <input
                type="text"
                id="tripDates"
                name="tripDates"
                value={formData.tripDates}
                onChange={handleChange}
                placeholder="e.g., June 15-25, 2024"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="flightPrice">Flight Price</label>
              <input
                type="text"
                id="flightPrice"
                name="flightPrice"
                value={formData.flightPrice}
                onChange={handleChange}
                placeholder="e.g., $1,200"
              />
            </div>
          </div>

          {/* Other Costs Section */}
          <div className="form-section">
            <div className="section-header">
              <label>Other Cost Considerations</label>
              <button 
                type="button" 
                className="btn-add" 
                onClick={addOtherCost}
              >
                <Plus size={16} />
                Add Cost
              </button>
            </div>
            
            {formData.otherCosts.map((cost, index) => (
              <div key={cost.id} className="item-card">
                <div className="item-header">
                  <h4>Cost {index + 1}</h4>
                  <button 
                    type="button" 
                    className="btn-remove" 
                    onClick={() => removeOtherCost(index)}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={cost.name}
                      onChange={(e) => updateOtherCost(index, 'name', e.target.value)}
                      placeholder="e.g., Car Rental"
                    />
                  </div>
                  <div className="form-group">
                    <label>Cost</label>
                    <input
                      type="text"
                      value={cost.cost}
                      onChange={(e) => updateOtherCost(index, 'cost', e.target.value)}
                      placeholder="e.g., $300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Accommodations Section */}
          <div className="form-section">
            <div className="section-header">
              <label>Accommodations</label>
              <button 
                type="button" 
                className="btn-add" 
                onClick={addAccommodation}
              >
                <Plus size={16} />
                Add Accommodation
              </button>
            </div>
            
            {formData.accommodations.map((accommodation, index) => (
              <div key={accommodation.id} className="item-card">
                <div className="item-header">
                  <h4>Accommodation {index + 1}</h4>
                  <button 
                    type="button" 
                    className="btn-remove" 
                    onClick={() => removeAccommodation(index)}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={accommodation.name}
                      onChange={(e) => updateAccommodation(index, 'name', e.target.value)}
                      placeholder="e.g., Luxury Villa with Private Pool"
                    />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      value={accommodation.price}
                      onChange={(e) => updateAccommodation(index, 'price', e.target.value)}
                      placeholder="e.g., $150/night"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="url"
                      value={accommodation.image}
                      onChange={(e) => updateAccommodation(index, 'image', e.target.value)}
                      placeholder="https://example.com/accommodation.jpg"
                    />
                  </div>
                  <div className="form-group">
                    <label>Booking URL</label>
                    <input
                      type="url"
                      value={accommodation.url}
                      onChange={(e) => updateAccommodation(index, 'url', e.target.value)}
                      placeholder="https://airbnb.com/example"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Activities Section */}
          <div className="form-section">
            <div className="section-header">
              <label>Activities & Attractions</label>
              <button 
                type="button" 
                className="btn-add" 
                onClick={addActivity}
              >
                <Plus size={16} />
                Add Activity
              </button>
            </div>
            
            {formData.activities.map((activity, index) => (
              <div key={activity.id} className="item-card">
                <div className="item-header">
                  <h4>Activity {index + 1}</h4>
                  <button 
                    type="button" 
                    className="btn-remove" 
                    onClick={() => removeActivity(index)}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={activity.name}
                      onChange={(e) => updateActivity(index, 'name', e.target.value)}
                      placeholder="e.g., Temple Tours"
                    />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="url"
                      value={activity.image}
                      onChange={(e) => updateActivity(index, 'image', e.target.value)}
                      placeholder="https://example.com/activity.jpg"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={activity.description}
                    onChange={(e) => updateActivity(index, 'description', e.target.value)}
                    placeholder="e.g., Visit ancient temples and learn about local culture"
                    rows="2"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Weather Section */}
          <div className="form-section">
            <div className="section-header">
              <label>Weather Information</label>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Day Temperature</label>
                <input
                  type="text"
                  value={formData.weather.day}
                  onChange={(e) => handleWeatherChange('day', e.target.value)}
                  placeholder="e.g., 28-32°C"
                />
              </div>
              <div className="form-group">
                <label>Evening Temperature</label>
                <input
                  type="text"
                  value={formData.weather.evening}
                  onChange={(e) => handleWeatherChange('evening', e.target.value)}
                  placeholder="e.g., 22-26°C"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Rain Chance</label>
                <input
                  type="text"
                  value={formData.weather.rainChance}
                  onChange={(e) => handleWeatherChange('rainChance', e.target.value)}
                  placeholder="e.g., 20%"
                />
              </div>
              <div className="form-group">
                <label>Weather Description</label>
                <input
                  type="text"
                  value={formData.weather.description}
                  onChange={(e) => handleWeatherChange('description', e.target.value)}
                  placeholder="e.g., Sunny with occasional showers"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes & Other</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g., Cultural experiences, beautiful beaches, affordable luxury"
              rows="3"
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <Save size={16} />
              {editingVacation ? 'Update' : 'Add'} Option
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddOptionModal 