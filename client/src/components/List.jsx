import React from 'react';
import Category from './Category.jsx';
import { Button } from 'react-bootstrap';

const List = props => {
    let history;
    if (props.filteredHistory === null || props.filteredHistory.length === 0) {
      history = props.searchHistory;
    } else {
      history = props.filteredHistory;
    }

    const item = history.map((item, i) => {
      return(
          <option value={item[0]} key={i}/>
      )
  });    

    return (<>

<style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      background-color: #3665f3;
      color: white;
      font-size: .8rem;
      text-align: center;
      height: 45px;
      align-self: center;
      padding: 0px 9px;
    }


    .flex-container {
      display: flex;
      margin: 0px 50px;
      }
  
  .flex-item:nth-child(1) {
      width: 100px;
      order: 0;
      flex: 1 ;
      align-self: center;
      }
  
  .flex-item:nth-child(2) {
      height: 40px;
      fontsize 2.5em;
      order: 0;
      flex: 3 3 auto;
      align-self: center;
      }
  
  .flex-item:nth-child(3) {

      order: 0;
      flex: 3 3 auto;
      align-self: center;
      }
  
  .flex-item:nth-child(4) {
      height: 2em;
      order: 0;
      flex: 3 3 auto;
      align-self: center;
      }

  #categories {
    height : 45px;
    align-self: center;
  }

    `}
  </style>

    <form className="flex-container">
      <img src="https://seabay-logo.s3.us-east-2.amazonaws.com/New+Project+(1).png" className="flex-item"/>
      <input list="things"  placeholder="Search for anything" onChange={props.handleChange} className="flex-item"/>
      <datalist id="things" className="flex-item">
        {item}
      </datalist> 
      <Category className="flex-item" 
        searchHistory={props.searchHistory}
        setCategory={props.setCategory}/>
      <Button variant="flat" type="submit" onClick={props.submitSearch} className="flex-item">
        Search
      </Button>
    </form>
    </>)

}

export default List;

