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
      filteredHistory: null,
      recent: [],
      itemId: null,
      category: 'All Categories'
    } 
    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.setCurrentItem = this.setCurrentItem.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  
  componentDidMount() {

    this.seedSearch()

    document.addEventListener("setCurrentItem", (event)=> {
      console.log("setCurrentItem event works for searchbar")
    });

  }

  seedSearch() {
    axios.get('http://ec2-18-222-30-125.us-east-2.compute.amazonaws.com/getall')
    //axios.get('/getall')
      .then((response) => {
        //console.log('the respsonse.data is : ', response.data)
        let searchHistory = [];
        for (let packet of response.data) {
          if (packet.searchterm !== '')  {
            searchHistory.push([packet.searchterm, packet.category]);
          }
        }
      this.setState({ searchHistory })
      })

      .catch((error) => {
        console.log(error) //////GET RID OF ON THE CLIENT SIDE WHEN DONE!!!
      })
      .finally(()=>{
        console.log("good job team !!! :)")
      })
  } 

  submitSearch(event) {
    event.preventDefault();
    this.setState({ searchedTerm: this.state.searchingTerm })
    axios.post('http://ec2-18-222-30-125.us-east-2.compute.amazonaws.com/search', {
    //axios.post('/search', {
       searchedTerm: this.state.searchingTerm
    })
    .then((response) => {

      //console.log('the respsonse.data is : ', response.data)
      this.setState({ itemId: response.data[0].id - 1 })
      //alert(this.state.itemId);
      this.setCurrentItem(this.state.itemId);
      this.setState({ searchingTerm:'' });
      document.getElementById("input").value = '';
      //this.refs.input.value = '';
    })
    .catch(error => console.error('uhoh error : ', error))
    .finally(()=>{
      this.setState({ searchingTerm:'' });
      document.getElementById("input").value = '';
    })
  }

  handleChange (event) {
    this.setState({ searchingTerm : event.target.value })
    //console.log(this.state.searchingTerm);
  }

  setCurrentItem (id) {
    //console.log('setCurrentItem: ', Id);
    const itemId = {id}
    const detail = { detail: itemId };
    const event = new CustomEvent('setCurrentItem', detail);
    //console.log("the itemId is : ", this.state.itemId);
    document.dispatchEvent(event);
  }

  setCategory (event){
    this.setState({ category : event.target.value })
    //console.log(this.state.category);
    if ('All Categories' === this.state.category){
      this.seedSearch();
    }
    //axios.get('/getall')
    axios.get('http://ec2-18-222-30-125.us-east-2.compute.amazonaws.com/getall')
    .then((response) => {
      //console.log('the respsonse.data is : ', response.data)
      let filteredHistory = [];
      for (let packet of response.data) {
        if (packet.category === this.state.category)  {
          filteredHistory.push([packet.searchterm, packet.category]);
        }
      }
    this.setState({ filteredHistory })
    })

    .catch((error) => {
      console.log(error) //////GET RID OF ON THE CLIENT SIDE WHEN DONE!!!
    })
    .finally(()=>{
      this.setState({ searchingTerm:'' });
      document.getElementById("input").value = '';
    })

  }

  render () {
    return (<div>
      <List 
        searchHistory={this.state.searchHistory} 
        handleChange={this.handleChange}
        submitSearch={this.submitSearch}
        setCategory={this.setCategory}
        filteredHistory={this.state.filteredHistory}
        />
      </div>
    );
  }
}

export default SearchBar;