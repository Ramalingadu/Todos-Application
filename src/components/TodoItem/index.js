import './index.css'

const TodoItem = props => {
  const {list, onDeleted} = props
  const {title, id} = list

  const onDeleteList = () => {
    onDeleted(id)
  }

  return (
    <li className="listContainer">
      <div className="listDiv">
        <p>{title}</p>
        <button className="button" type="button" onClick={onDeleteList}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
