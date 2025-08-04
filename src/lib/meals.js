import slugify from "slugify";
import xss from "xss";
import Meal from "@/models/model";
import connectDB from "@/lib/db";
import cloudinary from "@/lib/cloudinary";

export async function getMeals() {
  await connectDB();
  const meals = await Meal.find().lean();
  return meals.map((meal) => ({
    ...meal,
    _id: meal._id.toString(),
  }));
}

export async function getMeal(slug) {
  await connectDB();
  const meal = await Meal.findOne({ slug }).lean();
  if (!meal) return null;
  return {
    ...meal,
    _id: meal._id.toString(),
  };
}

export async function saveMeal(meal) {
  await connectDB();

  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const fileBuffer = await meal.image.arrayBuffer();
  const base64Image = Buffer.from(fileBuffer).toString("base64");
  const dataUri = `data:${meal.image.type};base64,${base64Image}`;

  const result = await cloudinary.uploader.upload(dataUri, {
    folder: "nextlevel-meals",
    public_id: meal.slug,
    overwrite: true,
  });

  meal.image = result.secure_url;

  const createdMeal = await Meal.create(meal);
  return createdMeal;
}
