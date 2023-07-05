import { TodoStatus } from '../../types/TodoStatus';

interface Props {
  searchQuery: string,
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  todoStatus: string,
  setTodoStatus: React.Dispatch<React.SetStateAction<string>>,
}

export const TodoFilter: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  todoStatus,
  setTodoStatus,
}) => {
  const clickHandler = () => {
    setSearchQuery('');
  };

  const changeTodoStatusHandler = (
    event :React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setTodoStatus(`${event.target.value}`);
  };

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={todoStatus}
            onChange={changeTodoStatusHandler}
          >
            <option value={TodoStatus.all}>All</option>
            <option value={TodoStatus.active}>Active</option>
            <option value={TodoStatus.completed}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          value={searchQuery}
          className="input"
          placeholder="Search..."
          onChange={inputChangeHandler}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {searchQuery && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            <button
              aria-label="clear search query"
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={clickHandler}
            />
          </span>
        )}
      </p>
    </form>
  );
};