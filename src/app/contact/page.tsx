// about/page.tsx (server component)
import { Metadata } from 'next';
import ContactPage from './clintcontact';

export const metadata: Metadata = {
    title: "contact",
};

export default function contact() {
    return < ContactPage />;
}