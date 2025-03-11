import React from "react";
import StatusIndicator from "./StatusIndicator";
import { RowData } from "../utils/types";

interface RowItemProps {
  row: RowData;
  index: number;
  isSelected: boolean;
  onRowSelect: (row: RowData) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLTableRowElement>) => void;
}

export default function RowItem({
  row,
  index,
  isSelected,
  onRowSelect,
  onKeyDown,
}: RowItemProps) {
  return (
    <tr
      role="row"
      tabIndex={0}
      data-row-index={index}
      onKeyDown={onKeyDown}
      aria-selected={isSelected}
    >
      <td role="gridcell">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onRowSelect(row)}
          aria-label={`Select ${row.name}`}
        />
      </td>
      <td role="gridcell">{row.name}</td>
      <td role="gridcell">{row.device}</td>
      <td role="gridcell">{row.path}</td>
      <td role="gridcell">
        <StatusIndicator status={row.status} />
      </td>
    </tr>
  );
}
