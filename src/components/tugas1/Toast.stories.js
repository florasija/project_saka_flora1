import React, { useState } from "react";
import { Toast } from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
};

export const Default = () => {
  const [toasts, setToasts] = useState([
    { id: 1, message: "Info Message", type: "info" },
    { id: 2, message: "Success Message", type: "success" },
    { id: 3, message: "Warning Message", type: "warning" },
    { id: 4, message: "Error Message", type: "error" },
  ]);

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <div>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};
