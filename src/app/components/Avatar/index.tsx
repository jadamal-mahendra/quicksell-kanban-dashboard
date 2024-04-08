import useTicketData from "../../hooks/useTicketData";
import "./styles.css";
const UserAvatarBadge = ({
  userId,
  name = false,
  image = true,
}: {
  userId: string;
  name: boolean;
  image: boolean;
}) => {
  const { users } = useTicketData();
  // Find the user object based on userId
  const user = users?.find((user) => user.id === userId);
  const badgeColor = user && user?.available ? "green" : "grey";
  return (
    <>
      {image ? (
        <div className="avatar-container">
          <img
            src={`https://i.pravatar.cc/30?img=${user?.id?.split("-")?.[1]}`}
          />
          <div className={`avatar-badge-${badgeColor}`} />
        </div>
      ) : null}
      {name ? <h2> {user?.name}</h2> : null}
    </>
  );
};

export default UserAvatarBadge;
