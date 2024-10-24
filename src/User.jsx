const User = ({ user }) => {
  const { name, email } = user;
  return (
    <div
      style={{
        border: "2px solid tomato",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Name: {name}</h3>
      <h5>Email: {email}</h5>
    </div>
  );
};

export default User;
