import { useSaved } from '../lib/saved'
import { track } from '../lib/track'

export function SaveButton({ id, name, compact }: { id: string; name: string; compact?: boolean }) {
  const { has, toggle } = useSaved()
  const on = has(id)
  return (
    <button type="button" className={`save${on ? ' on' : ''}${compact ? ' compact' : ''}`} aria-pressed={on} aria-label={`${on ? 'Remove' : 'Save'} ${name}${on ? ' from' : ' to'} saved places`} onClick={(e) => { e.preventDefault(); e.stopPropagation(); track(on ? 'unsave_place' : 'save_place', { place_id: id }); toggle(id) }}>
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z" fill={on ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
      {compact ? null : <span>{on ? 'Saved' : 'Save'}</span>}
    </button>
  )
}
