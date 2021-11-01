import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import routes from './routes';
import {Navigation} from './components/Navigation';
import {Box, Container} from '@mui/material';

export function App(): JSX.Element {
  return (
    <Container maxWidth={'md'}>
      <Box mb='30px'>
        <Navigation/>
      </Box>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/users' />
        </Route>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          ></Route>
        ))}
      </Switch>
    </Container>
  );
}
