import type { Copy } from '../content'

type Props = { copy: Copy }

const useKeys = ['aiUseOne', 'aiUseTwo', 'aiUseThree', 'aiUseFour', 'aiUseFive'] as const

export function AISection({ copy }: Props) {
  return (
    <section className="ai" id="ai" aria-labelledby="ai-title">
      <div className="page-container ai-grid">
        <div className="ai-copy">
          <div className="eyebrow">{copy.aiLabel}</div>
          <h2 id="ai-title"><span>{copy.aiOne}</span><br /><span>{copy.aiTwo}</span></h2>
          <p>{copy.aiBody}</p>
          <div className="ai-uses">{useKeys.map(key => <span key={key}>{copy[key]}</span>)}</div>
        </div>
        <div className="terminal motion-scene" aria-hidden="true">
          <div className="terminal-top"><i /><i /><i /><span>{copy.terminalTop}</span></div>
          <div className="terminal-body">
            <span className="prompt">&gt;_</span>{' '}<span className="question">{copy.terminalQuestion}</span>
            <div className="terminal-result"><b>{copy.terminalLabel}</b><br /><span>{copy.terminalResult}</span></div>
            <br /><span className="prompt">&gt;_</span>{' '}<span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </section>
  )
}
