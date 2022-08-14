import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  const location = useLocation();
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Login} />
        </Switch>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
