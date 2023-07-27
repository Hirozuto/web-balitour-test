// Contoh data paket tour dalam format JSON
const packageData = [
  {
    id: 1,
    name: "Fast Boat to Gili Trawangan, Gili Air, Gili Meno",
    imgUrl: "img/high-angle-shot-motorboat-sailing-surface-sea.webp",
    price: "450000/PERSON",
    description:
      "Gili is a small island located in Lombok where there are no motorized vehicles so the island is very quiet",
    slug: "fast-boat-to-gili-trawangan-gili-air-gili-meno",
  },
  {
    id: 2,
    name: "Water Rafting in the Ayung River Ubud Bali",
    imgUrl: "img/package-3.jpg",
    price: "650000/PERSON",
    description:
      "What To Expect Pristine water, hidden waterfalls and tropical jungle surrounds make Bali's longest river a lovely location to tackle",
    slug: "water-rafting-in-the-ayung-river-ubud-bali",
  },
  {
    id: 3,
    name: "Bali Holy Bath and Jungle Swing Private Day Trip",
    imgUrl: "img/holy-bath-bali.webp",
    price: "400000/PERSON",
    description:
      "What To Expect Forget all the stress of daily life and embark on a spiritual conquest for self-discovery in Bali!",
    slug: "bali-holy-bath-and-jungle-swing-private-day-trip",
  },
  {
    id: 4,
    name: "Bali Full-Day Traditional Village Sightseeing Trip",
    imgUrl: "img/bali-traditional-village.webp",
    price: "450000/PERSON",
    description:
      "Experience the traditional life of Bali's countryside on a full-day tour that takes you to several rural villages",
    slug: "bali-full-day-traditional-village-sightseeing-trip",
  },
  {
    id: 5,
    name: "Mount Batur Sunrise Trekking and Hot Spring",
    imgUrl: "img/mount-batur.jpg",
    price: "750000/PERSON",
    description:
      "Hike to the top of Mount Batur (1717 meters) to watch the sunrise and enjoy breakfast before soaking in natural hot springs",
    slug: "mount-batur-sunrise-trekking-and-hot-spring",
  },
  {
    id: 6,
    name: "Bali Instagram Tour: The Most Scenic Spots",
    imgUrl: "img/bg-hero.jpg",
    price: "500000/PERSON",
    description:
      "Visit Bali's most scenic and Instagram-worthy locations including waterfalls, temples, and rice fields",
    slug: "bali-instagram-tour-the-most-scenic-spots",
  },
  {
    id: 7,
    name: "Private Ubud Tour with Tegalalang Rice Terrace",
    imgUrl: "img/ubud-rice-terrace.webp",
    price: "750000/CAR",
    description:
      "Visit Bali's cultural heart in Ubud and see the iconic Tegalalang Rice Terrace and playful monkeys at the Monkey Forest",
    slug: "private-ubud-tour-with-tegalalang-rice-terrace",
  },
  {
    id: 8,
    name: "Bali ATV Ride Adventure with Lunch",
    imgUrl: "img/atv-ride-bali.webp",
    price: "750000/PERSON",
    description:
      "Experience the thrill of riding an ATV through Bali's beautiful countryside and terraced rice fields",
    slug: "bali-atv-ride-adventure-with-lunch",
  },
  {
    id: 9,
    name: "Sunrise Trek to Mount Batur",
    imgUrl: "img/mount-batur.jpg",
    price: "950000/PERSON",
    description:
      "Climb Mount Batur and witness a beautiful sunrise over the surrounding volcanoes and Lake Batur",
    slug: "sunrise-trek-to-mount-batur",
  },
  {
    id: 10,
    name: "Uluwatu Temple and Kecak Dance Tour",
    imgUrl: "img/uluwatu-temple-kecak.webp",
    price: "800000/CAR",
    description:
      "Visit the iconic Uluwatu Temple and watch a mesmerizing Kecak dance performance at sunset",
    slug: "uluwatu-temple-and-kecak-dance-tour",
  },
  {
    id: 11,
    name: "Tirta Gangga Water Palace and Lempuyang Temple Tour",
    imgUrl: "img/tirta-gangga.jpg",
    price: "800000/CAR",
    description:
      "Discover the beauty of Bali's water palaces and temples on this full-day tour",
    slug: "tirta-gangga-water-palace-and-lempuyang-temple-tour",
  },
];

// Mendapatkan URL saat ini
const currentUrl = window.location.href;
// console.log(currentUrl);

// Menentukan apakah halaman index atau halaman packages
const isPackagesPage = currentUrl.includes("packages");
// console.log(isPackagesPage);

// Menentukan jumlah data yang ingin ditampilkan
let numDataToShow = 10;
if (isPackagesPage) {
  // console.log("tes");
  numDataToShow = packageData.length; // Menampilkan semua data pada halaman packages
}

// Looping data paket tour dan menampilkan ke tampilan HTML
const packagesList = document.getElementById("packages-list");
for (let i = 0; i < numDataToShow; i++) {
  const packageItem = packageData[i];
  const packageHtml = `
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="${
          i * 0.2
        }s">
            <div class="package-item">
                <div class="overflow-hidden">
                <img class="img-fluid" src="${packageItem.imgUrl}" alt="">
                </div>

                <div class="text-center p-4">
                
                    <h5 class="mb-0">Rp. ${packageItem.price}</h5>
                    
                    <h3 class="mb-0">${packageItem.name}</h3>
                    <p>${packageItem.description}</p>
                    <div class="d-flex justify-content-center mb-2">
                        <a href="#" class="btn btn-sm btn-primary px-3 border-end" style="border-radius: 30px 0 0 30px;">Read More</a>
                        <a href="#" class="btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    `;
  packagesList.innerHTML += packageHtml;
}

if (isPackagesPage) {
  //datalist pada page packages
  var destinationInput = document.getElementById("destinationInput");
  var destinationOptions = document.getElementById("destinationOptions");

  packageData.forEach(function (package) {
    var option = document.createElement("option");
    option.value = package.name;
    destinationOptions.appendChild(option);
  });

  // Mengaktifkan pilihan dari datalist
  destinationInput.addEventListener("input", function () {
    var selectedOption = document.querySelector(
      '#destinationOptions option[value="' + this.value + '"]'
    );
    if (selectedOption) {
      // Lakukan tindakan jika pilihan yang valid dipilih
    }
  });
}
