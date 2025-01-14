import Link from 'next/link'
import styles from './page.module.css'
import MealsGrid from '@/components/meals/MealsGrid'
import {getAllMeals} from '@/database/meals'
import { Suspense } from 'react'

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our community.',
};
async function MealsGridWrapper() {
  const meals = await getAllMeals()
  return <MealsGrid  meals={meals}/>
}
export default function MealsPage() {
    return (
        <>
          <header className={styles['header']}>
            <h1>
                Delicious Meals, created{' '}
                <span className={styles['highlight']}>by you</span>
            </h1>
            <p>
                Choose your favorite recipe and cook it yourself, It is easy and fun!
            </p>
            <p className={styles['cta']}>
                <Link href="/meals/share">
                    Share Your Favorite Recipe
                </Link>
            </p>
          </header>
          <main className={styles['main']}>
            <Suspense fallback={<p className={styles['loading']}>Fetching Data</p>}>
              <MealsGridWrapper />
            </Suspense>
          </main>
        </>
      );
}