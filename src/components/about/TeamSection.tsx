// components/about/TeamSection.tsx
import Image from 'next/image';

const teamMembers = [
    {
        name: 'محمد عبه',
        role: ' مؤسس ومدير تنفيذي للشركه',
        photo: '/images/teams/abah.jpg',
    },
    {
        name: ' علي سليمان',
        role: 'مصمم جرافيك ومسوق الكتروني ',
        photo: '/images/teams/alisuliman.jpg',
    },
    {
        name: ' صلاح القاره',
        role: ' مطور الواجهه الاماميه   ',
        photo: '/images/teams/salah.jpg',
    },
    {
        name: ' محمد الشرعبي    ',
        role: ' مطور الواجهه الاماميه    ',
        photo: '/images/teams/sharabi.jpg',
    },
    {
        name: ' عمار الشيباني ',
        role: ' تسويق الكتروني وفني ',
        photo: '/images/teams/amar.jpg',
    },
    {
        name: ' عبد الحافظ الماس  ',
        role: ' مطور الواجهه الخلفيه   ',
        photo: '/images/teams/almas.jpg',
    },
    
    {
        name: ' ايمن النعماني ',
        role: ' مطور الواجهه الاماميه ومختص بالعلامات التجاريه   ',
        photo: '/images/teams/ayman.jpg',
    },
    
    // أضف المزيد حسب الحاجة
];

export default function TeamSection() {
    return (
        <section className="max-w-6xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-semibold text-center mb-10 text-white">فريق العمل</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teamMembers.map(({ name, role, photo }) => (
                    <div
                        key={name}
                        className="bg-whi   te rounded-xl shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                    >
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-blue-500">
                            <Image
                                src={photo}
                                alt={name}
                                width={128}
                                height={128}
                                className="object-cover"
                                priority
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                        <p className="text-blue-600 mt-1">{role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
