import { priorityToImage } from "../../utils/constants";
import "./styles.css";
const Priority = ({
  priorityId,
  name = false,
  icon = true,
}: {
  priorityId: number;
  name: boolean;
  icon: boolean;
}) => {
  return (
    <div className="priority-container">
      {icon ? (
        <div>
          <img src={priorityToImage[priorityId]} />
        </div>
      ) : null}
      {name ? <h2> {priorityId}</h2> : null}
    </div>
  );
};

export default Priority;
