// TODO: add webpack so we can use import/export

export default class ClassA {
  public hello: string;

  constructor(d: any) {
    this.hello = d && d.hello ? d.hello : '';
  }
}
