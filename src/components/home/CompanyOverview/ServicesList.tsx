import { services } from '@/constants/services';

export default function ServicesList() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ slug, title, description, Icon, iconColorClass }) => (
                <div
                    key={slug}
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-blue-200"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors`}>
                            <Icon className={`text-2xl ${iconColorClass}`} />
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 group-hover:text-blue-700 transition-colors">
                            {title}
                        </h4>
                    </div>
                    <p className="text-gray-600 text-sm pl-11">{description}</p>
                </div>
            ))}
        </div>
    );
}
