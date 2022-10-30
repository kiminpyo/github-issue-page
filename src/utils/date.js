const date = (arg) => {
    const formmatter = new Date(arg);

    const currentDate = new Date();
    console.log(currentDate);
    if (formmatter.getFullYear() === currentDate.getFullYear()) {
        const restMonth = currentDate.getMonth() - formmatter.getMonth();
        if(restMonth === 0){
            const restDate = currentDate.getDate() - formmatter.getDate()
            return `${restDate} days ago`
        }
        return `${restMonth} month ago`;
    }
    return arg.slice(0, 10);
};

export default date;
