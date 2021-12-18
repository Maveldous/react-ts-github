import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { useInput, InputInfo } from "../../hooks/useInput";
import { useSearch } from "../../hooks/useSearch";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import Profile from "../Profile";
import RepositoryList from "../RepositoryList";
import CInput from '../common/CInput';

import { RespRepository } from "../../types/repository";

import styles from "../../assets/scss/styles.module.scss";

const ProfilePage = () => {
  const location = useLocation();
  const [searchResultRepos, setSearchResultRepos] = useState<RespRepository[] | null>(null)
  const inputSearch: InputInfo = useInput('');
  const {query, repositories} = useTypedSelector(state => state.repository)

  const getQuery = useCallback(() => new URLSearchParams(location.search).get('query') || '', [location.search])
  
  const setVisibleRepos = (input: string) => {
    if (repositories) {
      setSearchResultRepos(repositories.filter(item => item.name.includes(input)))
    }
  };
  const setAllRepos = () => { setSearchResultRepos(repositories); };

  const debouncedFetch = useSearch({fetchCallback: setVisibleRepos, emptyCallback: setAllRepos}, [repositories]);

  useEffect(() => {
    debouncedFetch(inputSearch.value, query)
  }, [inputSearch.value, repositories])

  useEffect(() => {
    inputSearch.setInputValue(getQuery());
  }, [])

  return (
    <div>
      <Profile />
      <div className={styles.app__input}>
        <CInput
          {...inputSearch.bind}
          placeholder="Search for User's Repositories"
        />
      </div>
      <RepositoryList visibleRepositories={searchResultRepos}/>
    </div>
  )
}

export default ProfilePage;