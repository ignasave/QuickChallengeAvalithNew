import Box from './styled'
import BreedDetail from '../BreedDetail';
import List from '../List'
import Header from '../Header'
import PageNotFound from '../../components/PageNotFound'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const App = () => (
  <Box>
    <Header></Header>
    <main>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/breeds/:breed" component={BreedDetail} />
        <Route component={PageNotFound}></Route>
      </Switch>
    </main>
  </Box>
)

export default App
