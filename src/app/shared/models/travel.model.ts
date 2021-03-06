export interface Travel{
  id: number,
  creationDate: Date,
  lastStatusTravel:number,
  travelEquipmentDTOs:TravelEquipmentDTOs[],
}
export interface TravelEquipmentDTOs{
  id:number,
  operationDate: Date,
  observation: string,
  cadete: Cadete,
  operator: Operator,
  equipment:Equipment
  statusTravel:number
}
export interface Operator{
  id:number,
  email:string,
  fullName:string,
  address:string,
  cellPhone:number
}
export interface Equipment{
  id:number,
  mark:  string
  model:  string
  failure: string
  clientId: number,
  cliente: Cliente
}
export interface Cliente{
  id: number,
  email: string,
  fullName: string,
  address: string,
  cellPhone: number
}
export interface Cadete{
  id: number,
  email: string,
  fullName: string,
  address:number,
  cellPhone: number
}

export interface TravelPost{
  travelId: number,
  statusTravel: number,
}

export interface SolicitarViaje{
  idCliente: number,
  mark: string,
  model:string,
  failure:string,

}
