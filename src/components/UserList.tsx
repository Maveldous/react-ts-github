import React from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";

import styles from "../assets/scss/components/table.module.scss";

interface UserRowProps {
  imgSrc: string,
  name: string,
  onUserClick(name: string): void,
}

const GitUserRow:React.FC<UserRowProps> = ({imgSrc, name, onUserClick}) => {
  return <div onClick={() => onUserClick(name)} className={styles.table__row}>
    <img src={imgSrc} alt="User avatar" width="100" />
    <span>{name}</span>
  </div>
}

interface UserListProps {
  onUserClick(name: string): void,
}

const UserList:React.FC<UserListProps> = ({onUserClick}) => {
  const {users, error, loading} = useTypedSelector(state => state.user)

  if (loading) {
    return <span>loading...</span>
  }

  if (error) {
    return <span>{error}</span>;
  }

  if (Array.isArray(users) && users.length === 0) {
    return <span>No results</span>;
  }

  return (
    <ul className={styles.table}>
      {users.map(user => (
        <li key={user.id}>
          <GitUserRow imgSrc={user.avatar_url} name={user.login} onUserClick={onUserClick}/>
        </li>
      ))}      
    </ul>
  );
}

export default React.memo(UserList);