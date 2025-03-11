"use client";

import React, { useState, useEffect } from "react";
import DatagridBody from "@/components/DatagridBody";
import DatagridHeader from "@/components/DatagridHeader";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import data from "@/utils/data.json" assert { type: "json" };
import styles from "./page.module.css";
import { RowData } from "@/utils/types";

const typedData = data as RowData[];

export default function DatagridPage() {
  const [selectedRows, setSelectedRows] = useState<RowData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!typedData || typedData.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h2>No data available</h2>
        <p>Please add some data to get started.</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Datagrid</h1>
        <ErrorBoundary>
          <div className={styles["datagrid-container"]}>
            <DatagridHeader
              data={typedData}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
            />
            <DatagridBody
              data={typedData}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
            />
          </div>
        </ErrorBoundary>
      </main>
    </div>
  );
}
