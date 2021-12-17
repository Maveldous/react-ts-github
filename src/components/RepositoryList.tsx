import React, { createElement, useEffect } from "react";

import { useParams } from "react-router-dom"
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

import { RespRepository } from "../types/repository";

interface RepositoryListProps {
  visibleRepositories: null | RespRepository[],
}

const RepositoryList: React.FC<RepositoryListProps> = ({visibleRepositories}) => {

  const params = useParams();
  const {loading, error} = useTypedSelector(state => state.repository)
  const {id} = useTypedSelector(state => state.profile)
  const {fetchRepositories} = useActions()

  const redirectRepository = (url:string) => {
    window.open(url, "_blank");
  }

  useEffect(() => {
    if (id !== params.id) {
      fetchRepositories(params.id);
    }
  }, [])

  if (loading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>{error}</span>
  }

  if (!visibleRepositories) {
    return <div></div>
  }

  return <ul>
    {visibleRepositories.map(({id, name, forks_count, stargazers_count, html_url}) => 
      <li key={id} onClick={() => redirectRepository(html_url)}>
        <div>
          {name}
        </div>
        <div>
          <div>
            {forks_count} forks
          </div>
          <div>
            {stargazers_count} stars
          </div>
        </div>
      </li>
    )}
  </ul>
}

export default RepositoryList