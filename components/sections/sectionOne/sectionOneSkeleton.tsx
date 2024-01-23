import { FC } from 'react'
import ContentLoader from 'react-content-loader'


export const SectionOneSkeleton: FC = () => (
  <ContentLoader
    width={980} // Increased width
    height={400}
    viewBox="0 0 980 400" // Adjusted viewBox
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
  >
    <rect x="5" y="11" rx="3" ry="3" width="10" height="383" />
    <rect x="8" y="385" rx="3" ry="3" width="934" height="10" />
    <rect x="936" y="12" rx="3" ry="3" width="9" height="379" />
    <rect x="76" y="56" rx="16" ry="16" width="383" height="288" />
    <rect x="574" y="150" rx="3" ry="3" width="143" height="9" />
    <rect x="561" y="121" rx="3" ry="3" width="249" height="8" />
    <rect x="566" y="185" rx="3" ry="3" width="249" height="8" />
    <rect x="581" y="216" rx="3" ry="3" width="143" height="9" />
    <rect x="566" y="252" rx="3" ry="3" width="249" height="8" />
    <rect x="6" y="11" rx="3" ry="3" width="934" height="9" />
    <rect x="567" y="297" rx="14" ry="14" width="100" height="43" />
    <rect x="706" y="299" rx="14" ry="14" width="100" height="43" />
    <rect x="526" y="55" rx="3" ry="3" width="323" height="39" />
  </ContentLoader>
)
