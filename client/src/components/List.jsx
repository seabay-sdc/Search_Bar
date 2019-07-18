import React from 'react';
import Category from './Category.jsx';
// import { Button } from 'react-bootstrap';
import { Button, Grid, Paper, Hidden, Input, Select, FormControl, InputLabel }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

  const materialItem = history.map((item, i) => {
    return(
        <option value={item[0]} key={i}>{item[0]}</option>
    )
});   

console.log(materialItem);

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

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

  .paper {
    textAlign: center;
    flex: 1 0 auto;
  }

  .container {
    flexGrow: 1;
    display: flex;
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
    flex: 1 0 100%;
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

.paper {
  textAlign: center;
  flex: 1 0 auto;
}

.container {
  flexGrow: 1;
  display: flex;
}
div {
  padding: 0;
}
}

  }

    `}
  </style>

    <form className="flex-container">
      <img src="https://seabay-logo.s3.us-east-2.amazonaws.com/New+Project+(1).png" className="flex-item"/>
      <input id="input" list="things"  placeholder="&#128269; Search for anything" onChange={props.handleChange} className="flex-item"/>
      {/* <datalist id="things" className="flex-item"> */}
      <datalist id="things">
        {item}
      </datalist> 
      <Category className="flex-item" 
        searchHistory={props.searchHistory}
        setCategory={props.setCategory}/>
      {/* <Button variant="flat" type="submit" onClick={props.submitSearch} className="flex-item">
        Search
      </Button> */}

      <Button id="smallBtn" variant="contained" onClick={props.submitSearch} className="flex-item">
        &#128269;
      </Button>

      <Button id="bigBtn" variant="contained" onClick={props.submitSearch} className="flex-item">
        Search
      </Button>

    </form>

    {/* <div className="container">
      <Grid container className="container" spacing={0}>

        <Hidden xsDown>
        <Grid item sm={3} className='paper'>
          <img src="https://seabay-logo.s3.us-east-2.amazonaws.com/New+Project+(1).png" className="flex-item"/>
        </Grid>
        </Hidden>

        <Grid item xs={12} sm={3} className="inputField" >
          <input id="input" list="things"  placeholder="&#128269; Search for anything" onChange={props.handleChange} className="flex-item"/>
          <datalist id="things" className="flex-item">
            {item}
          </datalist> 
        </Grid>

        <Grid item xs={10} sm={3} className='paper'>
          <Category className="flex-item" 
            searchHistory={props.searchHistory}
            setCategory={props.setCategory}/>
        </Grid>

        <Hidden xsDown>
        <Grid item sm={3} className='paper'>
          <Button id="btn" variant="contained" onClick={props.submitSearch} className="flex-item">
            Search
           </Button>
        </Grid>
        </Hidden>

        <Hidden smUp>
        <Grid item xs={2} className='paper'>
          <Button id="btn" variant="contained" onClick={props.submitSearch} className="flex-item">
            &#128269;
           </Button>
        </Grid>
        </Hidden>

      </Grid>
    </div> */}

    <div className={classes.root}>
      <Hidden xsDown>
      <Grid container spacing={0}>
        <Grid item xs={2} className={classes.paper}>
          <img src="https://seabay-logo.s3.us-east-2.amazonaws.com/New+Project+(1).png" className="flex-item"/>
        </Grid>

        <Grid item xs={4} className={classes.paper}>
          {/* <input id="input" list="things"  placeholder="&#128269; Search for anything" onChange={props.handleChange} className="flex-item" /> */}
          <Input  list="things"  placeholder="&#128269; Search for anything" onChange={props.handleChange} />
          <datalist id="things" className="flex-item">
           {item}
          </datalist> 
        </Grid>

        <Grid item xs={4}  className={classes.paper} >
          <Category className="flex-item" 
            searchHistory={props.searchHistory}
            setCategory={props.setCategory}/>
        </Grid>

        <Grid item xs={2} className={classes.paper} >
        <Button id="btn" variant="contained" onClick={props.submitSearch} className="flex-item">
            &#128269; Search
           </Button>
        </Grid>
      </Grid>
    </Hidden>

    {/* <Hidden smUp>
        <Grid item xs={12} className={classes.paper}>
          <input id="input" list="things"  placeholder="&#128269; Search for anything" onChange={props.handleChange} className="flex-item" />
          <datalist id="things" className="flex-item">
           {item}
          </datalist> 
        </Grid>

      <Grid container spacing={3}>
        <Grid item xs={2} className={classes.paper}>
          <img src="https://seabay-logo.s3.us-east-2.amazonaws.com/New+Project+(1).png" className="flex-item"/>
        </Grid>

        <Grid item xs={6}  className={classes.paper}>
          <Category className="flex-item" 
            searchHistory={props.searchHistory}
            setCategory={props.setCategory}/>
        </Grid>

        <Grid item xs={3} className={classes.paper}>
        <Button id="btn" variant="contained" onClick={props.submitSearch} className="flex-item">
            &#128269;
           </Button>
        </Grid>
      </Grid>
    </Hidden> */}
    </div>

    <div>
    {/* <Grid container spacing={0}>
    <Grid item xs={6}  className={classes.paper}>
    <Select
          classes={useStyles()}
          placeholder="Search a country (start with a)"
          options={materialItem}
          value='cats'
        >
        {materialItem}
          </Select>
        </Grid>
    </Grid> */}

    {/* <FormControl className={classes.formControl} required >
                                        <InputLabel htmlFor="name">Name</InputLabel>
                                        <Select
                                            native
                                            required
                                            // value={this.state.name}
                                            // onChange={this.handleChange}
                                            inputProps={{
                                                name: 'name',
                                                id: 'name'
                                            }}
                                        >
                                          {materialItem}
                                            <option value="" />
                                            <option value={"lala"}>lala</option>
                                            <option value={"lolo"}>lolo</option>
                                        </Select>
 </FormControl> */}

    </div>
    </>)

}

export default List;










