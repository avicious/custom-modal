import styles from "./CustomModal.module.css";
import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const CustomModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`${styles.modal} ${isOpen ? styles.open : styles.close}`}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.overlay} onClick={onClose}></div>

      <div className={styles.content}>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close modal"
        >
          <X />
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
};

export default CustomModal;
