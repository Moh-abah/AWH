export const GA_MEASUREMENT_ID = 'G-Q8J07PG3QE';

// Track page views
export const pageview = (url) => {
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

// Track specific events (اختياري)
export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
