export interface Login{
  email:string,
  password:string
}
export interface Register  {
  email: string,
  fullName: string,
  address: string,
  cellPhone: number,
  isAccepted: boolean,
  isDeleted: boolean,
  observations: string,
  password: string,
  vehicle: null,
  rol: {
    id: number,
    name: string,
    isDeleted: number
  }
}
