import React from 'react';

export default function StatusBadge({ isAccepting }: { isAccepting: boolean }) {
  return (
    <div className="status-badge">
      <span className={`indicator-dot ${isAccepting ? 'active' : 'busy'}`}></span>
      <span className="status-label">
        {isAccepting ? 'Accepting New Students' : 'Studio Currently Full'}
      </span>
    </div>
  );
}