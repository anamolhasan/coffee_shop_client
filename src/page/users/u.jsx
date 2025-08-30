import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user, deleteAccountUser } = useContext(AuthContext);

  const handleDelete = () => {
    deleteAccountUser()
      .then(() => {
        console.log("Firebase account deleted");
        // 👉 চাইলে এখানেই MongoDB থেকেও user ডিলিট API কল করতে পারেন
                return fetch(`${import.meta.env.VITE_API_URL}/users/${user.uid}`, {
                method: "DELETE",
                });
            })
            .then((res) => res.json())
            .then((data) => {
                console.log("User deleted from DB too:", data);
            })
      .catch((err) => {
        console.error("Delete error:", err.message);
      });
  };

  return (
    <button onClick={handleDelete} className="btn btn-error">
      Delete My Account
    </button>
  );
};

export default Profile;
