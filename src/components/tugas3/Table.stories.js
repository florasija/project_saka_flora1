import React from "react";
import { Table } from "./Table";

export default {
  title: "Components/Table",
  component: Table,
};

const columns = ["Name", "Age", "Country"];
const data = [
  { Name: "Alice", Age: 25, Country: "USA" },
  { Name: "Bob", Age: 30, Country: "UK" },
  { Name: "Charlie", Age: 35, Country: "Canada" },
];

export const Default = () => <Table columns={columns} data={data} />;
