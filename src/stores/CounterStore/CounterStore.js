import { makeAutoObservable } from 'mobx';

class CounterStore {
  //数值状态
  count = 10;
  constructor() {
    //将参数对象中的属性设为observable state
    //将参数对象中的方法设为action
    makeAutoObservable(this);
  }
  increment() {
    this.count += 1;
  }

  reset() {
    this.count = 0;
  }
}

export default CounterStore;
