
import { Metadata } from 'next';
import ServicesPage from './clintservece';

export const metadata: Metadata = {
    title: "خدماتنا التقنية | حلول متكاملة للأعمال",
    description: "اكتشف خدماتنا التقنية المتميزة، من تطوير المواقع والتطبيقات إلى التحليلات الرقمية، مصممة خصيصاً لنجاح أعمالك.",
    keywords: "خدمات تقنية, تطوير تطبيقات, تصميم مواقع, التحليلات الرقمية, حلول أعمال",
    robots: "index, follow"
};


export default function contact() {
    return < ServicesPage />;
}