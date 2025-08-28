import { Metadata } from "next";
import CategoriesList from "./CategoriesList";

// ✅ الميتاداتا هنا، تتقرا من جوجل
export const metadata: Metadata = {
    title: "أقسام المقالات | آفاق العالم الرقمي",
    description: "استعرض جميع أقسام المقالات مثل تطوير الويب، تجربة المستخدم، وأمن المعلومات.",
};

export default function CategoriesPage() {
    return (
        <div>
            <CategoriesList />
        </div>
    );
}
