// 'use client';

// import Image from 'next/image';
// import SectionTitle from '../../ui/SectionTitle';

// const clients = [
//     { name: 'شركة يمن سوفت', logo: '/images/clients/yemensoft.png' },
//     { name: 'المركز التقني', logo: '/images/clients/techcenter.png' },
//     { name: 'متجر الراقي', logo: '/images/clients/raqy.png' },
//     { name: 'مطاعم ماجد', logo: '/images/clients/majed.png' },
//     { name: 'مؤسسة حلول', logo: '/images/clients/solu.png' },
// ];

// export default function ClientsSection() {
//     return (
//         <section className="py-16 px-6 bg-white">
//             <div className="max-w-6xl mx-auto text-center">
//                 <SectionTitle title="عملاؤنا" />
//                 <p className="text-gray-600 mb-10">شركاؤنا في النجاح وثقوا بنا لتطوير أعمالهم رقمياً.</p>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
//                     {clients.map((client, idx) => (
//                         <div key={idx} className="opacity-80 hover:opacity-100 transition-opacity duration-300">
//                             <Image
//                                 src={client.logo}
//                                 alt={client.name}
//                                 width={120}
//                                 height={60}
//                                 className="mx-auto object-contain h-16 w-auto"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
