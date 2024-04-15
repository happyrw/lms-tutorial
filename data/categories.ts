import { db } from "@/lib/db";

export const getCategories = async () => {
    try {
        const categories = await db.category.findMany({
            orderBy: {
                name: 'asc'
            },
        });

        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return []; 
    }
};
