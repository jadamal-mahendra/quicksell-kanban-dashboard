import { Dispatch, SetStateAction } from "react";

export interface ITicket {
    id: string;
    title: string;
    status: string;
    userId: string;
    priority: number;
    tag: Array<string>;

  }

  export type TUser ={ 
    id: string;
    name: string;
    available: boolean;
  }
  export interface GroupedTicket {
    groupKey: string;
    tickets: ITicket[];
  }
  export type TGroupingOption = 'status' | 'user' | 'priority';
  export type TSortingOption = 'priority' | 'title';


  export interface GroupedAndSortedTicket {
    groupKey: string;
    tickets: ITicket[];
  }
  
  export interface KanbanBoardProps {
    groupedAndSortedTickets: GroupedAndSortedTicket[];
    groupingOption: TGroupingOption;

  }
  export interface GroupingOptionsProps {
    groupingOption: TGroupingOption;
    setGroupingOption: Dispatch<SetStateAction<TGroupingOption>>;
    closeDropdown?:()=>void
  }
  
  export  interface SortingOptionsProps {
    sortingOption: TSortingOption;
    setSortingOption: (option: TSortingOption) => void;
    closeDropdown?:()=>void

  }

  

export  interface TicketProps {
    ticket: ITicket;
    groupingOption:TGroupingOption
  }

  export interface HeaderProps {
    groupingOption: TGroupingOption
    setGroupingOption: Dispatch<SetStateAction<TGroupingOption>>
    sortingOption: TSortingOption
    setSortingOption: Dispatch<SetStateAction<TSortingOption>>
  }