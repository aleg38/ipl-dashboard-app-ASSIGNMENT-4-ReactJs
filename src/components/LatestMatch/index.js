// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="main-latest-match">
      <h1 className="latest-match">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-matches-logo-containers">
          <div className="latest-match-details-1">
            <p className="latest-team-name">{competingTeam}</p>
            <p className="latest-team-date">{date}</p>
            <p className="latest-team-details">{venue}</p>
            <p className="latest-team-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="team-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="line" />
        <div className="latest-match-details-2">
          <p className="latest-match-label">First Innings</p>
          <p className="latest-match-value">{firstInnings}</p>
          <p className="latest-match-label">Second Innings</p>
          <p className="latest-match-value">{secondInnings}</p>
          <p className="latest-match-label">Man Of The Match</p>
          <p className="latest-match-value">{manOfTheMatch}</p>
          <p className="latest-match-label">Umpires</p>
          <p className="latest-match-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
