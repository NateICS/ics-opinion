export const emailToName = (email: string) => {
  const split = email.split("@")[0].split(".")

  return (
    split[0].charAt(0).toUpperCase() +
    split[0].slice(1) +
    " " +
    split[1].charAt(0).toUpperCase() +
    split[1].slice(1)
  )
}
