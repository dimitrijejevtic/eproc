export class PropertyCollection<T>  {
  private _propertys: Map<string, T> = new Map<string, T>();

  public get length(): number {
    return this._propertys.size;
  }
  public get(key: string): T {
    return this._propertys.get(key);
  }
  public set(key: string, value: T): void {
    this._propertys.set(key, value);
  }
  public deletePair(key: string): void {
    this._propertys.delete(key);
  }
  public getValue() {
    return this._propertys;
  }
}

export class ListColumnDisplay {
  name: string;
  type: string;
}
