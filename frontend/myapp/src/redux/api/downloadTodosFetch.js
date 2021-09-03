export const downloadTodosFetch = async() => {
  const response = await fetch('http://localhost:8080/api/todos');
  const result = await response.json();
  console.log(result, 'result from fetch')
  return result.todos;
}
