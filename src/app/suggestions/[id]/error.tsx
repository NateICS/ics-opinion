"use client"

import Link from "next/link"

const Error = () => {
  return (
    <>
      <h1>Error - 404</h1>
      <p>We couldn't find that suggestion.</p>
      <Link href={"/"}>Back Home</Link>
    </>
  )
}

export default Error
