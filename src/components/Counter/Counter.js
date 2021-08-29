//observer：监控当前组件使用到由mobx跟踪的observable state ，当前状态发生变化时通知React更新视图
import { observer } from 'mobx-react-lite';

function Counter({ counterStore }) {
  return (
    <div>
      <p> {counterStore.count}</p>
      <button onClick={() => counterStore.increment()}>加一</button>
      <button onClick={() => counterStore.reset()}>重置</button>
    </div>
  );
}
export default observer(Counter);
