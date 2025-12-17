import { MouseEvent } from "react"

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
       alert(event.currentTarget.name)
        // alert("User have been deleted")
    }

const saveUser = () => {
    alert("user have been saved")
}

const onNameChanged = () => {
    console.log("Имя изменилось")
}

const focusLostHandler = () => {
    console.log("focus lost")
}

    return <div>Dimych 
        <textarea
        onBlur={focusLostHandler}
         onChange={onNameChanged}>

         </textarea>
        <button name="delete" tabIndex={3} onClick={deleteUser}>x</button>
        </div>
}