var locationData =  {
    // REGION 1: National Capital Region (NCR)
    "National Capital Region (NCR)": {
        "Manila": {
            "Malate": ["Barangay 700", "Barangay 701", "Barangay 702", "Barangay 703", "Barangay 704"],
            "Intramuros": ["Barangay 655", "Barangay 656", "Barangay 657", "Barangay 658", "Barangay 659"],
            "Sampaloc": ["Barangay 395", "Barangay 396", "Barangay 397", "Barangay 398", "Barangay 399"],
            "Tondo": ["Barangay 1", "Barangay 2", "Barangay 3", "Barangay 4", "Barangay 5"],
            "Binondo": ["Barangay 287", "Barangay 288", "Barangay 289", "Barangay 290", "Barangay 291"]
        },
        "Quezon City": {
            "Diliman": ["Barangay Pinyahan", "Barangay Krus na Ligas", "Barangay UP Campus", "Barangay Central", "Barangay Old Capitol Site"],
            "Cubao": ["Barangay Immaculate Conception", "Barangay E. Rodriguez", "Barangay Socorro", "Barangay San Martin de Porres", "Barangay Silangan"],
            "Novaliches": ["Barangay Bagbag", "Barangay Gulod", "Barangay San Agustin", "Barangay Sta. Monica", "Barangay Kaligayahan"],
            "Galas": ["Barangay Kamuning", "Barangay Laging Handa", "Barangay Malaya", "Barangay Paligsahan", "Barangay Pinagkaisahan"],
            "Project 4": ["Barangay Quirino 2-A", "Barangay Quirino 2-B", "Barangay Quirino 2-C", "Barangay Quirino 3-A", "Barangay San Isidro Labrador"]
        },
        "Makati": {
            "Poblacion": ["Barangay Poblacion", "Barangay Tejeros", "Barangay Olympia", "Barangay Valenzuela", "Barangay Pio del Pilar"],
            "Bel-Air": ["Barangay Bel-Air", "Barangay San Lorenzo", "Barangay Urdaneta", "Barangay Magallanes", "Barangay Dasmarinas"],
            "Forbes Park": ["Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5"],
            "San Antonio": ["West Sector", "East Sector", "North Sector", "South Sector", "Central Sector"],
            "Cembo": ["Purok 1", "Purok 2", "Purok 3", "Purok 4", "Purok 5"]
        },
        "Pasay": {
            "Baclaran": ["Barangay 76", "Barangay 77", "Barangay 78", "Barangay 79", "Barangay 80"],
            "Malibay": ["Barangay 145", "Barangay 146", "Barangay 147", "Barangay 148", "Barangay 149"],
            "Pasay Proper": ["Barangay 1", "Barangay 2", "Barangay 3", "Barangay 4", "Barangay 5"],
            "San Isidro": ["Barangay 132", "Barangay 133", "Barangay 134", "Barangay 135", "Barangay 136"],
            "Santa Clara": ["Barangay 186", "Barangay 187", "Barangay 188", "Barangay 189", "Barangay 190"]
        },
        "Taguig": {
            "Bonifacio Global City": ["Barangay Fort Bonifacio", "Barangay Pinagsama", "Barangay Western Bicutan", "Barangay Upper Bicutan", "Barangay Central Bicutan"],
            "Signal Village": ["Area A", "Area B", "Area C", "Area D", "Area E"],
            "Lower Bicutan": ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5"],
            "New Lower Bicutan": ["Block 1", "Block 2", "Block 3", "Block 4", "Block 5"],
            "North Signal Village": ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5"]
        }
    },

    // REGION 2: Calabarzon
    "Calabarzon (Region IV-A)": {
        "Cavite": {
            "Bacoor": ["Barangay Alima", "Barangay Aniban", "Barangay Talaba", "Barangay Zapote", "Barangay Niog"],
            "Dasmariñas": ["Barangay Burol", "Barangay Langkaan", "Barangay Paliparan", "Barangay Sabang", "Barangay Salawag"],
            "Imus": ["Barangay Anabu", "Barangay Buhay na Tubig", "Barangay Malagasang", "Barangay Medicion", "Barangay Toclong"],
            "General Trias": ["Barangay Buenavista", "Barangay Governor's Drive", "Barangay Manggahan", "Barangay Pasong Camachile", "Barangay San Francisco"],
            "Tagaytay": ["Barangay Asisan", "Barangay Kaybagal", "Barangay Maharlika", "Barangay Mendez Crossing", "Barangay Silang Junction"]
        },
        "Laguna": {
            "Santa Rosa": ["Barangay Aplaya", "Barangay Balibago", "Barangay Don Jose", "Barangay Macabling", "Barangay Tagapo"],
            "Calamba": ["Barangay Canlubang", "Barangay Mayapa", "Barangay Paciano Rizal", "Barangay Parian", "Barangay Real"],
            "San Pablo": ["Barangay Dolores", "Barangay San Cristobal", "Barangay San Lucas 1", "Barangay San Roque", "Barangay Santiago 1"],
            "Biñan": ["Barangay Canlalay", "Barangay Langkiwa", "Barangay Malaban", "Barangay Santo Tomas", "Barangay Tubigan"],
            "Los Baños": ["Barangay Anos", "Barangay Batong Malake", "Barangay Baybayin", "Barangay Mayondon", "Barangay Timugan"]
        },
        "Batangas": {
            "Batangas City": ["Barangay Alangilan", "Barangay Balagtas", "Barangay Kumintang Ibaba", "Barangay Poblacion", "Barangay Sta. Rita Karsada"],
            "Lipa": ["Barangay Bagong Pook", "Barangay Bolbok", "Barangay Lodlod", "Barangay Sabang", "Barangay Talisay"],
            "Santo Tomas": ["Barangay Poblacion 1", "Barangay San Felix", "Barangay San Fernando", "Barangay San Francisco", "Barangay San Rafael"],
            "Tanauan": ["Barangay Bagumbayan", "Barangay Darasa", "Barangay Poblacion 1", "Barangay Sala", "Barangay Trapiche"],
            "San Juan": ["Barangay Calitcalit", "Barangay Lipahan", "Barangay Poblacion", "Barangay Poctol", "Barangay Sumaguing"]
        },
        "Rizal": {
            "Antipolo": ["Barangay Bagong Nayon", "Barangay Dalig", "Barangay Mayamot", "Barangay San Isidro", "Barangay San Jose"],
            "Cainta": ["Barangay San Andres", "Barangay San Isidro", "Barangay San Juan", "Barangay Santo Domingo", "Barangay Santo Niño"],
            "Taytay": ["Barangay Dolores", "Barangay Muzon", "Barangay San Isidro", "Barangay San Juan", "Barangay Santa Ana"],
            "Rodriguez (Montalban)": ["Barangay Balite", "Barangay Burgos", "Barangay Geronimo", "Barangay Manggahan", "Barangay San Isidro"],
            "San Mateo": ["Barangay Ampid 1", "Barangay Dulong Bayan 1", "Barangay Gulod Malaya", "Barangay Malanday", "Barangay Santo Niño"]
        },
        "Quezon": {
            "Lucena": ["Barangay Dalahican", "Barangay Gulang-Gulang", "Barangay Ibabang Dupay", "Barangay Mayao Silangan", "Barangay Talao-Talao"],
            "Tayabas": ["Barangay Alitao", "Barangay Isabang", "Barangay Lalo", "Barangay Mateuna", "Barangay Palola"],
            "Sariaya": ["Barangay Concepcion", "Barangay Janagdong", "Barangay Manggalang", "Barangay Montecillo", "Barangay San Roque"],
            "Candelaria": ["Barangay Bukal Sur", "Barangay Kinatihan", "Barangay Masin Norte", "Barangay Malabanban", "Barangay San Andres"],
            "Pagbilao": ["Barangay Alupaye", "Barangay Ibabang Polo", "Barangay Malicboy", "Barangay Pinagbayanan", "Barangay Talipan"]
        }
    },

    // REGION 3: Central Luzon
    "Central Luzon (Region III)": {
        "Bulacan": {
            "Malolos": ["Barangay Atlag", "Barangay Balite", "Barangay Caingin", "Barangay Guinhawa", "Barangay Longos"],
            "Meycauayan": ["Barangay Bancal", "Barangay Bahay Pare", "Barangay Calvario", "Barangay Liputan", "Barangay Pandayan"],
            "San Jose Del Monte": ["Barangay Citrus", "Barangay Fatima", "Barangay Kaypian", "Barangay Muzon", "Barangay Tungkong Mangga"],
            "Baliwag": ["Barangay Concepcion", "Barangay Makinabang", "Barangay Pagala", "Barangay Sabang", "Barangay Tarcan"],
            "Marilao": ["Barangay Abangan Norte", "Barangay Ibayo", "Barangay Loma de Gato", "Barangay Santa Rosa I", "Barangay Tabing Ilog"]
        },
        "Pampanga": {
            "San Fernando": ["Barangay Calulut", "Barangay Del Carmen", "Barangay Dolores", "Barangay San Isidro", "Barangay Telabastagan"],
            "Angeles": ["Barangay Balibago", "Barangay Cutcut", "Barangay Lourdes Sur", "Barangay Pampang", "Barangay Santo Rosario"],
            "Mabalacat": ["Barangay Dau", "Barangay Dolores", "Barangay Mabiga", "Barangay Poblacion", "Barangay Santa Ines"],
            "Guagua": ["Barangay Ascomo", "Barangay Plaza Burgos", "Barangay San Antonio", "Barangay San Miguel", "Barangay Santa Filomena"],
            "Mexico": ["Barangay Balas", "Barangay Lagundi", "Barangay Pangatlan", "Barangay San Carlos", "Barangay Suclaban"]
        },
        "Tarlac": {
            "Tarlac City": ["Barangay Aguso", "Barangay Burot", "Barangay Ligtasan", "Barangay San Miguel", "Barangay Villa Bacolor"],
            "Capas": ["Barangay Aranguren", "Barangay Cutcut II", "Barangay Lawy", "Barangay Santa Lucia", "Barangay Talaga"],
            "Concepcion": ["Barangay Balutu", "Barangay Magao", "Barangay Panlisiqui", "Barangay San Nicolas A", "Barangay Tinang"],
            "Paniqui": ["Barangay Apulid", "Barangay Estacion", "Barangay Patalan", "Barangay Poblacion Norte", "Barangay Samput"],
            "Gerona": ["Barangay Bularit", "Barangay Caturay", "Barangay New Salem", "Barangay Parsolingan", "Barangay Singat"]
        },
        "Nueva Ecija": {
            "Cabanatuan": ["Barangay Aduas Centro", "Barangay Kapitan Pepe", "Barangay Palagay", "Barangay San Josef Norte", "Barangay Valle Cruz"],
            "San Jose City": ["Barangay Abar 1st", "Barangay Caanawan", "Barangay Malasin", "Barangay Palestina", "Barangay Santo Niño"],
            "Gapan": ["Barangay Kapalangan", "Barangay Maburak", "Barangay Malimba", "Barangay Pambuan", "Barangay San Lorenzo"],
            "Palayan": ["Barangay Atate", "Barangay Imelda Valley", "Barangay Malate", "Barangay Mapait", "Barangay Singalat"],
            "Santa Rosa": ["Barangay Cojuangco", "Barangay Lourdes", "Barangay Matingkis", "Barangay San Josef", "Barangay Santo Rosario"]
        },
        "Zambales": {
            "Olongapo": ["Barangay Banicain", "Barangay East Bajac-Bajac", "Barangay Gordon Heights", "Barangay Old Cabalan", "Barangay Santa Rita"],
            "Iba": ["Barangay Amungan", "Barangay Lipay-Dingin", "Barangay Palanginan", "Barangay San Agustin", "Barangay Santo Rosario"],
            "Subic": ["Barangay Asinan", "Barangay Baraca-Camachile", "Barangay Calapandayan", "Barangay Matain", "Barangay Santo Tomas"],
            "San Antonio": ["Barangay Antipolo", "Barangay Burgos", "Barangay Poblacion", "Barangay San Juan", "Barangay San Miguel"],
            "Castillejos": ["Barangay Buenavista", "Barangay Nagbayan", "Barangay Nagbunga", "Barangay San Agustin", "Barangay San Pablo"]
        }
    },

    // REGION 4: Western Visayas
    "Western Visayas (Region VI)": {
        "Iloilo": {
            "Iloilo City": ["Barangay Balantang", "Barangay Buhang", "Barangay Molo", "Barangay San Pedro", "Barangay Tanza"],
            "Oton": ["Barangay Alegre", "Barangay Bita", "Barangay Caboloan", "Barangay Poblacion South", "Barangay Trapiche"],
            "Pavia": ["Barangay Anilao", "Barangay Jaro", "Barangay Pagsanga-an", "Barangay Pandac", "Barangay Ungka"],
            "Santa Barbara": ["Barangay Bagumbayan", "Barangay Buyo", "Barangay Cabugao Norte", "Barangay Lanag", "Barangay Tuburan"],
            "San Miguel": ["Barangay Bagacay", "Barangay Consolacion", "Barangay Ilajas", "Barangay San Jose", "Barangay Tacuyong Norte"]
        },
        "Negros Occidental": {
            "Bacolod": ["Barangay Alangilan", "Barangay Estefania", "Barangay Granada", "Barangay Mansilingan", "Barangay Tangub"],
            "Silay": ["Barangay Balaring", "Barangay Guimbala-on", "Barangay Hawaiian", "Barangay Lantad", "Barangay Rizal"],
            "Talisay": ["Barangay Cabatangan", "Barangay Concepcion", "Barangay Dos Hermanas", "Barangay Matab-ang", "Barangay Zone 12"],
            "Cadiz": ["Barangay Caduhaan", "Barangay Caduha-an", "Barangay Central Poblacion", "Barangay Luna", "Barangay Zone 2"],
            "Bago": ["Barangay Atipuluan", "Barangay Binubuhan", "Barangay Ma-ao", "Barangay Sampinit", "Barangay Tabunan"]
        },
        "Capiz": {
            "Roxas City": ["Barangay Balijuagan", "Barangay Banica", "Barangay Culasi", "Barangay Inzo Arnaldo", "Barangay Lawa-an"],
            "Panay": ["Barangay Agbalo", "Barangay Binangig", "Barangay Daga", "Barangay Mesa", "Barangay Poblacion"],
            "Pontevedra": ["Barangay Agunit", "Barangay Hipona", "Barangay Lantangan", "Barangay Malag-it", "Barangay Tacas"],
            "Dao": ["Barangay Agtambo", "Barangay Balucuan", "Barangay Manhoy", "Barangay Matagnop", "Barangay Poblacion"],
            "Dumalag": ["Barangay Concepcion", "Barangay Dolores", "Barangay Jalbuena", "Barangay San Martin", "Barangay Santa Cruz"]
        },
        "Aklan": {
            "Kalibo": ["Barangay Andagao", "Barangay Estancia", "Barangay Mobo", "Barangay Poblacion", "Barangay Tigayon"],
            "Boracay (Malay)": ["Barangay Balabag", "Barangay Manoc-Manoc", "Barangay Yapak", "Barangay Argao", "Barangay Cubay"],
            "Banga": ["Barangay Agbobolo", "Barangay Cupang", "Barangay Libas", "Barangay Poblacion", "Barangay Tabyawan"],
            "Ibajay": ["Barangay Aquino", "Barangay Capilijan", "Barangay Laguinbanua", "Barangay Poblacion", "Barangay San Jose"],
            "New Washington": ["Barangay Dumaguit", "Barangay Guinbaliwan", "Barangay Jugas", "Barangay Poblacion", "Barangay Polo"]
        },
        "Antique": {
            "San Jose": ["Barangay Barangan", "Barangay Funda-Dalipe", "Barangay Madrangca", "Barangay San Angel", "Barangay San Pedro"],
            "Sibalom": ["Barangay Bongbongan", "Barangay Cabladan", "Barangay Iglinab", "Barangay Poblacion", "Barangay Tigbalua"],
            "Culasi": ["Barangay Alojipan", "Barangay Buenavista", "Barangay Flores", "Barangay Malacañang", "Barangay Poblacion"],
            "Hamtic": ["Barangay Bantayan", "Barangay Fabrica", "Barangay Linaban", "Barangay Piapi", "Barangay Poblacion"],
            "Bugasong": ["Barangay Bagtason", "Barangay Cubay South", "Barangay Jinalinan", "Barangay Pangalcagan", "Barangay Poblacion"]
        }
    },

    // REGION 5: Mindanao
    "Davao Region (Region XI)": {
        "Davao del Sur": {
            "Davao City": ["Barangay Buhangin", "Barangay Catalunan Grande", "Barangay Matina", "Barangay Talomo", "Barangay Toril"],
            "Digos": ["Barangay Aplaya", "Barangay Cogon", "Barangay Matti", "Barangay Soong", "Barangay Tres de Mayo"],
            "Bansalan": ["Barangay Alegre", "Barangay Bitaug", "Barangay Magsaysay", "Barangay Poblacion", "Barangay Tubod"],
            "Hagonoy": ["Barangay Aplaya", "Barangay Balutakay", "Barangay Guihing", "Barangay Poblacion", "Barangay Sacub"],
            "Padada": ["Barangay Harada Butay", "Barangay Lower Malinao", "Barangay Palili", "Barangay Poblacion", "Barangay San Isidro"]
        },
        "Davao del Norte": {
            "Tagum": ["Barangay Apokon", "Barangay Bincungan", "Barangay Mankilam", "Barangay Pagsabangan", "Barangay Visayan Village"],
            "Panabo": ["Barangay Dapco", "Barangay Gredu", "Barangay Mabunao", "Barangay New Malaga", "Barangay San Francisco"],
            "Samal": ["Barangay Camudmud", "Barangay Kinawitnon", "Barangay Penaplata", "Barangay San Isidro", "Barangay Tagbitan-ag"],
            "Kapalong": ["Barangay Capungagan", "Barangay Florida", "Barangay Gabuyan", "Barangay Mamacao", "Barangay Semong"],
            "New Corella": ["Barangay Cabidianan", "Barangay Limbaan", "Barangay Mesaoy", "Barangay Patrocenio", "Barangay San Roque"]
        },
        "Davao Oriental": {
            "Mati": ["Barangay Badas", "Barangay Central", "Barangay Dahican", "Barangay Don Salvador Lopez", "Barangay Macambol"],
            "Baganga": ["Barangay Batawan", "Barangay Campawan", "Barangay Kinablangan", "Barangay Poblacion", "Barangay Salingcomot"],
            "Caraga": ["Barangay Caningag", "Barangay Lamiawan", "Barangay Manorigao", "Barangay Poblacion", "Barangay Santiago"],
            "Lupon": ["Barangay Calapagan", "Barangay Ilangay", "Barangay Mabini", "Barangay Poblacion", "Barangay San Isidro"],
            "Tarragona": ["Barangay Cabagayan", "Barangay Central", "Barangay Lucatan", "Barangay Ompao", "Barangay Tomoaong"]
        },
        "Davao de Oro": {
            "Nabunturan": ["Barangay Anislagan", "Barangay Libay-Libay", "Barangay Magsaysay", "Barangay New Sibonga", "Barangay Poblacion"],
            "Maco": ["Barangay Anibongan", "Barangay Calabcab", "Barangay Mainit", "Barangay New Barili", "Barangay Taglawig"],
            "Mawab": ["Barangay Andili", "Barangay Bawani", "Barangay Nueva Visayas", "Barangay Poblacion", "Barangay Salvacion"],
            "Monkayo": ["Barangay Banlag", "Barangay Casoon", "Barangay Haguimitan", "Barangay Poblacion", "Barangay Upper Ulip"],
            "New Bataan": ["Barangay Andap", "Barangay Cabinuangan", "Barangay Katipunan", "Barangay Poblacion", "Barangay San Roque"]
        },
        "Davao Occidental": {
            "Malita": ["Barangay Bito", "Barangay Buhangin", "Barangay Kinabentan", "Barangay New Argao", "Barangay Poblacion"],
            "Santa Maria": ["Barangay Basiawan", "Barangay Kidadan", "Barangay Pongpong", "Barangay San Agustin", "Barangay Tanglad"],
            "Don Marcelino": ["Barangay Calian", "Barangay Kinanga", "Barangay Lawa", "Barangay Nueva Villa", "Barangay South Lamidan"],
            "Jose Abad Santos": ["Barangay Bukid", "Barangay Caburan", "Barangay Culaman", "Barangay Malalan", "Barangay Sugal"],
            "Sarangani": ["Barangay Camahual", "Barangay Malalag", "Barangay Patuco", "Barangay Poblacion", "Barangay Tagen"]
        }
    }
};


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Location data handling (kept from original code)
  window.onload = function() {
      if (typeof locationData !== 'undefined') {
          const selectRegion = document.getElementById("region"),
              selectProvince = document.getElementById("province"),
              selectMunicipality = document.getElementById("municipality"),
              selectBarangay = document.getElementById("barangay");
              
          selectProvince.disabled = true;
          selectMunicipality.disabled = true;
          selectBarangay.disabled = true;

          const selects = [selectRegion, selectProvince, selectMunicipality, selectBarangay];
          selects.forEach(select => {
              if (select.disabled == true){
                  select.style.cursor = "auto";
              }
              else {
                  select.style.cursor = "pointer";
              }
          });

          if (locationData) {
              for(let region in locationData){
                  selectRegion.options[selectRegion.options.length] = new Option(region, region);
              }

              selectRegion.onchange = (e) => {
                  selectProvince.disabled = false;
                  selectMunicipality.disabled = true;
                  selectBarangay.disabled = true;  

                  selects.forEach(select => {
                      if (select.disabled == true){
                          select.style.cursor = "auto";
                      }
                      else {
                          select.style.cursor = "pointer";
                      }
                  });
                  selectProvince.length = 1; // remove all options bar first
                  selectMunicipality.length = 1; // remove all options bar first  
                  selectBarangay.length = 1; // remove all options bar first

                  for (let province in locationData[e.target.value]) {
                      selectProvince.options[selectProvince.options.length] = new Option(province, province);
                  }
              };

              selectProvince.onchange = (e) => {
                  selectMunicipality.disabled = false;
                  selectBarangay.disabled = true;  

                  selects.forEach(select => {
                      if (select.disabled == true){
                          select.style.cursor = "auto";
                      }
                      else {
                          select.style.cursor = "pointer";
                      }
                  });
                  selectMunicipality.length = 1; // remove all options bar first
                  selectBarangay.length = 1;      // remove all options bar first

                  for(let municipality in locationData[selectRegion.value][e.target.value]) {
                      selectMunicipality.options[selectMunicipality.options.length] = new Option(municipality, municipality);
                  }   
              };

              selectMunicipality.onchange = (e) => {
                  selectBarangay.disabled = false;  

                  selects.forEach(select => {
                      if (select.disabled == true){
                          select.style.cursor = "auto";
                      }
                      else {
                          select.style.cursor = "pointer";
                      }
                  });
                  selectBarangay.length = 1; // remove all options bar first

                  for(let barangay of locationData[selectRegion.value][selectProvince.value][e.target.value]) {
                      selectBarangay.options[selectBarangay.options.length] = new Option(barangay, barangay);
                  }
              };
          }
      }
  };

  
  // Add asterisks to required field labels
  const addRequiredAsterisks = () => {
    const requiredInputs = document.querySelectorAll('input[required], select[required]');
    
    requiredInputs.forEach(input => {
      // Find the associated label
      const inputId = input.id || input.name;
      const label = document.querySelector(`label[for="${inputId}"]`) || 
                    input.previousElementSibling;
      
      if (label && label.tagName === 'LABEL' && !label.querySelector('.required-asterisk')) {
        const asterisk = document.createElement('span');
        asterisk.className = 'required-asterisk';
        asterisk.textContent = ' *';
        label.appendChild(asterisk);
      }
    });
  };

  // Initialize required asterisks
  addRequiredAsterisks();
  
  // Form navigation elements
  const loginForm = document.getElementById('login-form');
  const registrationForm = document.getElementById('registration-form');
  const forgotPasswordForm = document.getElementById('forgot-password-form');
  
  // Navigation buttons/links
  const showRegisterLink = document.getElementById('show-register');
  const showLoginLink = document.getElementById('show-login');
  const forgotPasswordLink = document.getElementById('forgot-password');
  const backToLoginBtn = document.getElementById('back-to-login');
  
  // Function to show a specific form and hide others
  function showForm(formToShow) {
    // Hide all forms first
    loginForm.classList.add('hidden');
    registrationForm.classList.add('hidden');
    forgotPasswordForm.classList.add('hidden');
    
    // Show the requested form
    formToShow.classList.remove('hidden');
  }
  
  // Event listeners for navigation
  if (showRegisterLink) {
      showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        showForm(registrationForm);
      });
  }
  
  if (showLoginLink) {
      showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        showForm(loginForm);
      });
  }
  
  if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        showForm(forgotPasswordForm);
      });
  }
  
  if (backToLoginBtn) {
      backToLoginBtn.addEventListener('click', function() {
        showForm(loginForm);
      });
  }
  
  // Multi-step form navigation for registration
  const registrationFormElement = document.getElementById('multi-step-form');
  if (registrationFormElement) {
      const formSteps = registrationFormElement.querySelectorAll('.form-step');
      const nextButtons = registrationFormElement.querySelectorAll('.next-btn');
      const prevButtons = registrationFormElement.querySelectorAll('.prev-btn');
      const progressDots = document.querySelectorAll('.progress-dot');
      
      // Function to show error message for an input
      const showErrorMessage = (input, message) => {
          // Remove any existing error messages
          const existingError = input.parentNode.querySelector('.error-message');
          if (existingError) {
              existingError.remove();
          }
          
          // Add the error class
          input.classList.add('error');
          
          // Create and add error message
          const errorMsg = document.createElement('div');
          errorMsg.className = 'error-message';
          errorMsg.textContent = message;
          
          // Insert after the input (or its wrapper)
          const targetParent = input.closest('.password-wrapper') || input.parentNode;
          targetParent.appendChild(errorMsg);
      };
      
      // Function to remove error message
      const removeErrorMessage = (input) => {
          input.classList.remove('error');
          const targetParent = input.closest('.password-wrapper') || input.parentNode;
          const errorMsg = targetParent.querySelector('.error-message');
          if (errorMsg) {
              errorMsg.remove();
          }
      };
      
      // Advanced validation for all required fields
      const validateRequiredField = (input) => {
          if (!input.value.trim()) {
              showErrorMessage(input, 'This field is required');
              return false;
          } else {
              removeErrorMessage(input);
              return true;
          }
      };
      
      // Validate email format
      const validateEmail = (input) => {
          if (!input.value.trim()) {
              showErrorMessage(input, 'Email is required');
              return false;
          }
          
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
              showErrorMessage(input, 'Please enter a valid email address');
              return false;
          }
          
          removeErrorMessage(input);
          return true;
      };
      
      // Validate password matching
      const validatePasswordMatch = (passwordInput, confirmInput) => {
          if (passwordInput.value !== confirmInput.value) {
              showErrorMessage(confirmInput, 'Passwords do not match');
              return false;
          }
          
          removeErrorMessage(confirmInput);
          return true;
      };
      
      // Validate password strength
      const validatePasswordStrength = (input) => {
          const password = input.value;
          if (password.length < 8) {
              showErrorMessage(input, 'Password must be at least 8 characters long');
              return false;
          }
          
          removeErrorMessage(input);
          return true;
      };
      
      // Real-time validation for password matching
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirm_password');
      
      if (passwordInput && confirmPasswordInput) {
          // Validate on input change
          confirmPasswordInput.addEventListener('input', function() {
              if (passwordInput.value && confirmPasswordInput.value) {
                  validatePasswordMatch(passwordInput, confirmPasswordInput);
              }
          });
          
          // Also validate the original password when it changes
          passwordInput.addEventListener('input', function() {
              if (passwordInput.value && confirmPasswordInput.value) {
                  validatePasswordMatch(passwordInput, confirmPasswordInput);
              }
              validatePasswordStrength(passwordInput);
          });
      }
      
      // Validate all inputs in a step
      const validateStep = (stepElement) => {
          const requiredInputs = stepElement.querySelectorAll('input[required], select[required]');
          let isValid = true;
          
          // Clear all previous error messages first
          const errorMessages = stepElement.querySelectorAll('.error-message');
          errorMessages.forEach(msg => msg.remove());
          
          // Validate each required field
          requiredInputs.forEach(input => {
              // Special validation for different input types
              if (input.type === 'email') {
                  if (!validateEmail(input)) isValid = false;
              } 
              else if (input.name === 'password') {
                  if (!validateRequiredField(input)) isValid = false;
                  if (!validatePasswordStrength(input)) isValid = false;
              }
              else if (input.name === 'confirm_password') {
                  if (!validateRequiredField(input)) isValid = false;
                  if (passwordInput && !validatePasswordMatch(passwordInput, input)) isValid = false;
              }
              else {
                  if (!validateRequiredField(input)) isValid = false;
              }
          });
          
          return isValid;
      };
      
      // Progress through form steps
      nextButtons.forEach(button => {
          button.addEventListener('click', function() {
              // Find the current active step
              const currentStep = document.querySelector('.form-step.active');
              const currentStepIndex = Array.from(formSteps).indexOf(currentStep);
              
              // Validate the current step
              if (validateStep(currentStep)) {
                  // Move to next step if validation passes
                  if (currentStepIndex < formSteps.length - 1) {
                      currentStep.classList.remove('active');
                      formSteps[currentStepIndex + 1].classList.add('active');
                      
                      // Update progress indicator
                      progressDots[currentStepIndex].classList.remove('active');
                      progressDots[currentStepIndex + 1].classList.add('active');
                  }
              }
          });
      });
      
      // Go back to previous step
      prevButtons.forEach(button => {
          button.addEventListener('click', function() {
              const currentStep = document.querySelector('.form-step.active');
              const currentStepIndex = Array.from(formSteps).indexOf(currentStep);
              
              if (currentStepIndex > 0) {
                  currentStep.classList.remove('active');
                  formSteps[currentStepIndex - 1].classList.add('active');
                  
                  // Update progress indicator
                  progressDots[currentStepIndex].classList.remove('active');
                  progressDots[currentStepIndex - 1].classList.add('active');
              }
          });
      });
      
      // Final form submission validation
      registrationFormElement.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get the final step and validate it
          const finalStep = formSteps[formSteps.length - 1];
          
          if (validateStep(finalStep)) {
              console.log('Registration form submitted successfully!');
              // In a real application, you would submit the form to the server here
              alert('Account created successfully!');
              
              // Optional: Redirect or show success message
              // window.location.href = "success.html";
          }
      });
  }
  
  // Add password visibility toggle
  const addPasswordToggles = () => {
      const passwordFields = document.querySelectorAll('input[type="password"]');
      
      passwordFields.forEach(field => {
          // Check if the field already has a password wrapper
          const existingWrapper = field.closest('.password-wrapper');
          if (!existingWrapper) {
              // Create wrapper for input field and toggle button if it doesn't exist
              const wrapper = document.createElement('div');
              wrapper.className = 'password-wrapper';
              
              // Position the field in the wrapper
              field.parentNode.insertBefore(wrapper, field);
              wrapper.appendChild(field);
          }
          
          const passwordWrapper = field.closest('.password-wrapper');
          
          // Check if toggle button already exists
          const existingToggle = passwordWrapper.querySelector('.password-toggle');
          if (existingToggle) return;
          
          // Create toggle button
          const toggleButton = document.createElement('button');
          toggleButton.type = 'button';
          toggleButton.className = 'password-toggle';
          toggleButton.innerHTML = '<span class="eye-icon eye-closed"></span>';
          toggleButton.setAttribute('aria-label', 'Show password');
          passwordWrapper.appendChild(toggleButton);
          
          // Add toggle functionality
          toggleButton.addEventListener('click', function(e) {
              e.preventDefault();
              if (field.type === 'password') {
                  field.type = 'text';
                  this.classList.add('visible');
                  this.querySelector('.eye-icon').classList.remove('eye-closed');
                  this.querySelector('.eye-icon').classList.add('eye-open');
                  this.setAttribute('aria-label', 'Hide password');
              } else {
                  field.type = 'password';
                  this.classList.remove('visible');
                  this.querySelector('.eye-icon').classList.remove('eye-open');
                  this.querySelector('.eye-icon').classList.add('eye-closed');
                  this.setAttribute('aria-label', 'Show password');
              }
          });
      });
  };
  
  // Initialize password toggles
  addPasswordToggles();
  
  // Form submission handlers
  const loginFormElement = document.getElementById('login-form-element');
  const resetFormElement = document.getElementById('reset-form');
  
  // Login form submission
  if (loginFormElement) {
      loginFormElement.addEventListener('submit', function(e) {
          e.preventDefault();
          console.log('Login form submitted');
          // You would typically send this data to your server
      });
  }
  
  // Reset password form submission
  if (resetFormElement) {
      resetFormElement.addEventListener('submit', function(e) {
          e.preventDefault();
          console.log('Password reset form submitted');
          // You would typically send this data to your server
      });
  }
});
