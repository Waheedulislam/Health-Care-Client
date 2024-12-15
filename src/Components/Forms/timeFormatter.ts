export const timeFormatter = (time: string) => {
    if (!time) {
        console.error("Invalid time input: time is empty or undefined.");
        return "Invalid Time";
    }

    const date = new Date(time);

    if (isNaN(date.getTime())) {
        console.error(`Invalid time input: "${time}" could not be parsed.`);
        return "Invalid Time";
    }

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
};
