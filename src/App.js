
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LeandingPage from './components/LeandingPage';
import CreateEvent from './components/CreateEvent';
import EventPage from './components/EventPage';

function App() {
  return (
    <div >
      <Routes>
        <Route index element={<LeandingPage />} ></Route>
        <Route path='/create' element={<CreateEvent></CreateEvent>}></Route>
        <Route path='/event' element={<EventPage></EventPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
