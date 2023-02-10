import React, { Profiler } from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

//Config page
import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { store } from './redux/configStore';
//Page
import UserTemplate from './template/UserTemplate';
import Home from './pages/Home/Home';
import RoomList from './pages/RoomList/RoomList';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';

// Global Css
import './assets/css/globals.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const history: any = createBrowserHistory();

root.render(
  <HistoryRouter history={history}>
    <Provider store={store}>
      <Routes>
        <Route path="" element={<UserTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='/roomlist' element={<RoomList />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Route>
      </Routes>
    </Provider>
  </HistoryRouter >
);

