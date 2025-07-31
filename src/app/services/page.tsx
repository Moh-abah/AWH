
import { Metadata } from 'next';
import ServicesPage from './clintservece';

export const metadata: Metadata = {
    title: "Services",
};

export default function contact() {
    return < ServicesPage />;
}