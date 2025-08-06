import React from 'react'
import {
  MapPin,
  Plane,
  Home,
  Mountain,
  Sun,
  DollarSign,
  Trash2,
  Edit3,
  ExternalLink,
  Calendar,
  Clock,
  FileText,
  CloudRain
} from 'lucide-react'

const VacationOption = ({ vacation, onRemove, onEdit, onToggleAccommodation, isMobileView = false }) => {
  // Helper function to extract numeric values from price strings
  const extractNumber = (priceString) => {
    const match = priceString.match(/\$?([\d,]+)/)
    return match ? parseFloat(match[1].replace(/,/g, '')) : 0
  }

  // Calculate cost breakdown - always show, default to first accommodation if none selected
  const calculateCostBreakdown = () => {
    const selectedAccommodation = vacation.accommodations.find(acc => acc.selected) || vacation.accommodations[0]
    if (!selectedAccommodation || !vacation.accommodations.length) return null

    const flightCost = extractNumber(vacation.flightPrice)
    const accommodationCost = extractNumber(selectedAccommodation.price) * 10 // Assuming 10 nights
    
    return {
      flightCost,
      accommodationCost,
      selectedAccommodation,
      breakdown: [5, 6, 8, 9].map(people => ({
        people,
        costPerPerson: Math.round((accommodationCost / people) + flightCost)
      }))
    }
  }

  const costBreakdown = calculateCostBreakdown()

  return (
    <div className="option-card">
      <div className="option-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 className="option-title">{vacation.title}</h3>
            <p className="option-subtitle">{vacation.subtitle}</p>
          </div>
          {!isMobileView && (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={() => onEdit(vacation)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  color: '#667eea'
                }}
              >
                <Edit3 size={16} />
              </button>
              <button 
                onClick={() => onRemove(vacation.id)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  color: '#e53e3e'
                }}
              >
                <Trash2 size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      <img 
        src={vacation.image} 
        alt={vacation.title}
        className="option-image"
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        }}
      />

      <div className="details-grid">
        <div className="detail-item">
          <MapPin className="detail-icon" />
          <div className="detail-content">
            <div className="detail-label">Location</div>
            <div className="detail-value">{vacation.location}</div>
          </div>
        </div>

        <div className="detail-item">
          <Calendar className="detail-icon" />
          <div className="detail-content">
            <div className="detail-label">Trip Dates</div>
            <div className="detail-value">{vacation.tripDates}</div>
          </div>
        </div>

        <div className="detail-item">
          <Home className="detail-icon" />
          <div className="detail-content">
            <div className="detail-label">Accommodation Ideas</div>
            <div className="accommodations-grid">
              {vacation.accommodations?.map((accommodation) => (
                <div 
                  key={accommodation.id} 
                  className={`accommodation-card ${accommodation.selected ? 'selected' : ''}`}
                  onClick={() => onToggleAccommodation(vacation.id, accommodation.id)}
                >
                  <img 
                    src={accommodation.image} 
                    alt={accommodation.name}
                    className="accommodation-thumbnail"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                    }}
                  />
                  <div className="accommodation-info">
                    <div className="accommodation-name">{accommodation.name}</div>
                    <div className="accommodation-price">{accommodation.price}</div>
                    {accommodation.url && (
                      <a 
                        href={accommodation.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="accommodation-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={12} />
                        View Details
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-item">
          <Plane className="detail-icon" />
          <div className="detail-content">
            <div className="detail-label">Estimated Flight Price (Economy)</div>
            <div className="detail-value price">{vacation.flightPrice}</div>
            {vacation.flightDuration && (
              <div className="flight-details">
                <div className="flight-duration">
                  <Clock size={14} />
                  {vacation.flightDuration}
                </div>
                {vacation.flightNotes && (
                  <div className="flight-notes">{vacation.flightNotes}</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Cost Breakdown - Always Display */}
        {costBreakdown && (
          <div className="detail-item">
            <DollarSign className="detail-icon" />
            <div className="detail-content">
              <div className="detail-label">Estimated Cost Per Person</div>
              <div className="cost-breakdown">
                <div className="breakdown-grid">
                  {costBreakdown.breakdown.map(({ people, costPerPerson }) => (
                    <div key={people} className="breakdown-item">
                      <span className="people-count">{people} people:</span>
                      <span className="per-person-cost">${costPerPerson}/person</span>
                    </div>
                  ))}
                </div>
                <div className="breakdown-details">
                  <div>Flight: ${costBreakdown.flightCost} (per person)</div>
                  <div>Accommodation (10 nights): ${costBreakdown.accommodationCost}</div>
                  <div className="cost-note">+ Other cost considerations (car rental, food, etc.)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="detail-item">
          <Mountain className="detail-icon" />
          <div className="detail-content">
            <div className="detail-label">Activities & Attractions</div>
            <div className="activities-grid">
              {vacation.activities?.map((activity) => (
                <div key={activity.id} className="activity-card">
                  <img 
                    src={activity.image} 
                    alt={activity.name}
                    className="activity-thumbnail"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                    }}
                  />
                  <div className="activity-info">
                    <div className="activity-name">{activity.name}</div>
                    <div className="activity-description">{activity.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-item">
          <Sun className="detail-icon" />
          <div className="detail-content">
            <div className="detail-label">Weather</div>
            <div className="weather-details">
              <div className="weather-row">
                <span className="weather-label">Day:</span>
                <span className="weather-value">{vacation.weather.day}</span>
              </div>
              <div className="weather-row">
                <span className="weather-label">Evening:</span>
                <span className="weather-value">{vacation.weather.evening}</span>
              </div>
              <div className="weather-row">
                <CloudRain className="weather-icon" size={14} />
                <span className="weather-label">Rain chance:</span>
                <span className="weather-value">{vacation.weather.rainChance}</span>
              </div>
              <div className="weather-description">{vacation.weather.description}</div>
            </div>
          </div>
        </div>

        <div className="detail-item">
          <FileText className="detail-icon" />
          <div className="detail-content">
            <div className="detail-label">Notes & Other</div>
            <div className="detail-value">{vacation.notes}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VacationOption 