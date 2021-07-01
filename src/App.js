import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setisLoading] = useState(true)

  // useEffect(() => {
  //   setisLoading(false);
  // }, [setisLoading])

  if (isLoading) {
    return <Loading />
  } else {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
