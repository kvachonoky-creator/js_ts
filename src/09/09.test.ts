import { use } from "react";
import { UserType, UserWithBooks, UserWithLAptopType, WithCompaniesType, addCompany, addNewBooksToUser, makeHairStyle, moveUSer, moveUserToOtherHouse, removeBook, updateBook, updateCompany, upgradeUserLaptop } from "./09";


test('reference type test ', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: "Minsk",
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.adress).toBe(user.adress)
})

test('change adress ', () => {
    let user: UserWithLAptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const awesomeUser = moveUSer(user, "Kiev")

    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.adress).toBe(user.adress)
})

test('upgrade laptop to MackBook ', () => {
    let user: UserWithLAptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const movedUser = upgradeUserLaptop(user, "MackBook")

    expect(user).not.toBe(movedUser)
    expect(user.adress).toBe(movedUser.adress)
    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(movedUser.laptop.title).toBe("MackBook")
})

test('upgrade laptop to MackBook ', () => {
    let user: UserWithLAptopType & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(movedUser)
    expect(user.adress).toBe(movedUser.adress)
    expect(user.adress).not.toBe(movedUser.adress)
    expect(user.books).toBe(movedUser.books)
    expect(user.adress.house).toBe(movedUser.adress.house)
})

test('add new book to user ', () => {
    let user: UserWithLAptopType & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedUser = addNewBooksToUser(user, ['ts', 'rest Api'])

    expect(user).not.toBe(movedUser)
    expect(user.adress).toBe(movedUser.adress)
    expect(user.books).not.toBe(movedUser.books)
    expect(user.books[4]).toBe("ts")
    expect(user.books[5]).toBe("rest Api")
})

test('update js to ts ', () => {
    let user: UserWithLAptopType & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedUser = updateBook(user, "js", "ts")

    expect(user).not.toBe(movedUser)
    expect(user.adress).toBe(movedUser.adress)
    expect(user.books).not.toBe(movedUser.books)
    expect(user.books[2]).toBe("ts")
})

test('remove js ', () => {
    let user: UserWithLAptopType & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedUser = removeBook(user, "js")

    expect(user).not.toBe(movedUser)
    expect(user.adress).toBe(movedUser.adress)
    expect(user.books).not.toBe(movedUser.books)
    expect(user.books[0]).toBe("react")
})

test('add company ', () => {
    let user: UserWithLAptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{ id: 1, title: "Epam" }, { id: 2, title: "IT-Incubator" }]
    }

    // const movedUser = addCompany(user, "Google")
    const movedUser = updateCompany(user, 1, "Epam")
})


test('update company ', () => {
    let user: UserWithLAptopType = {
        name: 'Dimych',
        hair: 32,
        adress: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
    }

    let companies = {
        "Dimych" : [{ id: 1, title: "Epam" }, { id: 2, title: "IT-Incubator" }],
        "Artem" : [{ id: 2, title: "IT-Incubator" }]
    }


})