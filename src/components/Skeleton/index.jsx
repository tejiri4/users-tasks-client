import './Skeleton.css'

import React from 'react'

export const Skeleton = ({ hideFirstRight }) => {
  return (
    <div className="skeleton-loading">
      <div>
        <div className="skeleton-loading__strip"></div>
        {!hideFirstRight  && <div className="skeleton-loading__strip"></div>}
      </div>
      <div>
        <div className="skeleton-loading__strip"></div>
        <div className="skeleton-loading__strip"></div>
      </div>
      <div>
        <div className="skeleton-loading__strip"></div>
        <div className="skeleton-loading__strip"></div>
      </div>
    </div>
  )
}

export const HeaderSkeleton = () => (
  <div className="skeleton-loading skeleton-header">
  </div>
)


