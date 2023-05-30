import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
const defaultBg =
  "https://ik.imagekit.io/0tfb5ok46/Default-Profile-Picture-Transparent-Image.png?updatedAt=1684094895997";

function ProfileCard({ FName, bio, profilePicture }) {
  // Check if the user is viewing their own profile
  const isOwnerProfile = true; // Replace this with your logic to determine if it's the owner's profile
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div id="user_card">
        <div
          id="user_card_profile_picture"
          style={{
            backgroundImage: user.image
              ? `url(${user.image})`
              : `url("${defaultBg}")`,
          }}
        >
          {isOwnerProfile ? null : ( // Display nothing when it's the owner's profile
            <div id="user_card_button_wrapper">
              <div id="follow_unfollow_button">follow {FName}</div>
              <div id="more_button">▪▪▪</div>
            </div>
          )}
        </div>
        <div id="user_card_details_wrapper">
          <div id="user_card_about">
            <h1>About</h1>
            <p>{bio}</p>
          </div>
        </div>

        <div id="user_card_friends">
          <div id="user_card_friends_label">friends</div>
          {/* should be dynamic */}
          <div id="user_card_friends_number">0</div>
        </div>
        <div id="user_card_posts">
          <div id="user_card_posts_label">posts</div>
          {/* should be dynamic */}
          <div id="user_card_posts_number">0</div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
