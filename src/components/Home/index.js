// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardDataList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    console.log(data)

    const collectedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardDataList: collectedData, isLoading: false})
  }

  render() {
    const {teamCardDataList, isLoading} = this.state
    return (
      <div className="ipl-app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <div>
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="list-container">
              {teamCardDataList.map(eachData => (
                <TeamCard key={eachData.id} teamCardDetails={eachData} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
