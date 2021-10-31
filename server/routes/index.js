import { Router } from "express";
import {
  addTodos,
  getTodos,
  updateTodos,
  deleteTodos,
} from "../controllers/todos";
import { compararTodos } from "../middlewares/compararTodos";
const router = Router();

router
  .route("/todos")
  .post(compararTodos, addTodos)
  .get(compararTodos, getTodos);
router
  .route("/todos/:id")
  .put(compararTodos, updateTodos)
  .delete(compararTodos, deleteTodos);
export default router;
