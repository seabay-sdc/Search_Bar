import React from 'react';
import Category from './Category.jsx';

const List = props => {
    let history = props.searchHistory;


    const item = history.map((item, i) => {
      return(
          <option value={item} key={i}/>
      )
  });    

    return (
    <form>
      <input list="things"  onChange={props.handleChange} />
      <datalist id="things">
        {item}
      </datalist> 
      <Category />
      <button type="submit" onClick={props.submitSearch}>Get it!</button>
    </form>)
 // }
}

export default List;

