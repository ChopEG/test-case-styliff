import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import routes from './routes';

export function App(): JSX.Element {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        ></Route>
      ))}
    </Switch>
  );
}
