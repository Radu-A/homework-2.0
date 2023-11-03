const ProfileForm = ({ userData }) => {
  const userToSave = {};

  const searchUser = async () => {
    try {
      const result = await fetch(
        `${import.meta.env.VITE_SERVER}/api/users?user_id=${userData.user_id}`
      );
      const [data] = await result.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  searchUser();

  return (
    <form action="" className="profile-form">
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Firstname"
        defaultValue="caca"
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Lastname"
        defaultValue="caca"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        defaultValue="caca"
      />
      <input
        type="text"
        name="bootcamp"
        id="bootcamp"
        placeholder="Bootcamp"
        defaultValue="caca"
      />
      <input
        type="text"
        name="curse"
        id="curse"
        placeholder="Curse"
        defaultValue="caca"
      />
    </form>
  );
};

export default ProfileForm;
