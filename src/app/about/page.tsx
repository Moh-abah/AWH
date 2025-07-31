// about/page.tsx (server component)
import { Metadata } from 'next';
import ClientAbout from './ClientAbout';

export const metadata: Metadata = {
    title: "About",
};

export default function About() {
    return <ClientAbout />;
}