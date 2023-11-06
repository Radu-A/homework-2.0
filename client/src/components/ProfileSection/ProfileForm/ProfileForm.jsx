import { useEffect, useState } from "react";
import ProfileSelect from "./ProfileSelect/ProfileSelect";

const ProfileForm = ({ userData }) => {
  const [userToSave, setUserToSave] = useState({});
  const [selectDefaultValue, setSelectDefaultValue] = useState("");
  // let selectDefaultValue = "";

  const searchUser = async () => {
    try {
      const result = await fetch(
        `${import.meta.env.VITE_SERVER}/api/users?user_id=${userData.user_id}`
      );
      const [data] = await result.json();
      if (data) {
        setUserToSave(data);
        setSelectDefaultValue("Full-Stack");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchUser();
  }, []);

  useEffect(() => {
    searchUser();
  }, [userData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { target } = event;
    const formData = {
      user_id: userData.user_id,
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
      if (userToSave.user_id) {
        const result = await fetch(`${server}/api/users`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await result.json();
        console.log(data);
      } else {
        const result = await fetch(`${server}/api/users`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await result.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
        {selectDefaultValue ? (
          <ProfileSelect selectDefaultValue={selectDefaultValue} />
        ) : (
          <select name="bootcamp" id="bootcamp">
            <option value="">Select your Bootcamp</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Data Science">Data Science</option>
            <option value="Full-Stack">Full-Stack</option>
            <option value="UX/UI">UX/UI</option>
          </select>
        )}
        <input
          type="text"
          name="curse"
          id="curse"
          placeholder="Curse"
          defaultValue={userToSave.curse}
        />
        <button>SAVE</button>
      </form>
    </>
  );
};

export default ProfileForm;
