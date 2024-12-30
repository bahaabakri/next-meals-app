
import Link from "next/link"
export default function MealsLayout({children}) {
    return (
        <>
            <div>
                <Link href="/meals/share">Share</Link>
            </div>

            <div>
                <Link href="/meals/burger">Burger</Link>
            </div>

            <div>
                <Link href="/meals/seefood">See Food</Link>
            </div>
            {children}
        </>
    ) 
}