import React, { useEffect } from "react";

import { useParams } from "react-router-dom"
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

import { RespRepository } from "../types/repository";

import styles from "../assets/scss/components/table.module.scss";

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

  if (loading || !visibleRepositories) {    
    return <span>Loading...</span>
  }

  if (error) {
    return <span>{error}</span>
  }

  if (Array.isArray(visibleRepositories) && visibleRepositories.length === 0) {
    return <span>No results</span>;
  }

  return <ul className={styles.table}>
    {visibleRepositories.map(({id, name, forks_count, stargazers_count, html_url}) => 
      <li key={id} onClick={() => redirectRepository(html_url)} className={styles.table__row}>
        <div>
          {name}
        </div>
        <div>
          <div className="mb-2">
            {forks_count} Forks
          </div>
          <div>
            {stargazers_count} Stars
          </div>
        </div>
      </li>
    )}
  </ul>
}

export default RepositoryList