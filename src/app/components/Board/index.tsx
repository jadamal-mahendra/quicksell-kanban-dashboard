import React from "react";

import Ticket from "../Ticket";
import "./styles.css";
import { KanbanBoardProps } from "../../types";
import UserAvatarBadge from "../Avatar";
import Status from "../Status";
import Priority from "../Priority";

const KanbanBoard: React.FC<KanbanBoardProps> = ({
  groupedAndSortedTickets,
  groupingOption,
}) => {
  // const [visibleGroupIndex, setVisibleGroupIndex] = useState(0);
  // console.log(visibleGroupIndex);
  // const handleNextGroup = () => {
  //   setVisibleGroupIndex(prevIndex => Math.min(prevIndex + 1, groupedAndSortedTickets.length - 1));
  // };

  // const handlePrevGroup = () => {
  //   setVisibleGroupIndex(prevIndex => Math.max(prevIndex - 1, 0));
  // };

  return (
    <div className="kanban-board">
      {groupedAndSortedTickets.map((group) => {
        return (
          <div key={group.groupKey} className={`column`}>
            <div className="group-header">
              <div className="group-header-left">
                {groupingOption === "user" ? (
                  <UserAvatarBadge userId={group?.groupKey} name image />
                ) : groupingOption === "status" ? (
                  <Status status={group?.groupKey} icon name />
                ) : groupingOption === "priority" ? (
                  <Priority
                    priorityId={group?.groupKey as unknown as number}
                    name
                    icon
                  />
                ) : null}
              </div>
              <div className="group-header-right">
                <i className="bi bi-plus"></i>
                <i className="bi bi-three-dots"></i>
              </div>
            </div>
            <div role="list">
              {group.tickets.map((ticket) => (
                <Ticket
                  key={ticket.id}
                  ticket={ticket}
                  groupingOption={groupingOption}
                />
              ))}
            </div>
          </div>
        );
      })}
      {/* {groupedAndSortedTickets.length > 1 && (
        <>
          <button className="arrow-btn prev" onClick={handlePrevGroup} disabled={visibleGroupIndex === 0}>
            &lt;
          </button>
          <button className="arrow-btn next" onClick={handleNextGroup} disabled={visibleGroupIndex === groupedAndSortedTickets.length - 1}>
            &gt;
          </button>
        </>
      )} */}
    </div>
  );
};

export default KanbanBoard;
