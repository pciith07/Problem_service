function filterObject(obj,allowedFields){
    const filteredData = {};

    for(const field of allowedFields){
        if(obj[field] !== undefined){
            filteredData[field] = obj[field];
        }
    }

    return filteredData;
}

module.exports = {
    filterObject
}