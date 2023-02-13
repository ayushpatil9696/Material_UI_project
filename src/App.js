import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';

import Details from './components/details/Details'


const App = () => {
  return (
    <div>
      <Grid container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
          <Grid item xs={12} sm={4}>
              <Details/>
          </Grid>    
          <Grid item xs={12} sm={4}>
            Main
              <Details/>
          </Grid>    
          <Grid item xs={12} sm={4}>
              <Details/>
          </Grid>     
          
      </Grid>

    </div>
  )
}

export default App;
