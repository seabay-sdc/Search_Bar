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
    this.setCurrentItem = this.setCurrentItem.bind(this);
  }
  componentDidMount() {

    this.seedSearch()

    document.addEventListener("setCurrentItem", (event)=> {
      console.log("event works")
    });

  }

  seedSearch() {
    axios.get('http://ec2-18-222-30-125.us-east-2.compute.amazonaws.com/getall')
      .then((response) => {
        //console.log('the respsonse.data is : ', response.data)
        let searchHistory = [];
        for (let packet of response.data) {
          if (packet.searchterm !== '')  {
            searchHistory.push(packet.searchterm);
          }
        }
      this.setState({ searchHistory })
      })

      .catch((error) => {
        console.log(error) //////GET RID OF ON THE CLIENT SIDE WHEN DONE!!!
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
      this.setState({ itemId: response.data[0].id - 1 })
      alert(this.state.itemId);
      this.setCurrentItem(this.state.itemId);
    })
    .catch(error => console.error('uhoh error : ', error))
  }

  handleChange (event) {
    this.setState({ searchingTerm : event.target.value })
    console.log(this.state.searchingTerm);
  }

  setCurrentItem (id) {
    console.log('setCurrentItem: ', id);
    const detail = { detail: id };
    const event = new CustomEvent('setCurrentItem', detail);
    console.log("the itemId is : ", this.state.itemId);
    document.dispatchEvent(event);
  }

  render () {
    return (<div>
      <List 
        searchHistory={this.state.searchHistory} 
        handleChange={this.handleChange}
        submitSearch={this.submitSearch}/>
      </div>
    );
  }
}

export default SearchBar;