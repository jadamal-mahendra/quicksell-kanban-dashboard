import { useCallback, useEffect, useState } from "react";
import "./App.css"; // Import your CSS file for styling
import useTicketData from "./hooks/useTicketData";
import KanbanBoard from "./components/Board";
import {
  GroupedTicket,
  ITicket,
  TGroupingOption,
  TSortingOption,
} from "./types";
import Header from "./components/Header";

function App() {
  // Fetch initial ticket data
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tickets: initialTickets, loading, error, users } = useTicketData();

  // State for grouping and sorting options
  const [groupingOption, setGroupingOption] = useState<TGroupingOption>(() => {
    // Retrieve grouping option from local storage or default to 'status'
    return (
      (localStorage.getItem("groupingOption") as TGroupingOption) || "status"
    );
  });
  const [sortingOption, setSortingOption] = useState<TSortingOption>(() => {
    // Retrieve sorting option from local storage or default to 'priority'
    return (
      (localStorage.getItem("sortingOption") as TSortingOption) || "priority"
    );
  });

  // State for grouped and sorted tickets
  const [groupedAndSortedTickets, setGroupedAndSortedTickets] = useState<
    GroupedTicket[]
  >(() => {
    // Retrieve grouped and sorted tickets from local storage or default to empty array
    const storedGroupedAndSortedTickets = localStorage.getItem(
      "groupedAndSortedTickets"
    );
    return storedGroupedAndSortedTickets
      ? JSON.parse(storedGroupedAndSortedTickets)
      : [];
  });

  // Effect to update local storage when grouping option changes
  useEffect(() => {
    localStorage.setItem("groupingOption", groupingOption);
  }, [groupingOption]);

  // Effect to update local storage when sorting option changes
  useEffect(() => {
    localStorage.setItem("sortingOption", sortingOption);
  }, [sortingOption]);

  // Effect to update local storage when grouped and sorted tickets change
  useEffect(() => {
    localStorage.setItem(
      "groupedAndSortedTickets",
      JSON.stringify(groupedAndSortedTickets)
    );
  }, [groupedAndSortedTickets]);

  // Function to group tickets based on the selected grouping option
  const groupTickets = useCallback(
    (tickets: ITicket[] | undefined, groupingOption: TGroupingOption) => {
      const groupedTickets: { [key: string]: ITicket[] } = {};

      switch (groupingOption) {
        case "status":
          tickets?.forEach((ticket) => {
            if (!groupedTickets[ticket.status]) {
              groupedTickets[ticket.status] = [];
            }
            groupedTickets[ticket.status].push(ticket);
          });
          break;
        case "user":
          tickets?.forEach((ticket) => {
            if (!groupedTickets[ticket.userId]) {
              groupedTickets[ticket.userId] = [];
            }
            groupedTickets[ticket.userId].push(ticket);
          });
          break;
        case "priority":
          tickets?.forEach((ticket) => {
            const priorityLabel = getPriorityLabel(ticket.priority);
            if (!groupedTickets[priorityLabel]) {
              groupedTickets[priorityLabel] = [];
            }
            groupedTickets[priorityLabel].push(ticket);
          });
          break;
        default:
          break;
      }

      const groupedTicketsArray: { groupKey: string; tickets: ITicket[] }[] =
        Object.keys(groupedTickets).map((key) => ({
          groupKey: key,
          tickets: groupedTickets[key],
        }));

      return groupedTicketsArray;
    },
    []
  );

  // Function to sort grouped tickets based on the selected sorting option
  const sortTickets = (
    groupedTickets: GroupedTicket[],
    sortingOption: TSortingOption
  ) => {
    const sortedGroupedTickets = groupedTickets.map((group) => {
      switch (sortingOption) {
        case "priority":
          return {
            ...group,
            tickets: group.tickets
              .slice()
              .sort((a, b) => b.priority - a.priority),
          };
        case "title":
          return {
            ...group,
            tickets: group.tickets
              .slice()
              .sort((a, b) => a.title.localeCompare(b.title)),
          };
        default:
          return group;
      }
    });

    return sortedGroupedTickets;
  };

  const getPriorityLabel = (priority: number): string => {
    switch (priority) {
      case 4:
        return "Urgent";
      case 3:
        return "High";
      case 2:
        return "Medium";
      case 1:
        return "Low";
      default:
        return "No priority";
    }
  };

  // Effect to group and sort tickets when tickets or grouping/sorting options change
  useEffect(() => {
    setGroupedAndSortedTickets(
      sortTickets(groupTickets(initialTickets, groupingOption), sortingOption)
    );
  }, [initialTickets, groupingOption, sortingOption, groupTickets]);

  return (
    <div className="App">
      {/* Grouping options */}
      <Header
        groupingOption={groupingOption}
        setGroupingOption={setGroupingOption}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      />

      {/* Kanban board */}
      <KanbanBoard
        groupedAndSortedTickets={groupedAndSortedTickets}
        groupingOption={groupingOption}
      />
    </div>
  );
}

export default App;
