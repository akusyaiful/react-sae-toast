import React, { useEffect, useState } from "react";
import "./SaeToast.css";

interface ToastProps {
  message: string;
  open: boolean;
  type?: string;
  position?: string;
}

export default function SaeToast(props: ToastProps) {
  const { message, open, type, position } = props;
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  useEffect(() => {
    if (open) {
      const hide = setTimeout(() => {
        setShow(false);
      }, 5000);
      return () => clearTimeout(hide);
    }
  }, [show]);

  return (
    <div>
      {open && (
        <div className={`wrapper ${position || "top-right"}`}>
          {type === "success" ? (
            <img src="/success.svg" width={25} height={25} />
          ) : type === "error" ? (
            <img src="/error.svg" width={25} height={25} />
          ) : null}
          <div style={{ width: !type ? "100%" : "90%" }} className="message">
            {message}
          </div>
        </div>
      )}
    </div>
  );
}
