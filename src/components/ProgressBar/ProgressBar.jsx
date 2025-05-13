import './ProgressBar.css'

export default function ProgressBar({ pageID, maxSteps = 5 }) {
  const totalBars = maxSteps + 1;

  return (
    <div className="progress-bar">
      {Array.from({ length: totalBars }, (_, i) => (
        <div className={`progress-bar__item ${i <= pageID ? 'filled' : 'empty'}`} />
      ))}
    </div>
  )
}
