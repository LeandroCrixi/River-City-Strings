import React, { useState } from 'react'

interface Props {
  hourlyRate: number
  fortyFiveRate: number
  thirtyRate: number
}

export default function TuitionCalculator({ hourlyRate, fortyFiveRate, thirtyRate }: Props) {
  const [lessons, setLessons] = useState(4);
  const [rate, setRate] = useState(hourlyRate);

  const total = lessons * rate

  return (
    <div className="calcContainer">
      <h4 className="calcTitle">Monthly Tuition Estimator</h4>

      <div className="inputGroup">
        <label htmlFor="length">Lesson Length</label>
        <select
          id="length"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        >
          <option value={hourlyRate}>60 Minutes (${hourlyRate})</option>
          <option value={fortyFiveRate}>45 Minutes (${fortyFiveRate})</option>
          <option value={thirtyRate}>30 Minutes (${thirtyRate})</option>
        </select>
      </div>

      <div className="inputGroup">
        <label htmlFor="quantity">Lessons per Month</label>
        <input
          id="quantity"
          type="number"
          min="1"
          max="20"
          value={lessons}
          onChange={(e) => setLessons(Number(e.target.value))}
        />
      </div>

      <div className="totalDisplay">
        <span>Estimated Monthly Total:</span>
        <span className="price">${total}</span>
      </div>

      <p className="disclaimer">
        *Rates based on current standard pricing for Cascade Township.
      </p>
    </div>
  )
}
