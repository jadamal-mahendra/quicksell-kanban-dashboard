import React from "react";

import Urgent from "../assets/square-exclamation.png";
import NoPriority from "../assets/menu-dots.png";
import High from "../assets/signal-alt-1.png";
import Medium from "../assets/signal-alt-2.png";
import Low from "../assets/signal-alt.png";

// Icon components for different priorities
export const PriorityIcons: Record<number, React.FC> = {
  4: () => <span>🔥</span>, // Urgent
  3: () => <span>⚠️</span>, // High
  2: () => <span>🟡</span>, // Medium
  1: () => <span>🟢</span>, // Low
  0: () => <span>⚪</span>, // No priority
};

export const stringToIconMap: { [key: string | number]: string } = {
  // Define mapping for each string value to its corresponding Bootstrap icon class name
};

export const priorityToImage: { [key: string | number]: string } = {
  0: NoPriority,
  4: Urgent,
  1: Low,
  2: Medium,
  3: High,
  "No priority": NoPriority,
  Urgent: Urgent,
  Low: Low,
  Medium: Medium,
  High: High,
};
