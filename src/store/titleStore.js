import { makeAutoObservable } from "mobx";

class TitleStore {
  phones = [];

  constructor() {
    makeAutoObservable(this);
  }
}

const titleStore = new TitleStore();

export default titleStore;
