import { title } from "process"

export type UserType = {
    name: string
    hair: number
    adress: { city: string, house?: number }

}

export type LaptopType = {
    title: string
}

export type UserWithLAptopType = UserType & {
    laptop: LaptopType
}


export type UserWithBooks = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{ title: string, id: number }>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u, hair: u.hair / power
    }

    return copy
}

export function moveUSer(u: UserWithLAptopType, city: string) {
    return {
        ...u,
        adress: {
            ...u.adress,
            city: city
        }
    }
}

export function upgradeUserLaptop(u: UserWithLAptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function moveUserToOtherHouse(u: UserWithBooks, house: number) {
    return {
        ...u,
        adress: {
            ...u.adress,
            house: house
        }
    }
}

export function addNewBooksToUser(u: UserWithLAptopType & UserWithBooks, books: UserWithBooks["books"]) {
    return {
        ...u,
        books: [...u.books, ...books]
    }
}

export function updateBook(u: UserWithLAptopType & UserWithBooks, book: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === book ? newBook : b)
    }
}


export function removeBook(u: UserWithLAptopType & UserWithBooks, book: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    }
}

export function addCompany(u: UserWithLAptopType & WithCompaniesType, company: string) {
    return {
        ...u,
        companies: [...u.companies, { id: 3, title: company }]
    }
}

export function updateCompany(u: UserWithLAptopType & WithCompaniesType, id: number, title: string) {
    return {
        ...u,
        company: u.companies.map(c => c.id === id ? { ...c, title } : c)
    }
}

// export const updateCompany2 = (companies: {}, userName: string, companyID: number, newTitle: string) => {

//     let companyCopy = { ...companies }
//     companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID ? { ...c, title: newTitle } : c)


//     return companyCopy
// }