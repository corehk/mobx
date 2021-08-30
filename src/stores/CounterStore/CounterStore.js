import { makeAutoObservable } from 'mobx';

class CounterStore {
  //数值状态
  count = 10;
  constructor() {
    //将参数对象中的属性设为observable state
    //将参数对象中的方法设为action
    makeAutoObservable(this, { reset: true }, { autoBind: true });
  }
  increment() {
    this.count += 1;
  }

  reset() {
    this.count = 0;
  }
}

export default CounterStore;
//状态变化更新视图的必要条件
// 1.状态需要被标记为observable state
// 2.更新状态的方法被标记为action方法
// 3.组件视图必须通过observer方法包裹
// 可以使用makeAutoObservable方法将对象属性设置为observable state将对象方法设置为action
