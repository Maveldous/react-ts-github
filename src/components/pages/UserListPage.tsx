import React, { useEffect } from "react";
import { useNavigate , useLocation } from "react-router";

import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import { useInput, InputInfo } from "../../hooks/useInput";
import { useSearch } from "../../hooks/useSearch";

import UserList from '../UserList';
import CInput from '../common/CInput';

import styles from "../../assets/scss/styles.module.scss";

const UserListPage = () => {
  const inputSearch: InputInfo = useInput('');
  const {query} = useTypedSelector(state => state.user)
  const {fetchUsers, setUsers} = useActions()

  const navigate = useNavigate();
  const location = useLocation();

  const debouncedFetch = useSearch({query, fetchCallback: fetchUsers, emptyCallback: setUsers}, []);

  const redirectToProfile = (name: string) => navigate(`/user/${name}`)

  useEffect(() => {
    debouncedFetch(inputSearch.value)
  }, [inputSearch.value, debouncedFetch])

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query') || '';
    inputSearch.setInputValue(query);
  }, [])

  return <div>
    <div className={styles.app__input}>
      <CInput
        {...inputSearch.bind}
        placeholder="Search for Users"
      />
    </div>
    <UserList onUserClick={redirectToProfile}/>
  </div>
}

export default UserListPage;