"use client";

import React, { useEffect } from "react";
import { RowData } from "../utils/types";
import styles from "@/app/page.module.css";
import { STATUS_AVAILABLE } from "@/utils/constants";

interface DatagridHeaderProps {
  data: RowData[];
  selectedRows: RowData[];
  setSelectedRows: React.Dispatch<React.SetStateAction<RowData[]>>;
}

export default function DatagridHeader({
  data,
  selectedRows,
  setSelectedRows,
}: DatagridHeaderProps) {
  // Constants and Methods
  const isAllSelected = selectedRows.length === data.length;
  const isNoneSelected = selectedRows.length === 0;
  const isPartiallySelected = !isAllSelected && !isNoneSelected;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row));
    }
  };
  const downloadableRows = data.filter(
    (row) => row.status === STATUS_AVAILABLE
  );
  const allDownloadableSelected = selectedRows.every((el) =>
    downloadableRows.map((row) => row.name).includes(el.name)
  );
  const handleDownload = () => {
    if (selectedRows.length > 0) {
      // Format the data into a string
      const formattedData = selectedRows
        .map(
          (row) => `Name: ${row.name} Device: ${row.device} Path: ${row.path}`
        )
        .join("\n");

      // Show alert with the formatted data
      alert(`Downloaded Items:\n${formattedData}`);
    } else {
      alert("No rows available for download.");
    }
  };

  // Effect
  useEffect(() => {
    // Set the checkbox to indeterminate state if some rows are selected
    const checkbox = document.getElementById(
      "select-all-checkbox"
    ) as HTMLInputElement;
    if (checkbox) {
      checkbox.indeterminate = isPartiallySelected;
    }
  }, [isAllSelected, selectedRows, data, isNoneSelected, isPartiallySelected]);

  return (
    <div
      className={styles.header}
      role="toolbar"
      aria-label="Data grid controls"
    >
      <div>
        <input
          id="select-all-checkbox"
          type="checkbox"
          checked={isAllSelected}
          onChange={handleSelectAll}
          aria-label={`Select all rows (${data.length} total)`}
          aria-checked={
            isAllSelected ? "true" : isPartiallySelected ? "mixed" : "false"
          }
        />
        <span role="status" aria-live="polite">
          {selectedRows.length === 0
            ? "None Selected"
            : `${selectedRows.length} Selected`}
        </span>
      </div>
      <button
        disabled={!selectedRows.length || !allDownloadableSelected}
        onClick={handleDownload}
        aria-label={`Download ${selectedRows.length} selected items`}
      >
        Download Selected
      </button>
    </div>
  );
}
