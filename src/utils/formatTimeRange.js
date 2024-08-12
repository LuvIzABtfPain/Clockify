// src/utils/formatTimeRange.js
export const formatTimeRange = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const formatTime = (date) => {
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return `${formatTime(startDate)} - ${formatTime(endDate)}`;
};