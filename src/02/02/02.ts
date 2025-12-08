export type StreetType = {
    title: string
}

export type AdressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: false
    address: AdressType
}


export type CityType = {
    title: string
    houses: HouseType
    governmentBuildings: Array<string>
    citizensNumber: number
}