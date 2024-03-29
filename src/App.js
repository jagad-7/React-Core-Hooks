import './App.css';
import Count2 from './HooksConcepts/Count2';
import Exmp1 from './HooksConcepts/ExamplesUseState/Exmp1';
import FormHandling from './HooksConcepts/ExamplesUseState/FormHandling';
import TodoList from './HooksConcepts/ExamplesUseState/TodoList';
import TodoList2 from './HooksConcepts/ExamplesUseState/TodoList2';
import Index from './HooksConcepts/UseState/AdvanceUseState';
import { Name } from './HooksConcepts/UseState/AdvanceUseState2';
import { ArrayType } from './HooksConcepts/UseState/AdvanceUseState3';
import HooksConcepts from './HooksConcepts/UseState/UseState';
function App() {
  return (
    <div className="App">
      {/* <HooksConcepts />
      <Count2 />
      <Index />
      <Name />
      <ArrayType />
      <Exmp1 />
      <FormHandling />
      <TodoList /> */}
      <TodoList2 />

    </div>
  );
}
export default App;
