import React from "react";
// import "./SaeToast.css";

interface ToastProps {
  message: string;
  open: boolean;
  type?: string;
}

export default function SaeToast(props: ToastProps) {
  const { message, open, type } = props;

  return (
    <div>
      {open && (
        <div className="wrapper">
          <div>
            {type === "success" ? (
              <img src="" />
            ) : type === "error" ? (
              <img src="" />
            ) : null}
          </div>
          <div style={{ marginLeft: !type ? 0 : 16 }}>{message}</div>
        </div>
      )}
    </div>
  );
}
