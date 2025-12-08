import { Studentype } from "../02"

export const addSkill = (st: Studentype, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: Studentype) {
    s.isActive = true
}


export const doesStudentLiveIn = (s: Studentype, cityName: string) => {
    return s.address.city.title === cityName
}