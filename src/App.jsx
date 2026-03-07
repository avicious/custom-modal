import { useState } from "react";
import CustomModal from "./components/CustomModal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <main className="container">
      <button className="btn" onClick={handleToggle}>
        Open Modal
      </button>

      <CustomModal isOpen={isOpen} onClose={handleToggle}>
        <div>
          <h1>Project Details</h1>
          <p>
            This content is now rendered at the top level of the DOM, preventing
            any parent CSS from breaking the layout.
          </p>
        </div>
      </CustomModal>
    </main>
  );
};

export default App;
