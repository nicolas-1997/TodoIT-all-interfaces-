export interface User{
  id: number,
  email:string,
  fullName: string,
  address: string,
  cellPhone: number,
  isAccepted: boolean,
  isDeleted: boolean,
  observations: string,
  password: string,
  vehicle: Vehicle,
  rol: Rol
}

export interface Vehicle{
  id: number,
  name: string,
  isDeleted: number
}
export interface Rol{
  id: number | 0,
  name: string,
  isDeleted: number
}

export interface Login{
  email: string,
  password: string
}
export interface LocalStorageData extends Omit<User, 'isAccepted'| 'password' | 'isDeleted' | 'observations' | 'vehicle' > {

}
