"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "@/database/meals";

function isValidText(text) {
  return text && text.trim() !== "";
}
// this function totally in server side to handle the action from submit form when add new meal
export default async function shareMealAction(prevState, formData) {
  const meal = Object.fromEntries(formData);
  console.log(meal);
  
  // validation
  if (
    !isValidText(meal.title) ||
    !isValidText(meal.name) ||
    !isValidText(meal.summary) ||
    !isValidText(meal.instructions) ||
    !isValidText(meal.email) || !meal.email.includes('@') ||
    !meal.image || meal.image.size == 0
  ) {
    console.log('here there is an error in validation');
    return {
        message: 'Invalid Input, please try again'
    }
  }
    await saveMeal(meal);
  return redirect("/meals");
}
