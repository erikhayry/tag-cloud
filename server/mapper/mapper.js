function count(allSections, {sectionName}){
    if (sectionName in allSections) {
        allSections[sectionName]++;
    }
    else {
        allSections[sectionName] = 1;
    }
    return allSections;
}

function sort(counted){
    let sortable = [];

    for (let section in counted) {
        if (counted.hasOwnProperty(section)){
            sortable.push({
                name: section,
                count: counted[section]
            });
        }
    }

    sortable.sort(function(a, b) {
        return b.count - a.count;
    });

    return sortable;
}


function toWeightedTagList(items){
    return sort(items.reduce(count, {}))
}

function mapper(json){
    return json.response ? toWeightedTagList(json.response.results) : [];
}

module.exports = mapper;
