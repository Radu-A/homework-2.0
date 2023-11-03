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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { target } = event;
    const formData = {
      user_id: "llalalalalala",
      email: target.email.value,
      photo: userData.photo,
      firstname: target.firstname.value,
      lastname: target.lastname.value,
      bootcamp: target.bootcamp.value,
      curse: target.curse.value,
      github: userData.github,
    };
    console.log(formData);

    const server = import.meta.env.VITE_SERVER;
    try {
      const result = await fetch(`${server}/api/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await result.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="" className="profile-form" onSubmit={handleSubmit}>
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
      <button>SAVE</button>
    </form>
  );
};

export default ProfileForm;
