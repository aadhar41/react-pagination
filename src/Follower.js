import React from 'react'

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className="card" >
      <div className="avatar">
        <img src={avatar_url} alt={login} className="avatar-img" />
      </div>
      <h4>{login}</h4>
      <a href={html_url} className="btn" target="_blank" rel="noopener noreferrer">
        github profile
      </a>
    </article>
  );
}

export default Follower
