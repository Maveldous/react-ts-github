import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { useInput, InputInfo } from "../../hooks/useInput";
import { useSearch } from "../../hooks/useSearch";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import Profile from "../Profile";
import RepositoryList from "../RepositoryList";
import CInput from '../common/CInput';

import { RespRepository } from "../../types/repository";

const ProfilePage = () => {
  const location = useLocation();
  const [searchResultRepos, setSearchResultRepos] = useState<RespRepository[] | null>([])
  const inputSearch: InputInfo = useInput('');
  const {query, repositories} = useTypedSelector(state => state.repository)

  const getQuery = useCallback(() => new URLSearchParams(location.search).get('query') || '', [location.search])
  
  const setVisibleRepos = (input: string) => {
    if (repositories) {
      setSearchResultRepos(repositories.filter(item => item.name.includes(input)))
    }
  };
  const setAllRepos = () => { setSearchResultRepos(repositories); };

  const debouncedFetch = useSearch({query: query || '', fetchCallback: setVisibleRepos, emptyCallback: setAllRepos}, [repositories]);

  useEffect(() => {
    if (getQuery() !== inputSearch.value) {
      debouncedFetch(inputSearch.value)
    } else {
      setVisibleRepos(inputSearch.value)
    }
  }, [inputSearch.value, repositories])

  useEffect(() => {
    inputSearch.setInputValue(getQuery());
  }, [])

  return (
    <div>
      <Profile />
      <hr />
      <CInput
        {...inputSearch.bind}
      />
      <RepositoryList visibleRepositories={searchResultRepos}/>
    </div>
  )
}

export default ProfilePage;