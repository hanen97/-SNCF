let test = async () => {
    try{
        var constFetch = await fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=lill')
    }catch (e){
        console.error(e);
    }
    var response = await constFetch.json()
    return response.records.map(
        (city) => {
            return city.fields.pltf_commune_libellemin;
        }
    )
}



test().then(function(listCities){
    console.log(listCities);
})