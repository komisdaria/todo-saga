const { Router } = require('express');

const router = Router();

const Todo = require('../db/models/todo');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const todos = await Todo.find().lean();
      res.status(200).json({ todos: todos.map(({ _id, ...rest }) => ({ ...rest, id: _id })) });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { text } = req.body;
      const todoMy = await Todo.create({
        text,
        status: false,
      });
      // console.log(todo);
      res.json({ todoMy });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    await Todo.findOneAndDelete(id);
    // console.log(deletedTodo);
    res.json({ removed: true });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put('/status/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    console.log(id, status);
    // findOneAndUpdate - возвращает предыдущую версию, { new: true } - возвращает обновлённую
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true },
    );
    console.log('todo from back', todo);
    res.json({ todo });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
