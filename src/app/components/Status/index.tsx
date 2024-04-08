import "./styles.css";
const Status = ({
  status,
  name = false,
  icon = true,
}: {
  status: string;
  name: boolean;
  icon: boolean;
}) => {
  // Mapping of status IDs to Bootstrap icons
  const statusToIcon: { [key: string]: string } = {
    Todo: "bi bi-circle",
    "In progress": "bi bi-circle-half",
    Done: "bi bi-check-circle-fill",
    Canceled: "bi bi-x-circle-fill",
    Backlog: "bi bi-dash-circle-dotted",
  };

  return (
    <div className="status-container">
      {icon ? <i className={statusToIcon[status]}></i> : null}
      {name ? <h2>{status}</h2> : null}
    </div>
  );
};

export default Status;
