import React from 'react';
const axios = require('axios');

class App extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    this.pingServer()
  }

  pingServer () {
    axios.get('/api/users')
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

  render () {
    return (<div>
      <h1>Whatchya want?</h1>
      <input type="text"></input>
      <button type="submit">Get it!</button>
      </div>
    );
  }
}

export default App;