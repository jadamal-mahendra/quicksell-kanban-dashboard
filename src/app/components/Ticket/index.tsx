import React from "react";
// import { PriorityIcons } from "../../utils/constants";
import "./styles.css";
import { TicketProps } from "../../types";
import Status from "../Status";
import Priority from "../Priority";
import UserAvatarBadge from "../Avatar";

const Ticket: React.FC<TicketProps> = ({ ticket, groupingOption }) => {
  // const PriorityIcon = PriorityIcons[ticket.priority];

  return (
    <div className={`ticket`} data-testid={`ticket-${ticket.id}`}>
      <div className="ticket-header">
        <p> {ticket.id}</p>
        {groupingOption !== "user" ? (
          <UserAvatarBadge userId={ticket?.userId} image name={false} />
        ) : null}
      </div>
      <div className="ticket-footer">
        <p className="ticket-title">
          {groupingOption === "priority" || groupingOption === "user" ? (
            <Status status={ticket.status} icon name={false} />
          ) : null}{" "}
          {ticket.title}
        </p>
      </div>
      <div className="ticket-footer">
        {groupingOption === "status" || groupingOption === "user" ? (
          <Priority priorityId={ticket?.priority} name={false} icon />
        ) : null}

        {ticket?.tag?.map((tag) => (
          <p className="ticket-tag">{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
