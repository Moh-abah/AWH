export const getCategoryColor = (category: string) => {
    switch (category) {
        case 'web':
            return 'from-blue-600 to-indigo-700';
        case 'mobile':
            return 'from-green-600 to-teal-700';
        
        case 'identity':
            return 'from-pink-600 to-rose-700';
        case 'social':
            return 'from-indigo-600 to-violet-700';
        case 'digitalMarketing':
            return 'from-red-600 to-orange-800';
        case 'banars':
            return 'from-yello-600 to-red-800'; 
        case 'hosting':
            return 'from-cyan-600 to-sky-700';
        default:
            return 'from-gray-600 to-gray-800';
    }
};
