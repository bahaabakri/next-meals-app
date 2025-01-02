'use client'
export default function GlobalErrorPage({error}) {
    console.log(error)
    return (
        <main className="error">
            <h1>{error?.statusCode || 'Oops'}</h1>
            <p>{error?.message || 'Something went wrong'}</p>
        </main>
    )
}