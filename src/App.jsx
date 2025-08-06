import React, { useState, useEffect } from 'react'
import { 
  MapPin, 
  Plane, 
  Home, 
  Mountain, 
  Sun, 
  DollarSign, 
  Plus, 
  Trash2,
  Edit3,
  Smartphone,
  Calendar,
  Car,
  FileText
} from 'lucide-react'
import VacationOption from './components/VacationOption'
import AddOptionModal from './components/AddOptionModal'
import MobileVacationViewer from './components/MobileVacationViewer'

const sampleVacations = [
  {
    id: 1,
    title: "Bali Paradise",
    subtitle: "Indonesia",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Bali, Indonesia",
    tripDates: "June 15-25, 2024",
    flightPrice: "$1,200",
    flightDuration: "18 hours",
    flightNotes: "1 layover in Singapore, departure 10:30 PM",
    accommodations: [
      {
        id: 1,
        name: "Luxury Villa with Private Pool",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        price: "$150/night",
        url: "https://airbnb.com/example1",
        selected: true
      },
      {
        id: 2,
        name: "Beachfront Resort",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        price: "$200/night",
        url: "https://booking.com/example2",
        selected: false
      }
    ],
    activities: [
      {
        id: 1,
        name: "Temple Tours",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Visit ancient temples and learn about Balinese culture"
      },
      {
        id: 2,
        name: "Beach Hopping",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Explore pristine beaches and crystal clear waters"
      },
      {
        id: 3,
        name: "Rice Terraces",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Hike through stunning rice terraces in the mountains"
      }
    ],
    weather: {
      day: "28-32°C",
      evening: "22-26°C",
      rainChance: "20%",
      description: "Sunny with occasional afternoon showers"
    },
    notes: "Cultural experiences, beautiful beaches, affordable luxury. Best time to visit is during dry season (April-October)."
  },
  {
    id: 2,
    title: "Swiss Alps Adventure",
    subtitle: "Switzerland",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Zermatt, Switzerland",
    tripDates: "December 20-30, 2024",
    flightPrice: "$1,800",
    flightDuration: "12 hours",
    flightNotes: "Direct flight, departure 2:15 PM",
    accommodations: [
      {
        id: 1,
        name: "Mountain Lodge with Alpine Views",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        price: "$300/night",
        url: "https://booking.com/example3",
        selected: true
      },
      {
        id: 2,
        name: "Cozy Chalet",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        price: "$250/night",
        url: "https://airbnb.com/example4",
        selected: false
      }
    ],
    activities: [
      {
        id: 1,
        name: "Skiing",
        image: "https://images.unsplash.com/photo-1551524164-4876eb6e32a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "World-class skiing on pristine mountain slopes"
      },
      {
        id: 2,
        name: "Hiking",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Scenic hiking trails with breathtaking views"
      },
      {
        id: 3,
        name: "Cable Car Rides",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Panoramic cable car rides to mountain peaks"
      }
    ],
    weather: {
      day: "5-15°C",
      evening: "-5-5°C",
      rainChance: "30%",
      description: "Cool with occasional snow showers"
    },
    notes: "Breathtaking mountain views, world-class skiing, charming villages. Peak skiing season is December to March."
  },
  {
    id: 3,
    title: "Greek Island Hopping",
    subtitle: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    location: "Santorini & Mykonos",
    tripDates: "September 10-20, 2024",
    flightPrice: "$1,500",
    flightDuration: "15 hours",
    flightNotes: "1 layover in London, departure 8:45 AM",
    accommodations: [
      {
        id: 1,
        name: "Cave Hotel with Caldera Views",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        price: "$400/night",
        url: "https://booking.com/example5",
        selected: true
      },
      {
        id: 2,
        name: "Beachfront Villa",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        price: "$350/night",
        url: "https://airbnb.com/example6",
        selected: false
      }
    ],
    activities: [
      {
        id: 1,
        name: "Island Tours",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Explore multiple islands and hidden beaches"
      },
      {
        id: 2,
        name: "Wine Tasting",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Sample local wines and traditional Greek cuisine"
      },
      {
        id: 3,
        name: "Sunset Cruises",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Romantic sunset cruises around the islands"
      }
    ],
    weather: {
      day: "25-30°C",
      evening: "18-22°C",
      rainChance: "10%",
      description: "Warm and sunny with clear skies"
    },
    notes: "Stunning sunsets, rich history, Mediterranean cuisine. Best time to visit is May to October for perfect weather."
  }
]

function App() {
  const [vacations, setVacations] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingVacation, setEditingVacation] = useState(null)
  const [showMobileViewer, setShowMobileViewer] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Load saved vacations from localStorage on component mount
  useEffect(() => {
    const savedVacations = localStorage.getItem('vacationOptions')
    if (savedVacations) {
      setVacations(JSON.parse(savedVacations))
    } else {
      // If no saved data, use sample data for first-time users
      setVacations(sampleVacations)
    }
  }, [])

  // Save vacations to localStorage whenever they change
  useEffect(() => {
    if (vacations.length > 0) {
      localStorage.setItem('vacationOptions', JSON.stringify(vacations))
    }
  }, [vacations])

  // Detect mobile device and auto-show mobile view
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
      if (mobile && vacations.length > 0) {
        setShowMobileViewer(true)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [vacations.length])

  const addVacation = (newVacation) => {
    const vacationWithId = {
      ...newVacation,
      id: Date.now()
    }
    setVacations([...vacations, vacationWithId])
    setShowAddModal(false)
  }

  const removeVacation = (id) => {
    setVacations(vacations.filter(v => v.id !== id))
  }

  const editVacation = (vacation) => {
    setEditingVacation(vacation)
    setShowAddModal(true)
  }

  const updateVacation = (updatedVacation) => {
    setVacations(vacations.map(v => 
      v.id === editingVacation.id ? updatedVacation : v
    ))
    setShowAddModal(false)
    setEditingVacation(null)
  }

  const toggleAccommodationSelection = (vacationId, accommodationId) => {
    setVacations(vacations.map(vacation => {
      if (vacation.id === vacationId) {
        return {
          ...vacation,
          accommodations: vacation.accommodations.map(acc => ({
            ...acc,
            selected: acc.id === accommodationId ? !acc.selected : false
          }))
        }
      }
      return vacation
    }))
  }

  const handleModalClose = () => {
    setShowAddModal(false)
    setEditingVacation(null)
  }

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all vacation options? This cannot be undone.')) {
      setVacations([])
      localStorage.removeItem('vacationOptions')
    }
  }

  const resetToSampleData = () => {
    if (window.confirm('Reset to sample vacation options? This will replace your current data.')) {
      setVacations(sampleVacations)
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Vacation Comparison</h1>
        <p>Compare your travel options and find the perfect destination</p>
      </header>

                  <div className="controls">
              <button
                className="btn btn-primary"
                onClick={() => setShowAddModal(true)}
              >
                <Plus size={18} />
                Add New Option
              </button>
              {vacations.length > 0 && (
                <button
                  className="btn"
                  onClick={() => setShowMobileViewer(true)}
                >
                  <Smartphone size={18} />
                  Mobile View
                </button>
              )}
              <div className="data-controls">
                <button
                  className="btn btn-secondary"
                  onClick={resetToSampleData}
                  title="Reset to sample vacation options"
                >
                  Reset to Samples
                </button>
                <button
                  className="btn btn-danger"
                  onClick={clearAllData}
                  title="Clear all vacation options"
                >
                  Clear All
                </button>
              </div>
            </div>

      {vacations.length === 0 ? (
        <div className="empty-state">
          <h3>No vacation options yet</h3>
          <p>Add your first vacation option to get started</p>
          <button 
            className="btn btn-primary" 
            onClick={() => setShowAddModal(true)}
          >
            <Plus size={18} />
            Add First Option
          </button>
        </div>
      ) : (
        <div className="comparison-grid">
          {vacations.map((vacation) => (
            <VacationOption
              key={vacation.id}
              vacation={vacation}
              onRemove={removeVacation}
              onEdit={editVacation}
              onToggleAccommodation={toggleAccommodationSelection}
            />
          ))}
        </div>
      )}

      {showAddModal && (
        <AddOptionModal
          onAdd={addVacation}
          onUpdate={updateVacation}
          onClose={handleModalClose}
          editingVacation={editingVacation}
        />
      )}

                   {showMobileViewer && (
               <MobileVacationViewer
                 vacations={vacations}
                 onClose={() => setShowMobileViewer(false)}
                 onEdit={editVacation}
                 onRemove={removeVacation}
                 onToggleAccommodation={toggleAccommodationSelection}
               />
             )}
    </div>
  )
}

export default App 