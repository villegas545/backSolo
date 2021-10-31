import ls from "local-storage";
import { todos } from "../datos/data";

const getTodos = (req, res) => {
  res.status(200).send(ls.get("todos"));
};

const addTodos = (req, res) => {
  try {
    const { body } = req;
    let todos = ls.get("todos");
    todos = [...todos, body];
    ls.set("todos", todos);
    res.status(200).json({
      message: "Agregado satifactoriamente",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTodos = (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    let todos = ls.get("todos");
    const arrayEditado = todos.map((item) =>
      item.id == id
        ? {
            id: id,
          title: body.title,
            description: body.description,
            completed: body.completed,
        }
        : item
    );
    ls.set("todos", arrayEditado);
    res.status(200).json({
      message: "Actualizado satisfactoriamente",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTodos = (req, res) => {
  try {
    const { id } = req.params;
    let todos = ls.get("todos");
    const arrayEditado = todos.filter((item) => item.id != id);
    ls.set("todos", arrayEditado);
    //console.log(arrayEditado);
    res.status(200).json({
      message: "Eliminado satisfactoriamente",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
export { addTodos, getTodos, updateTodos, deleteTodos };
