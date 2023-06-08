

class Timer {
  #end;
  #attached;
  #interval;

  /**
   *
   * @param {string} endTime Dates string (or other values that can be parsed to Date() constructor)
   * @param {HTMLElement} attachTo HTML element this timer is attached to
   */
  constructor(endTime, attachTo) {
      this.#end = new Date(endTime);
      this.#attached = attachTo;
  }

  start() {
    // start timer interval
    this.#interval = setInterval(() => this.updateTimer(), 1000);
  }

  stop() {
    // stop the timer
    clearInterval(this.#interval);
  }

  updateTimer() {
    const diff = this.#end - new Date();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    const y = years;
    const mo = months - years * 12;
    const d = days - months * 30;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;

    if(this.#attached){
        this.#attached.innerHTML =
        "<p>Item expires in:</p>" +
          "<div>" +
          y +
          "<span>year</span></div>" +
        "<div>" +
          mo +
          "<span>mth</span></div>" +
          "<div>" +
          d +
          "<span>day</span></div>" +
          "<div>" +
          h +
          "<span>hour</span></div>" +
          
          
          "<span>..</span>" +
          // +
          // "<div>"
          // +
          // m +
          // "<span>mins</span></div>" +
          "<div>" +
          s +
           "<span>sec</span></div>"; 
    
        if (diff < 0) {
          this.stop();
          this.#attached.innerHTML = `<h4 style="color:red" class="expired">sorry, this item has expired!</h4>`;
        }
    }
  }
}


let products = {
data: [
  {
    productName: "Diflam-C Syrup",
    catagory: "Liquid",
    stock: "10",
    image: "Diflam-C Syrup.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 4, 30).toISOString()
  },
  {
    productName: "Infacol Simeticone",
    catagory: "Liquid",
    stock: "20",
    image: "InfacolSimeticoneSyrup.webp",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 4, 29).toISOString()
  },
  {
    productName: "Pepto Bismol Syrup",
    catagory: "Liquid",
    stock: "30",
    image: "PeptoBismolSyrup.jpeg",
    desc: "Available on Prescription",
    expiresOn: new Date(2025, 4, 29).toISOString()
  },
  { 
    productName: "Eliquis Apixaban 5mg",
    catagory: "Tablet",
    stock: "20",
    image: "Apixaban-eliquis-5mg-tablet.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 4, 29).toISOString()
  },
  {
    productName: "Aspirin 75 mg",
    catagory: "Tablet",
    stock: "24",
    image: "Aspirin-75mg-tablet.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 4, 29).toISOString()
  }, 
  {
    productName: "Atenolol 50mg",
    catagory: "Tablet",
    stock: "18",
    image: "Atenolol-50mg-tablet.png",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 7, 29).toISOString()
  }, 
  {
    productName: "Bumetanide 1mg",
    catagory: "Tablet",
    stock: "12",
    image: "Bumetanide-1mg-Tablets.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 12, 29).toISOString()
  }, 
  {
    productName: "Candesartan 4mg",
    catagory: "Tablet",
    stock: "19",
    image: "Candesartan-4mg-Tablets.png",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 6, 29).toISOString()
  },   
  {
    productName: "Enalapril 5mg",
    catagory: "Tablet",
    stock: "20",
    image: "Enalapril5mg_tablet.webp",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 7, 29).toISOString()
  },
  {
    productName: "erythromycin 250mg",
    catagory: "Tablet",
    stock: "30",
    image: "erythromycin_250mg_tablets.webp",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 11, 29).toISOString()
  },
  {
    productName: "gliclazide 40mg",
    catagory: "Tablet",
    stock: "23",
    image: "gliclazide_40mg_28-tablets.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 10, 29).toISOString()
  },
  {
    productName: "Ibuprofen 200mg",
    catagory: "Tablet",
    stock: "17",
    image: "Ibuprofen tablet for adults (Nurofen)_200mg.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 09, 29).toISOString()
  },
  {
    productName: "levothyroxine 25mcg",
    catagory: "Tablet",
    stock: "10",
    image: "levothyroxine25mcg-tablet.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2025, 2, 27).toISOString()
  },
  {
    productName: "metformin 500mg",
    catagory: "Tablet",
    stock: "11",
    image: "metformin_500mg_tablet.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2026, 1, 29).toISOString()
  },
  {
    productName: "Paracetamol",
    catagory: "Tablet",
    stock: "22",
    image: "paracetamol.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 4, 29).toISOString()
  },
  {
    productName: "Stugeron Cinnarizine 15mg",
    catagory: "Tablet",
    stock: "23",
    image: "Stugeron_Cinnarizine 15mg tablet.png",
    desc: "Available on Prescription",
    expiresOn: new Date(2025, 4, 29).toISOString()
  },
  {
    productName: "Amoxicillin 500mg",
    catagory: "Capsules",
    stock: "16",
    image: "Amoxicillin-500mg-capsules.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 12, 29).toISOString()
  },
  {
    productName: "Benadryl-Acrivastine",
    catagory: "Capsules",
    stock: "15",
    image: "Benadryl-Acrivastine-Capsules.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2022, 11, 29).toISOString()
  },
  {
    productName: "Cephalexin 500mg",
    catagory: "Capsules",
    stock: "23",
    image: "Cephalexin capsules phexin-500mg.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2022, 12, 29).toISOString()
  },
  {
    productName: "Omeprazole 20mg",
    catagory: "Capsules",
    stock: "20",
    image: "Omeprazole_20mg_capsules.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 4, 23).toISOString()
  },
  {
    productName: "Ramipril 2.5mg",
    catagory: "Capsules",
    stock: "22",
    image: "Ramipril-2.5mg-Capsules_28s-2.png",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 4, 19).toISOString()
  },
  {
    productName: "Canesten external Cream",
    catagory: "Topical",
    stock: "11",
    image: "Canesten-external-cream.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 1, 09).toISOString()
  },
  {
    productName: "Dermovate cream 0.5mg",
    catagory: "Topical",
    stock: "14",
    image: "Dermovate_cream_0.5mg_Clobetasol.webp",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 6, 19).toISOString()
  },
  {
    productName: "potassium nitrate 60mg",
    catagory: "Topical",
    stock: "24",
    image: "potassium-nitrate-60mg-cream.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 7, 29).toISOString()
  },
  {
    productName: "Anusol",
    catagory: "Suppositories",
    stock: "16",
    image: "Anusol-suppository.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 8, 09).toISOString()
  },
  {
    productName: "Dulcoloax suppository",
    catagory: "Suppositories",
    stock: "26",
    image: "Dulcoloax-suppository.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 11, 11).toISOString()
  },
  {
    productName: "otex-ear-drop",
    catagory: "Drops",
    stock: "27",
    image: "otex-ear-drop.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2022, 12, 26).toISOString()
  },
  {
    productName: "Otrivin nasal drop",
    catagory: "Drops",
    stock: "32",
    image: "Otrivin-nasal-drop.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 11, 08).toISOString()
  },
  {
    productName: "Refresh eye drop",
    catagory: "Drops",
    stock: "28",
    image: "Refresh-tear-eye-drop.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 03, 19).toISOString()
  },
  {
    productName: "Beclomet",
    catagory: "Inhalers",
    stock: "27",
    image: "Beclomet-Easyhaler-Inhaler.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2022, 12, 09).toISOString()
  },
  {
    productName: "Budesonide 200mcg",
    catagory: "Inhalers",
    stock: "30",
    image: "Budesonide_200mcg-inhaler.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 11, 24).toISOString()
  },
  {
    productName: "Baclofen",
    catagory: "Injections",
    stock: "20",
    image: "Baclofen-10mg- injection.webp",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 4, 29).toISOString()
  },
  {
    productName: "diltiazem 10mg",
    catagory: "Injections",
    stock: "29",
    image: "diltiazem-hcl-injections-10mg.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2022, 12, 29).toISOString()
  },
  {
    productName: "Fentanyl 500mcg",
    catagory: "Injections",
    stock: "19",
    image: "Fentanyl_500mcg_injection.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2022, 10, 29).toISOString()
  },
  {
    productName: "Furosemide 20mg",
    catagory: "Injections",
    stock: "18",
    image: "Furosemide_UK_20mg_Injection.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2022, 8, 29).toISOString()
  },
  {
    productName: "Hydroxocobalamin 1mg",
    catagory: "Injections",
    stock: "05",
    image: "Hydroxocobalamin_injection_1mg.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2022, 6, 29).toISOString()
  },
  {
    productName: "hydrocortisone 100mg",
    catagory: "Injections",
    stock: "21",
    image: "hydrocortisone-sodium-succinate-injection_100mg.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 4, 29).toISOString()
  },
  {
    productName: "Beclometasone-50mg",
    catagory: "Spray",
    stock: "22",
    image: "Beclometasone-50mcg-nasal spray.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 9, 29).toISOString()
  },
  {
    productName: "deepheat pain relief",
    catagory: "Spray",
    stock: "10",
    image: "deepheat pain relief spray.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 1, 29).toISOString()
  },
  {
    productName: "nicotine patch 14mg",
    catagory: "Patches",
    stock: "22",
    image: "nicotine patch 14mg.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 5, 29).toISOString()
  },
  {
    productName: "ocuvir-buccal-400mg",
    catagory: "Buccal",
    stock: "12",
    image: "ocuvir-tablet-400mg-buccal.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2026, 2, 26).toISOString()
  },
  {
    productName: "Sitavig 50mg buccal",
    catagory: "Buccal",
    stock: "06",
    image: "Sitavig50mg buccal tablet.jpg",
    desc: "Available on Prescription",
    expiresOn: new Date(2024, 8, 29).toISOString()
  },
  {
    productName: "Ativan Pills 2 mg",
    catagory: "Sublingual",
    stock: "11",
    image: "Ativan-pills-2mg-sublingual.jpeg",
    desc: "Available on Prescription",
    expiresOn: new Date(2023, 4, 29).toISOString()
  },

  {
    productName: "Bcomplex Sublingual",
    catagory: "Sublingual",
    stock: "15",
    image: "Bcomplex-sublingual-liquid.webp",
    desc: "Available on Prescription",
    expiresOn: new Date(2022, 9, 29).toISOString()
  },
  
],
};

// wait until HTML document is loaded
window.addEventListener("DOMContentLoaded", e => {
  for (let i of products.data) {
    let card = document.createElement("div");
  
    card.classList.add("card", i.catagory, "hide");
  
    let imgContainer = document.createElement("div");
  
    imgContainer.classList.add("image-container");
  
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    let container = document.createElement("div");
    container.classList.add("container");
  
    let name = document.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
  
    let desc = document.createElement("h5");
    desc.innerText = i.desc;
    container.appendChild(desc);
  
    let stock = document.createElement("h4");
    stock.innerText = "Stock Remains: " + i.stock;
    container.appendChild(stock);
  
    // if this is an limited offer, attach a timer
    if(i.expiresOn){
        let timer = document.createElement("h3");
        // create a new timer for given date and attach it to the newly created h3
        i.timer = new Timer(i.expiresOn, timer);
        i.timer.start();
        container.appendChild(timer);
    }
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
})



//  parameter passed from button (parameter same as category)
function filterProduct(value) {
  // button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()){
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });


// select all cards
let elements = document.querySelectorAll(".card");
// loop through all cards
elements.forEach((element) => {
// display all cards on 'all' button click
if (value == "all") {
  element.classList.remove("hide");
}
else{
  // check if element contains catagory class
  if(element.classList.contains(value)){
    // display element based on catagory
    element.classList.remove("hide");
  }
  else{
    // hide other elements
    element.classList.add("hide");
  }
}
});
}


// search button click
document.getElementById("search").addEventListener("click", () => {
  // initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  // loop through all elements
  elements.forEach((element, index) => {
    // check if text includes the search value
    if(element.innerText.includes(searchInput.toUpperCase())){
      // display matching card
      cards[index].classList.remove("hide");
    }
    else {
      // hide others
      cards[index].classList.add("hide");
    }
  })

});

// clear button


//  let btnClear = document.querySelector('button');
// let inputs = document.querySelector('input');
// btnClear.addEventListener('click', () => {
//     inputs.forEach(input =>  input.value = '');
// });

const clearSearch = () => {
  const search = document.querySelector("#search-input");
  search.value = "";
  search.focus();
};



// initially display all products
window.onload = () => {
  filterProduct("all")
};




