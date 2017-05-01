function count(allSections, {sectionName, webUrl, webTitle}){
    if (sectionName in allSections) {
        allSections[sectionName].items.push({
            url: webUrl,
            title: webTitle
        });
    }
    else {
        allSections[sectionName] = {
            items: [{
                url: webUrl,
                title: webTitle
            }]
        };
    }
    return allSections;
}

function sort(counted){
    let sortable = [];

    for (let section in counted) {
        if (counted.hasOwnProperty(section)){
            sortable.push({
                name: section,
                links: counted[section].items
            });
        }
    }

    sortable.sort(function(a, b) {
        return b.links.length - a.links.length;
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
