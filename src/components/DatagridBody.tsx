"use client";

import React, { useCallback } from "react";
import RowItem from "./RowItem";
import { RowData } from "../utils/types";
import styles from "@/app/page.module.css";

interface DatagridBodyProps {
  data: RowData[];
  selectedRows: RowData[];
  setSelectedRows: React.Dispatch<React.SetStateAction<RowData[]>>;
}

export default function DatagridBody({
  data,
  selectedRows,
  setSelectedRows,
}: DatagridBodyProps) {
  const handleRowSelect = useCallback(
    (row: RowData) => {
      if (selectedRows.some((el) => el.name === row.name)) {
        setSelectedRows(selectedRows.filter((el) => el.name !== row.name));
      } else {
        setSelectedRows([...selectedRows, row]);
      }
    },
    [selectedRows, setSelectedRows]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, row: RowData, index: number) => {
      switch (event.key) {
        case " ":
        case "Enter":
          event.preventDefault();
          handleRowSelect(row);
          break;
        case "ArrowDown":
          event.preventDefault();
          if (index < data.length - 1) {
            const nextRow = document.querySelector(
              `[data-row-index="${index + 1}"]`
            );
            (nextRow as HTMLElement)?.focus();
          }
          break;
        case "ArrowUp":
          event.preventDefault();
          if (index > 0) {
            const prevRow = document.querySelector(
              `[data-row-index="${index - 1}"]`
            );
            (prevRow as HTMLElement)?.focus();
          }
          break;
      }
    },
    [data.length, handleRowSelect]
  );

  return (
    <table
      className={styles["datagrid-table"]}
      role="grid"
      aria-label="Data grid"
    >
      <thead>
        <tr role="row">
          <th role="columnheader" aria-label="Selection"></th>
          <th role="columnheader">Name</th>
          <th role="columnheader">Device</th>
          <th role="columnheader">Path</th>
          <th role="columnheader">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <RowItem
            key={row.name}
            row={row}
            index={index}
            isSelected={selectedRows.some((el) => el.name === row.name)}
            onRowSelect={handleRowSelect}
            onKeyDown={(e) => handleKeyDown(e, row, index)}
          />
        ))}
      </tbody>
    </table>
  );
}
