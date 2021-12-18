import React, { useEffect } from "react";

import { useParams } from "react-router-dom"
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

import styles from "../assets/scss/components/profile.module.scss";

const Profile: React.FC = () => {

  const params = useParams();
  const {id, loading, error, profile} = useTypedSelector(state => state.profile)
  const {fetchProfile} = useActions()

  useEffect(() => {
    if (id !== params.id) {
      fetchProfile(params.id);
    }
  }, [])

  if (loading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>{error}</span>
  }

  if (!profile) {
    return <div></div>
  }

  return <div className={styles.profile}>
    <div className={styles.profile__wrapper}>
      <div>
        <img src={profile.avatar_url} alt="Profile avatar" width="420" />
      </div>
      <ul className={styles.profile__info}>
      <li>
        Name: {profile.name || '-'}
      </li>
      <li>
        Email: {profile.email || '-'}
      </li>
      <li>
        Location: {profile.location || '-'}
      </li>
      <li>
        Join Date: {profile.created_at}
      </li>
      <li>
        {profile.followers} Followers
      </li>
      <li>
      Following {profile.following}
      </li>
    </ul>
    </div>
    <p className={styles.profile__bio}>
      Bio: {profile.bio || 'none'}
    </p>
  </div>
}

export default React.memo(Profile);