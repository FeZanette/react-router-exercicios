export const goToHome = (navigate) => {
    navigate ("/")
}

export const goToProfile = (navigate, name, id) => {
    navigate (`/profile/${name}/${id}`)
}