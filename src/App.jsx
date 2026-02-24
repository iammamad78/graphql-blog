import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const { loading, data } = useQuery(QUERY);
  console.log(data);
  return (
    <>
      <h3>GraphQl</h3>
    </>
  );
}

export default App;
