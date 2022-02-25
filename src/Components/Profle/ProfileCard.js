import React from 'react';

const ProfileCard = () => {
    return (
        <div class="profile">
        <div class="profile__header"><img class="profile__background"src="https://eumeps-powerparts.eu/thumbs/home/header-environment-400x200.jpg"/><img class="profile__picture" src="https://usercontent2.hubstatic.com/11352039.jpg"/></div>
        <div class="profile__content">
          <div class="profile__bio">
            <h2 class="profile__name">Scarlett Johansson</h2>
            <p class="profile__info">American film actress known for her work in films like Lost in Translation, Vicky Cristina Barcelona, and Hitchcock.</p>
          </div>
        
          <div class="profile__twitter">
            <div class="profile__twitter__stats profile__twitter__stats--followers"><span class="profile__twitter__stats__count">97,000</span><span class="profile__twitter__stats__label">Followers</span></div>
            <div class="profile__twitter__stats profile__twitter__stats--following"><span class="profile__twitter__stats__count">57</span><span class="profile__twitter__stats__label">Following</span></div>
            <div class="profile__twitter__follow">
              <button class="profile__twitter__follow__button">Follow</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfileCard;