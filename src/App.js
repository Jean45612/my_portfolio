import { useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setisLoading] = useState(true)

  if (isLoading) {
    return <Loading setisLoading={setisLoading} />
  } else {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
