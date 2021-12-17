import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserListPage from "./components/pages/UserListPage";
import ProfilePage from "./components/pages/ProfilePage";

const App = () => {
    return (
      <>
        <header><h1>GitHub Searcher</h1></header>
        <main role='main'>
          <Routes>
            <Route
              path="/"
              element={<UserListPage />}
            />

            <Route
              path="/user/:id"
              element={<ProfilePage />}
            />
          </Routes>
        </main>
      </>
    );
};

export default App;
