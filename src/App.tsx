import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserListPage from "./components/pages/UserListPage";
import ProfilePage from "./components/pages/ProfilePage";

import styles from "./assets/scss/styles.module.scss";

const App = () => {
    return (
      <div className={styles.app}>
        <div className={styles.app__container}>
          <header><h1 className={styles.app__header}>GitHub Searcher</h1></header>
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
        </div>
      </div>
    );
};

export default App;
