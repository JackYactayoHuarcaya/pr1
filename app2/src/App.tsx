import { useForm } from "react-hook-form";
import { queryUser } from "./query/user";

function App() {
  const { data, isLoading, error } = queryUser();

  const { register, handleSubmit } = useForm();

  return (
    <>
      <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register("firstName")} />
          <input {...register("lastName")} />
          <input type="submit" />
        </form>
      </div>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.nombre}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
