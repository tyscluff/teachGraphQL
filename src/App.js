import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import TopTweetsPage from './components/topTweets/TopTweetsPage';
import ViewUsersPage from './components/viewUsers/ViewUsersPage';
import UserPage from './components/user/UserPage';
import CreateUserPage from './components/createUser/CreateUserPage';

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Router>
        <Header />
        <div style={{ marginTop: "75px" }}>
          <Routes>
            <Route path="/*" element={<TopTweetsPage />} />
            <Route path="/users" element={<ViewUsersPage />} />
            <Route path="/createUser" element={<CreateUserPage />} />
            <Route path="/user/:id" element={<UserPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;