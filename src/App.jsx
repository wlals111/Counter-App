import './App.css';
import Controller from './components/controller';
import Viewer from './components/Viewer';
import { useState } from 'react';

function App() {
  // 데이터는 부모에서 자식으로 전달되기 때문에 (형제끼리는 공유 불가능)
  // App.js에서 state를 관리하고 그 자식 컴퍼넌트들에게 props로 전달해줘야 함
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="app">
      <h1>Counter App</h1>

      <section className="viewer">
        <Viewer count={count} />
      </section>

      <section className="controller">
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
