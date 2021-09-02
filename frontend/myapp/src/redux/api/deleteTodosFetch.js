export const deleteTodoFetch = async (id) => {
  const response = await fetch(
    `http://localhost:8080/api/todos/${id}`,
    {
      method: "DELETE",
    }
  );
  const { removed } = await response.json();
    return removed;
}
