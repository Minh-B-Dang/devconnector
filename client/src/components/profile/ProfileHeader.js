import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';


class ProfileHeader extends Component {
  render() {
    const {profile } = this.props;

    return (
          <div classname="row">
            <div classname="col-md-12">
              <div classname="card card-body bg-info text-white mb-3">
                <div classname="row">
                  <div classname="col-4 col-md-3 m-auto">
                    <img classname="rounded-circle" src={profile.user.avatar} alt="" />
                  </div>
                </div>
                <div classname="text-center">
                  <h1 classname="display-4 text-center">{profile.user.name}</h1>
                  <p classname="lead text-center">{profile.status} {isEmpty(profile.company) ? null : (<span>at {profile.company}</span>)}</p>
                  {isEmpty(profile.location) ? null : (<p>at {profile.location}</p>)}
                  <p>
                    {isEmpty(profile.website) ? null : (
                      <a classname="text-white p-2" href={profile.website} target="_blank">
                      <i classname="fas fa-globe fa-2x"/>
                    </a>
                    )}

                    {isEmpty(profile.social && profile.social.twitter) ? null : (
                      <a classname="text-white p-2" href={profile.social.twitter} target="_blank">
                      <i classname="fab fa-twitter fa-2x"/>
                    </a>
                    )}

                    {isEmpty(profile.social && profile.social.facebook) ? null : (
                      <a classname="text-white p-2" href={profile.social.facebook} target="_blank">
                      <i classname="fab fa-facebook fa-2x"/>
                    </a>
                    )}

                      {isEmpty(profile.social && profile.social.linkedin) ? null : (
                      <a classname="text-white p-2" href={profile.social.linkedin} target="_blank">
                      <i classname="fab fa-linkedin fa-2x"/>
                    </a>
                    )}

                    {isEmpty(profile.social && profile.social.youtube) ? null : (
                      <a classname="text-white p-2" href={profile.social.youtube} target="_blank">
                      <i classname="fab fa-youtube fa-2x"/>
                    </a>
                    )}

                    {isEmpty(profile.social && profile.social.instagram) ? null : (
                      <a classname="text-white p-2" href={profile.social.instagram} target="_blank">
                      <i classname="fab fa-instagram fa-2x"/>
                    </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default ProfileHeader;