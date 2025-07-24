// src/app/utils/theme.ts
export type Theme = 'light' | 'dark';

export const themeColors = {
    dark: {
        background: {
            primary: 'bg-gradient-to-br from-dwh-navy via-dwh-navy-dark to-black',
            radialGradient: [
                'radial-gradient(circle at 20% 50%, rgba(57, 255, 20, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(74, 168, 240, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(57, 255, 20, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(74, 168, 240, 0.1) 0%, transparent 50%)',
            ],
            overlay: 'bg-black/20',
            particleOpacity: 'opacity-60',
        },
        text: {
            mainTitle: {
                D: 'text-dwh-neon-green',
                W: 'text-dwh-sky-blue',
                H: 'text-dwh-neon-green',
            },
            companyName: 'text-dwh-white',
            subtitle: 'text-dwh-metallic-gray-light',
            description: 'text-dwh-metallic-gray-light',
            statsNumber: 'text-dwh-neon-green',
            statsLabel: 'text-dwh-metallic-gray-light',
            scrollText: 'text-dwh-metallic-gray-light hover:text-dwh-neon-green',
        },
        buttons: {
            primary: {
                base: 'bg-dwh-neon-green text-dwh-navy',
                hover: 'hover:bg-gradient-to-r from-dwh-neon-green-dark to-dwh-sky-blue',
            },
            secondary: {
                border: 'border-dwh-white hover:border-dwh-neon-green',
                text: 'text-dwh-white hover:text-dwh-neon-green',
            },
        },
        elements: {
            globeGradient: 'bg-gradient-radial from-dwh-neon-green/10 via-transparent to-transparent',
            sectionBorder: 'border-dwh-metallic-gray/20',
        },
    },

    light: {
        background: {
            primary: 'bg-gradient-to-br from-blue-50 via-sky-100 to-blue-100',
            radialGradient: [
                'radial-gradient(circle at 20% 50%, rgba(100, 200, 255, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(150, 220, 255, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(100, 200, 255, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(150, 220, 255, 0.2) 0%, transparent 50%)',
            ],
            overlay: 'bg-white/30',
            particleOpacity: 'opacity-40',
        },
        text: {
            mainTitle: {
                D: 'text-blue-600',
                W: 'text-sky-500',
                H: 'text-blue-600',
            },
            companyName: 'text-blue-900',
            subtitle: 'text-slate-600',
            description: 'text-slate-600',
            statsNumber: 'text-blue-500',
            statsLabel: 'text-slate-500',
            scrollText: 'text-slate-600 hover:text-blue-500',
        },
        buttons: {
            primary: {
                base: 'bg-blue-500 text-white',
                hover: 'hover:bg-gradient-to-r from-blue-600 to-sky-500',
            },
            secondary: {
                border: 'border-slate-600 hover:border-blue-500',
                text: 'text-slate-600 hover:text-blue-500',
            },
        },
        elements: {
            globeGradient: 'bg-gradient-radial from-blue-200/30 via-transparent to-transparent',
            sectionBorder: 'border-slate-300',
        },
    }
};

export const getThemeColors = (theme: Theme) => themeColors[theme];