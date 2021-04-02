import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {LeagueList} from './pages/league/LeagueList';
import {LeagueCalendar} from './pages/league/LeagueCalendar';
import {TeamList} from './pages/team/TeamList';
import {TeamCalendar} from './pages/team/TeamCalendar';

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Switch>
                    <Route path={'/league/list'} exact component={LeagueList} />
                    <Route path={'/league/calendar'} component={LeagueCalendar} />
                    <Route path={'/team/list'} component={TeamList} />
                    <Route path={'/team/calendar'} component={TeamCalendar} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
