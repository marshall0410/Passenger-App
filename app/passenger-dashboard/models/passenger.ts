export interface People {
  id: number;
  name: string;
  age: number;
  male: boolean | null;
  checkedInStatus: boolean;
  checkedInDate: number | null;
  children: Children[] | null;
}

export interface Children {
  name: string;
  age: number;
}
