const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

const StringUtils = {
    capitalizeFirstLetter
};

export default StringUtils;