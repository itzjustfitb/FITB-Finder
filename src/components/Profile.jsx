import { Link } from "react-router-dom";

function Profile({ data }) {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile__top">
          <img src={data?.avatar_url} alt="" />
          <div className="profile__title">
            <h1>{data?.name}</h1>
            <p>{data?.login}</p>
          </div>
        </div>
        <div className="profile__content">
          <Link target="_blank" to={`${data?.html_url}`}>
            <i className="ri-external-link-line"></i>
            <p>See on Github</p>
          </Link>
          <div className="profile__socials">
            <div className="social__item">
              <i className="ri-community-line"></i>
              <div>
                {data?.company ? (
                  <p>{data?.company}</p>
                ) : (
                  <span>Not available</span>
                )}
              </div>
            </div>
            <div className="social__item">
              <i className="ri-twitter-x-line"></i>
              <div>
                {data?.twitter_username ? (
                  <p>{data?.twitter_username}</p>
                ) : (
                  <span>Not available</span>
                )}
              </div>
            </div>
            <div className="social__item">
              <i className="ri-map-pin-line"></i>
              <div>
                {data?.location ? (
                  <p>{data?.location}</p>
                ) : (
                  <span>Not available</span>
                )}
              </div>
            </div>
          </div>
          <div className="profile__infos">
            <p>
              {data?.public_repos} <span>Repos</span>
            </p>
            <p>
              {data?.followers} <span>Followers</span>
            </p>
            <p>
              {data?.following} <span>Follows</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
