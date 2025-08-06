"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ContactPage from "@/app/contact/clintcontact";

function Content() {
    const searchParams = useSearchParams();
    return <div>Page Not Found</div>;
}

export default function NotFoundPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ContactPage />
        </Suspense>
    );
}
