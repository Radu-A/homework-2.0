import { useAuth0 } from "@auth0/auth0-react";

import GithubInfo from "./GithubInfo/GithubInfo";
import ProfileForm from "./ProfileForm";

const ProfileSection = () => {
  // Data from Auth0 db
  const { user } = useAuth0();
  let userData = {};

  if (user) {
    const nameArray = user.name.split(' ')
    // Object with data from Auth0
    userData = {
      user_id: user.sub,
      email: user.email,
      photo: user.picture,
      firstname: nameArray[0],
      lastname: nameArray[1],
      bootcamp: "",
      curse: "",
      github: `https://github.com/${user.nickname}`,
    }
  }

  return (
    <section className="profile-section">
      <GithubInfo userData={userData}/>
      <ProfileForm userData={userData}/>
    </section>
  );
};

export default ProfileSection;
