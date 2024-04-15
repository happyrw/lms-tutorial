"use client";

import { Category } from "@prisma/client";
import {
    FcMusic,
    FcOldTimeCamera,
    FcSportsMode,
    FcSalesPerformance,
    FcMultipleDevices,
    FcFilmReel,
    FcEngineering
} from "react-icons/fc";
import { IconType } from "react-icons/lib";
import CategoryItem from "./category-item";

interface CategoriesProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Computer Science": FcMusic,
    "Music": FcOldTimeCamera,
    "Fitness": FcSportsMode,
    "Photography": FcSalesPerformance,
    "Accounting": FcMultipleDevices,
    "Engineering": FcFilmReel,
    "Filming": FcEngineering,
}

export const Categories = ({ items }: CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
                <CategoryItem
                    key={item.id}
                    label={item.name}
                    icon={iconMap[item.name]}
                    value={item.id}
                />
            ))}
        </div>
    )
}