export const addTodoFetch = async (text) => {
  const response = await fetch('http://localhost:8080/api/todos', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text, // text: text
    }),
  });
  const { todoMy }  = await response.json();
  console.log('todoMy',todoMy);
  return { ...todoMy, id: todoMy._id}
}


