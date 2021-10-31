import ls from "local-storage";
import { todos } from "../datos/data";
const compararTodos = (req, res, next) => {
  if (ls.get("todos") == null) {
    ls.set("todos", todos);
  }
  next();
};

export { compararTodos };
