import React from 'react';
import Category from './Category.jsx';
import { Button } from 'react-bootstrap';

const List = props => {
    let history = props.searchHistory;

    const item = history.map((item, i) => {
      return(
          <option value={item} key={i}/>
      )
  });    

    return (<>

<style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      background-color: #3665f3;
      color: white;
    }

    .btn-lg {
      padding: 1rem 1.5rem;
      font-size: 1rem;
    }

    .flex-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: stretch;
      align-items: center;
      }
  
  .flex-item:nth-child(1) {
      width: 100px;
      order: 0;
      flex: 1 1 auto;
      align-self: center;
      }
  
  .flex-item:nth-child(2) {
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
      order: 0;
      flex: 3 3 auto;
      align-self: center;
      }

    `}
  </style>

    <form class="flex-container">
      <img src={'./smallseabay.png'} className="flex-item"/>
      <input list="things"  placeholder="Search for anything" onChange={props.handleChange} className="flex-item"/>
      <datalist id="things" className="flex-item">
        {item}
      </datalist> 
      <Category className="flex-item"/>
      <Button variant="flat" size="sm" type="submit" onClick={props.submitSearch} className="flex-item">
        Search
      </Button>
    </form>
    </>)

}

export default List;

