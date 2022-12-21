import * as C from "./App.styles";
import { useState } from 'react';
import { Item } from './types/item';
import { ListItem } from "./components/ListItem/index";
import { AddArea } from "./components/AddArea";

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar TypeScript', done: false },
    {id: 2, name: 'Comprar um bolo',done: true}
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea/>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
    </C.Area>
   </C.Container>
 );
}

export default App;