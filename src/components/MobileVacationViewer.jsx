import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X, Share2 } from 'lucide-react'
import VacationOption from './VacationOption'
import './MobileVacationViewer.css'

const MobileVacationViewer = ({ vacations, onClose, onEdit, onRemove, onToggleAccommodation, isSharedLink = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const containerRef = useRef(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < vacations.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goToNext = () => {
    if (currentIndex < vacations.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const shareVacation = async () => {
    const vacation = vacations[currentIndex]
    const shareText = `Check out this vacation option: ${vacation.title} - ${vacation.location}`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: vacation.title,
          text: shareText,
          url: window.location.href
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(shareText)
      alert('Vacation details copied to clipboard!')
    }
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === 'Escape' && !isSharedLink) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [currentIndex])

  if (vacations.length === 0) return null

  const currentVacation = vacations[currentIndex]

  return (
    <div className="mobile-viewer-overlay">
      <div 
        className="mobile-viewer-container"
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Header */}
        <div className="mobile-viewer-header">
          {!isSharedLink && (
            <button className="mobile-viewer-close" onClick={onClose}>
              <X size={24} />
            </button>
          )}
          <div className="mobile-viewer-title">
            {currentVacation.title}
          </div>
          <button className="mobile-viewer-share" onClick={shareVacation}>
            <Share2 size={20} />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="mobile-viewer-progress">
          <div className="progress-dots">
            {vacations.map((_, index) => (
              <div
                key={index}
                className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <div className="progress-text">
            {currentIndex + 1} of {vacations.length}
          </div>
        </div>

        {/* Vacation content */}
        <div className="mobile-viewer-content">
          <VacationOption
            vacation={currentVacation}
            onRemove={onRemove}
            onEdit={onEdit}
            onToggleAccommodation={onToggleAccommodation}
            isMobileView={true}
          />
        </div>

        {/* Navigation arrows */}
        {currentIndex > 0 && (
          <button 
            className="mobile-nav-button mobile-nav-prev"
            onClick={goToPrevious}
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        {currentIndex < vacations.length - 1 && (
          <button 
            className="mobile-nav-button mobile-nav-next"
            onClick={goToNext}
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Swipe hints */}
        <div className="swipe-hints">
          <div className="swipe-hint">
            <span>Swipe left/right to navigate</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileVacationViewer 