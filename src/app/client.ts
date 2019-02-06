export class GenderType {
  id: number;
  name: string;
}

export class MaritalStatus {
  id: number;
  name: string;
}

export class Client {
  id: number;
  firstName: string;
  lastName: string;
  pesel?: string;
  nip?: string;
  birthDate?: Date;
  gender?: GenderType;
  maritalStatus?: MaritalStatus;
}

export class Columns {
  id: number;
  column: string;
  active: boolean;
}
