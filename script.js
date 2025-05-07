var locationData =  {}


window.onload = function() {
    const selectRegion = doccument.getElementById("region"),
        selectProvince = document.getElementById("province"),
        selectMunicipality = document.getElementById("municipality"),
        selectBarangay = document.getElementById("barangay")
        
        selectProvince.disabled = true;
        selectMunicipality.disabled = true;
        selectBarangay.disabled = true;

        selects.forEach(select => {
            if (select.disabled == true){
                select.style.cursor = "auto"
            }
            else {
                select.style.cursor = "pointer"
            }
        })

        for(let region in locationData){
            selectRegion.options[selectRegion.options.length] = new Option(region, region);
        }
}