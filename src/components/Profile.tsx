import React, { useEffect } from "react";

import { useParams } from "react-router-dom"
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

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

  return <div>
    <div>
      <img src={profile.avatar_url} alt="Profile avatar" />
    </div>
    <ul>
      <li>
        {profile.name || '-'}
      </li>
      <li>
        {profile.email || '-'}
      </li>
      <li>
        {profile.location || '-'}
      </li>
      <li>
        {profile.created_at}
      </li>
      <li>
        {profile.followers} Followers
      </li>
      <li>
      Following {profile.following}
      </li>
    </ul>
    <p>
      {profile.bio || 'none'}
    </p>
  </div>
}

export default React.memo(Profile);