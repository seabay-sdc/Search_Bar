import React from 'react';
import List from './List.jsx';
const axios = require('axios');

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchingTerm: '',
      searchedTerm: '',
      searchHistory: [],
      recent: [],
      itemId: null
    } 
    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }
  componentDidMount() {
    console.log('pinging')
    this.pingServer()
    this.seedHistory()
  }

  pingServer () {
    axios.get('/')
      .then((response) => {
        console.log("response is : ", response);
      })
      .catch((error) => {
        console.log(error) //////GET RID OF ON THE CLIENT SIDE WHEN DONE!!!
      })
      .finally(()=>{
        console.log("succesfully pinged the server !!! :)")
      })
  }

  seedHistory() {
    axios.get('/getall')
      .then((response) => {
        console.log('the respsonse.data is : ', response.data)
        let searchHistory = [];
        for (let packet of response.data) {
          if (packet.searchterm !== '')  {
            searchHistory.push(packet.searchterm);
          }
        }
      console.log(searchHistory);
      this.setState({ searchHistory })
      })
      .catch((error) => {
        //console.log(error) //////GET RID OF ON THE CLIENT SIDE WHEN DONE!!!
      })
      .finally(()=>{
        console.log("succesfully got info from the database !!! :)")
      })
  } 

  submitSearch(event) {
    event.preventDefault();
    this.setState({ searchedTerm: this.state.searchingTerm })

    axios.post('/search', {
       searchedTerm: this.state.searchingTerm
    })
    .then((response) => {
      console.log('the respsonse.data is : ', response.data[0].id)
      this.setState({ itemId: response.data[0].id })
      alert(this.state.itemId)
    
  })
    .catch(error => console.error('uhoh error : ', error))
  }

  handleChange (event) {
    this.setState({ searchingTerm : event.target.value })
    console.log(this.state.searchingTerm);
  }

  render () {
    return (<div>
      <h1>Whatchya want?</h1>
      <List 
        searchHistory={this.state.searchHistory} 
        handleChange={this.handleChange}
        submitSearch={this.submitSearch}/>
      </div>
    );
  }
}

export default SearchBar;