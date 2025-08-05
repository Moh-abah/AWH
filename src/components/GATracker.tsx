"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-K953T969DH";

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

export default function GATracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!window.gtag) return;
        window.gtag("config", GA_MEASUREMENT_ID, {
            page_path: pathname,
        });
    }, [pathname]);

    return null;
}
