# Custom Modal

A lightweight, accessible, and highly customizable React modal component built with **React Portals** and **Lucide React**.

## Features

- **DOM Decoupling:** Uses `createPortal` to render the modal at the end of `document.body`, avoiding z-index and overflow issues.
- **Accessibility:** Includes `dialog` roles, ARIA attributes, and automatic keyboard support (Esc key to close).
- **Scroll Locking:** Automatically prevents background scrolling when the modal is active.
- **Animation Ready:** Includes dynamic class hooks (`.open`, `.close`) for CSS transitions.
- **Click-to-Dismiss:** Close the modal by clicking the overlay backdrop.

## Usage

```javascript
import { useState } from "react";
import CustomModal from "./components/CustomModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="container">
      <button onClick={handleToggle}>Open Modal</button>

      <CustomModal isOpen={isModalOpen} onClose={handleToggle}>
        <h2>Modal Title</h2>
        <p>This is the modal content!</p>
      </CustomModal>
    </div>
  );
}
```
