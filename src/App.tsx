import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";
interface Users {
  id: number;
  name: string;
}
function App() {
  const [users, setUser] = useState<Users[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await axios.get<Users[]>(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       setUser(res.data);
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };
  //   fetchUsers();
  // }, []);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </>
  );
}
export default App;
