export interface Note {
  _id?: string;
  text: string;
  cts: Date | string;
  active: boolean;
  selected: boolean;
}
