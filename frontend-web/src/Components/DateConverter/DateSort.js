export const DateSort = (dateA, dateB) => {
    console.log(dateA);
    console.log(dateB);
    const dateAArray = dateA.slice(0, 10).split('-').map(str => Number(str)); //YY-MM-DD format
    const dateBArray = dateB.slice(0, 10).split('-').map(str => Number(str)); //YY-MM-DD format

    const yearDifference = dateAArray[0] - dateBArray[0];
    const monthDifference = dateAArray[1] - dateBArray[1];
    const dayDifference = dateAArray[2] - dateBArray[2];
    // console.log(yearDifference);
    // console.log(monthDifference);
    // console.log(dayDifference);

    if (yearDifference > 0) {
        return 1;
    } else if (yearDifference === 0) {
        if(monthDifference > 0) {
            return 1;
        }else if (monthDifference === 0) {
            if (dayDifference > 0) {
                return 1;
            } else if(dayDifference === 0) {
                return 0;
            } else {
                return -1;
            }
        } else {
            return -1
        }
    } else{
        return -1;
    }
}