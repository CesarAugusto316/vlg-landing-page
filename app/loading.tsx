import React from 'react'
import ContentLoader from 'react-content-loader'


const LoadingSkeleton = () => {
  return (
    <ContentLoader
      viewBox="0 0 980 400" // Increased viewBox to accommodate larger circle
      width={980} // Increased width to accommodate larger circle
      height={400} // Increased height to accommodate larger circle
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="490" cy="160" r="140" />
      <rect x="270" y="342" rx="20" ry="20" width="170" height="50" />
      <rect x="540" y="342" rx="20" ry="20" width="170" height="50" />
    </ContentLoader>
  )
}

export default function Loading(): JSX.Element {
  return (
    <div style={{ height: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <LoadingSkeleton />
    </div>
  )
}
