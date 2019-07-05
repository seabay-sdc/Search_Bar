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
      recent: []
    }  
    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }
  componentDidMount() {
    this.pingServer()
    this.submitSearch()
  }

  pingServer () {
    axios.get('/')
      .then((response) => {
        //console.log(response);
      })
      .catch((error) => {
        //console.log(error) //////GET RID OF ON THE CLIENT SIDE WHEN DONE!!!
      })
      .finally(()=>{
        console.log("succesfully got info from the database !!! :)")
      })
  }
  submitSearch() {
    this.setState({ searchedTerm: this.state.searchingTerm })

    axios.post('/search', {
       searchedTerm: this.state.searchingTerm
    })
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