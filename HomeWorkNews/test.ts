const newsFiveMoreThan = news.results.filter(function(element, index){
    return element.language === "thai" && element.source_name.includes("Thai Pbs News")
}).map(function(element, index){
    return ({
        title : element.title,
        link : element.link,
        description : element.description,
        source_id : element.source_id,
        image_url : element.image_url
    })

})

console.log(newsFiveMoreThan)