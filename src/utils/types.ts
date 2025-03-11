export interface RowData {
  name: string;
  device: string;
  path: string;
  status: StatusType;
}

export type StatusType = "available" | "scheduled";
