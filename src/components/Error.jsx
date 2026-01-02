import { useRouteError } from "react-router-dom";

function Error() {
  return (
    <>
      <h1>OOPS!!</h1>
      <h2>Enter the correct path</h2>
      <h3>
        {err.status} {err.statusText}
      </h3>
      <h3>{err.data}</h3>
    </>
  );
}

export default Error;
