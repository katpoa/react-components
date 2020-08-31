// var App = () => (
//   <div>It's Monday! Up and At'em</div>
// );

// ReactDOM.render(<App />, document.getElementById('app'));

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <GroceryList />
//   </div>
// );

var GroceryList = () => (
  <div>
    <li>Cheezits </li>
    <li>Niuroumian </li>
  </div>
);

// var GroceryList = (items) => (
//   <div>
//     <li>{items[0]} </li>
//     <li>{items[1]} </li>
//   </div>
// );

var GroceryListItem = (item) => (
  <div>{item} </div>
);

ReactDOM.render(< GroceryList todos={['Cheezits', 'Niuroumian']} />, document.getElementById('app'));



// var TodoList = (props) => {

//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// }

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
//     {/* Here we are creating an instance of the `TodoList` component */}
//   </div>
// );

