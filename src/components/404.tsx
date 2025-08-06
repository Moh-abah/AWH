// app/404.tsx أو app/404/page.tsx

import { Suspense } from "react";
import GATracker from "@/components/GATracker";

export default function NotFound() {
    return (
        <Suspense fallback={null}>
            <GATracker />
        </Suspense>
    );
}
