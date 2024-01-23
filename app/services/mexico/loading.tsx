import { SectionOneSkeleton } from '@/components/index';


export default function Loading(): JSX.Element {
  return (
    <div style={{ height: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <SectionOneSkeleton />
    </div>
  )
}
