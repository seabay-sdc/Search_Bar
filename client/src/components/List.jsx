import React from 'react';
import Category from './Category.jsx';

import { Button }  from '@material-ui/core';

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
  @media screen and (min-width: 420px) {
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

   #bigBtn {
      background-color: #0065D2; 
      color: white;
      font-size: .8rem;
      text-align: center;
      height: 45px;
      align-self: center;
      padding: 0px 9px;
    }

    #smallBtn {
      display: none;
    }


    .flex-container {
      display: flex;
    
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
      font: 400 20px system-ui;
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

  .inputField {
    height: 40px;
    fontsize 2.5em;
    order: 0;
    flex: 3 3 auto;
    align-self: center;
  }

  div {
    padding: 0;
  }
}

@media screen and (max-width: 420px) {
  .btn-flat {
    background-color: purple;
    background-color: #3665f3;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    // height: 45px;
    align-self: center;
    padding: 0px 9px;
    min-width: 1px;
  }

  #smallBtn {
    background-color: #0065D2;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    height: 45px;
    align-self: center;
    padding: 0px 0px;
    order: 4;
    width: 2%;
    min-width: 45px;
    max-width: 45px;
    flex: 1 0 1%;
  }

  #bigBtn {
    display: none;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    }

.flex-item:nth-child(1) {
    width: 25%;
    order: 2;
    flex: 0 1 auto;
    align-self: center;
    }

.flex-item:nth-child(2) {
    height: 40px;
    fontsize 1em;
    order: 0;
    flex: 1 0 90%;
    align-self: center;
    font: 400 20px system-ui;
    }

.flex-item:nth-child(3) {

    order: 9;
    flex: 0 1 auto;
    align-self: center;
    }

.flex-item:nth-child(4) {
    height: 2em;
    order: 0;
    flex: 0 1 auto;
    align-self: center;
    }

#categories {
  height : 45px;
  align-self: center;
  order: 3;
  width: 50%;
  font-size: 1rem;
  flex: 1 0 1%;
}

.inputField {
  height: 40px;
  fontsize 2.5em;
  order: 0;
  flex: 12 12 auto;
  align-self: center;
}

div {
  padding: 0;
}
}

  }

    `}
  </style>

    <form className="flex-container" onSubmit={props.submitSearch} action={props.submitSearch}>
      <img src="https://seabay-logo.s3.us-east-2.amazonaws.com/New+Project+(1).png" className="flex-item"/>
      <input id="input" list="things"  placeholder="&#128269; Search for anything" onChange={props.handleChange} className="flex-item" type="search" onsearch={props.submitSearch}/>
      <datalist id="things">
        {item}
      </datalist> 
      <Category className="flex-item" 
        searchHistory={props.searchHistory}
        setCategory={props.setCategory}/>

      <Button id="smallBtn" variant="contained" onClick={props.submitSearch} className="flex-item">
        &#128269;
      </Button>

      <Button id="bigBtn" variant="contained" onClick={props.submitSearch} className="flex-item">
        Search
      </Button>

    </form>


    </>)

}

export default List;










