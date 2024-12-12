import React from "react";
import { Breadcrumb } from "./Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};

export const Default = () => (
  <Breadcrumb items={["Home", "Products", "Electronics", "Laptops"]} />
);

export const SingleItem = () => <Breadcrumb items={["Home"]} />;

export const EmptyItems = () => <Breadcrumb items={[]} />;