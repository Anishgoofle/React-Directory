import Folder from "./Folder";
import "./styles.css";
import explorer from "./folder/data";

export default function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
