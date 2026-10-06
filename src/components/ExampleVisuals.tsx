import type { Copy } from '../content'

type Props = { copy: Copy }

const stockRows = [
  { name: 'workMockTomato', amount: '86 kg' },
  { name: 'workMockOrange', amount: '124 kg' },
  { name: 'workMockApple', amount: '62 kg' },
] as const
const barHeights = ['39%', '62%', '48%', '74%', '56%', '85%', '100%'] as const

function MockBrowserTop({ label }: { label: string }) {
  return <div className="mini-top"><i /><i /><i /><b>{label}</b></div>
}

export function InventoryArt({ copy }: Props) {
  return (
    <div className="work-art inventory" aria-hidden="true">
      <div className="mini-panel">
        <MockBrowserTop label="STOCK / EJEMPLO" />
        <div className="mini-body">
          <div className="mini-label">{copy.workMockStock}</div>
          <div className="mini-sub">{copy.workMockLocations}</div>
          <div className="stock-rows">
            {stockRows.map(row => (
              <div className="stock-row" key={row.name}>
                <span /><span className="stock-name">{copy[row.name]}</span><small>{row.amount}</small><em />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="query-chip"><span>✳ AI</span>{'  '}<span>{copy.workMockAsk}</span></div>
    </div>
  )
}

export function ProfilesArt({ copy }: Props) {
  return (
    <div className="work-art profiles" aria-hidden="true">
      <div className="mini-panel">
        <div className="profile-topline"><svg className="brand-mark"><use href="#mark" /></svg><div /></div>
        <div className="mini-body">
          <div className="profile-header"><div className="avatar" /><div className="profile-heading"><i /><i /></div></div>
          <div className="profile-blurb"><span /><span /><span /></div>
          <div className="profile-action">{copy.workMockContact}</div>
        </div>
      </div>
    </div>
  )
}

export function AnalyticsArt({ copy }: Props) {
  return (
    <div className="work-art analytics" aria-hidden="true">
      <div className="mini-panel">
        <MockBrowserTop label="ANALYTICS" />
        <div className="mini-body">
          <div className="mini-label">{copy.workMockOverview}</div>
          <div className="mini-sub">{copy.workMockInsights}</div>
          <div className="analytics-metrics">
            <span><i />$248.6k</span><span><i />+18.2%</span><span><i />1,284</span>
          </div>
          <div className="bars">{barHeights.map((height, index) => <b key={index} style={{ height }} />)}</div>
        </div>
      </div>
    </div>
  )
}

