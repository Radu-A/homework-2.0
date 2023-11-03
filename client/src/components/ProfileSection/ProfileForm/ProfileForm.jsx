import { useEffect, useState } from "react";

const ProfileForm = ({ userData }) => {
  const [userToSave, setUserToSave] = useState({});

  const searchUser = async () => {
    try {
      const result = await fetch(
        `${import.meta.env.VITE_SERVER}/api/users?user_id=${userData.user_id}`
      );
      const [data] = await result.json();
      if (data) {
        setUserToSave(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchUser();
  }, [userData]);

  const saveUserData = async (event) => {
    event.preventDefault();
    console.log(event.target);
    // const formData = {
    //   user_id: "aerozedits@gmail.com",
    //   email: "aerozedits@gmail.com",
    //   photo: "https://avatars.githubusercontent.com/u/118265607?v=4",
    //   firstname: "Fernando",
    //   lastname: "Mariño",
    //   bootcamp: "Full-Stak",
    //   curse: "23-04",
    //   github: "https://github.com/aerozfx",
    // };
    // const server = import.meta.env.VITE_SERVER;
    // try {
    //   const result = await fetch(`${server}/api/users`, {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify(),
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <form action="" className="profile-form">
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Firstname"
        defaultValue={userToSave.firstname}
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Lastname"
        defaultValue={userToSave.lastname}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        defaultValue={userToSave.email}
      />
      <input
        type="text"
        name="bootcamp"
        id="bootcamp"
        placeholder="Bootcamp"
        defaultValue={userToSave.bootcamp}
      />
      <input
        type="text"
        name="curse"
        id="curse"
        placeholder="Curse"
        defaultValue={userToSave.curse}
      />
      <button type="submit" onSubmit={saveUserData}>
        SAVE
      </button>
    </form>
  );
};

export default ProfileForm;
