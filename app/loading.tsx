import React from 'react'
import ContentLoader from 'react-content-loader'


const LoadingSkeleton = () => {
  return (
    <ContentLoader
      viewBox="0 0 500 500"
      height={340}
      width={340}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="10" rx="10" ry="10" width="480" height="480" />
      <ellipse cx="250" cy="250" rx="100" ry="100" />
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
