import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    latesTodosList: initialTodosList,
  }

  onDeleted = id => {
    const {latesTodosList} = this.state
    const latestTodoList1 = latesTodosList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({latesTodosList: latestTodoList1})
  }

  render() {
    const {latesTodosList} = this.state
    return (
      <div className="todosContainer">
        <div className="container">
          <h1 className="mainHeading">Simple Todos</h1>
          <ul>
            {latesTodosList.map(eachItem => (
              <TodoItem
                list={eachItem}
                key={eachItem.id}
                onDeleted={this.onDeleted}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
