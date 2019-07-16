import React from 'react';

const Category = (props) => {

  const categories = props.searchHistory;

  let cats = [];

  for (let cat of categories) {
    //console.log(cat)
    if (!cats.includes(cat[1])){
      cats.push(cat[1]);
    }
  }

  let item = cats.map((item, i) => {
    //console.log(item);
    return(
        <option value={item} key={i}>{item}</option>
    )
});    

    return (<>
      <select id="categories" onChange={props.setCategory} >
        <option value="All Categories">All Categories</option>
        {item}
    </select>

        </>)
}

export default Category;


