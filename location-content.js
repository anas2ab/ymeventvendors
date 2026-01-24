// location-content.js - Unique content for each city
// Add this as a new file in your website folder

const locationData = {
  barrie: {
    cityName: "Barrie",
    region: "Simcoe County",
    h1: "Photo Booth Rental Barrie - Weddings & Corporate Events",
    metaTitle: "Photo Booth Rental Barrie, Simcoe County | Your Majesty Events",
    metaDescription: "Premium photo booth rentals in Barrie & Simcoe County. Serving weddings at MacLaren Art Centre, Georgian College events & more. From $300. Book now!",
    heroText: "Barrie's Premier Photo Booth Experience",
    heroSubtext: "Serving Simcoe County's most memorable celebrations since 2023",

    introText: `Planning a wedding or corporate event in Barrie? Your Majesty Event Vendors brings premium photo booth experiences to Simcoe County's most memorable celebrations. From intimate gatherings at the Barrie Waterfront to grand receptions at local banquet halls, we've captured thousands of smiles across Barrie.`,

    introText2: `Our high-quality DSLR photo booths are perfect for Barrie's diverse event venues—whether you're hosting a rustic wedding in Simcoe County, a corporate gala at Georgian College, or a birthday celebration downtown. We understand the unique needs of Barrie events and provide seamless setup, unlimited prints, and custom backdrops that match your vision.`,

    localVenues: [
      "MacLaren Art Centre",
      "Barrie Waterfront",
      "Georgian College Campus Events",
      "Donaleigh's Irish Public House",
      "Tangle Creek Golf & Country Club"
    ],

    venueCategories: {
      wedding: [
        "MacLaren Art Centre",
        "Tangle Creek Golf & Country Club",
        "Barrie Waterfront Venues",
        "Local Banquet Halls"
      ],
      corporate: [
        "Georgian College Events",
        "Downtown Barrie Venues",
        "Donaleigh's Irish Public House",
        "Private Venues"
      ]
    },

    whyChoose: [
      {
        icon: "🚗",
        title: "Local Service",
        description: "Free delivery throughout Barrie and Simcoe County. We understand Barrie's venues and logistics."
      },
      {
        icon: "❄️",
        title: "All-Season Ready",
        description: "Experienced with Barrie's weather—indoor and outdoor setups for any season, from summer waterfront events to winter weddings."
      },
      {
        icon: "🎓",
        title: "Community Connected",
        description: "Proud to serve Georgian College events, local businesses, and Barrie families celebrating life's special moments."
      }
    ],

    testimonials: [
      {
        name: "Sarah & James",
        location: "Barrie Wedding",
        text: "Your Majesty made our Barrie wedding unforgettable! The photo booth was a huge hit with our guests.",
        rating: 5
      }
    ],

    localKeywords: "photo booth rental Barrie, Barrie wedding photo booth, Simcoe County event rentals, Georgian College photo booth, Barrie corporate events",

    travelNote: "Free delivery within Barrie and Simcoe County. Serving surrounding areas including Innisfil, Orillia, and Collingwood.",

    servingAreas: "Serving Barrie, Innisfil, Orillia, Collingwood, and surrounding communities.",

    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91887.45825!2d-79.69!3d44.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882aa3371ad7206d%3A0x1d2e0f00a84b535a!2sBarrie%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890",

    geoCoordinates: {
      latitude: "44.3711",
      longitude: "-79.6903"
    }
  },

  toronto: {
    cityName: "Toronto",
    region: "GTA",
    h1: "Photo Booth Rental Toronto - Downtown & GTA Weddings",
    metaTitle: "Photo Booth Rental Toronto & GTA | Your Majesty Event Vendors",
    metaDescription: "Toronto's premium photo booth service. Perfect for downtown weddings, corporate events & parties. Distillery District, Casa Loma & more. Book today!",
    heroText: "Toronto's Most Elegant Photo Booth Experience",
    heroSubtext: "Bringing sophistication to the GTA's finest events",

    introText: `Elevate your Toronto event with Your Majesty Event Vendors' premium photo booth rentals. Whether you're hosting a downtown wedding at historic venues like Casa Loma or a modern corporate event at the Toronto Convention Centre, we bring the perfect blend of elegance and fun to Toronto's most memorable occasions.`,

    introText2: `Our sophisticated DSLR photo booths are designed for Toronto's upscale events—from intimate Distillery District weddings to large corporate galas. We navigate downtown logistics seamlessly, offering compact setups perfect for space-conscious venues while maintaining the premium quality Toronto clients expect.`,

    localVenues: [
      "Casa Loma",
      "The Distillery District",
      "Royal York Hotel",
      "Toronto Convention Centre",
      "Liberty Grand Entertainment Complex",
      "Evergreen Brick Works"
    ],

    venueCategories: {
      wedding: [
        "Casa Loma",
        "The Distillery District",
        "Royal York Hotel",
        "Liberty Grand"
      ],
      corporate: [
        "Toronto Convention Centre",
        "Evergreen Brick Works",
        "Downtown Lofts & Galleries",
        "Waterfront Venues"
      ]
    },

    whyChoose: [
      {
        icon: "🏙️",
        title: "Downtown Expertise",
        description: "Experienced navigating Toronto's downtown venues, parking, and logistics. We handle the complexities so you don't have to."
      },
      {
        icon: "🎨",
        title: "Upscale Sophistication",
        description: "Premium equipment and elegant backdrops that match Toronto's high-end wedding and corporate event standards."
      },
      {
        icon: "🚚",
        title: "Space-Conscious Setup",
        description: "Compact booth options perfect for Toronto's lofts, galleries, and venues where space is at a premium."
      }
    ],

    testimonials: [
      {
        name: "Amanda & David",
        location: "Toronto - Casa Loma",
        text: "Absolutely perfect for our Casa Loma wedding! Professional, elegant, and our guests loved the custom backdrops.",
        rating: 5
      }
    ],

    localKeywords: "photo booth rental Toronto, Toronto wedding photo booth, GTA event rentals, downtown Toronto photo booth, corporate event photo booth Toronto, Distillery District wedding",

    travelNote: "Serving all of Toronto and the Greater Toronto Area including North York, Etobicoke, Scarborough, and Mississauga.",

    servingAreas: "Delivering throughout Toronto, North York, Etobicoke, Scarborough, and the Greater Toronto Area.",

    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.30943582457!2d-79.51814074999999!3d43.718371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890",

    geoCoordinates: {
      latitude: "43.7184",
      longitude: "-79.5181"
    }
  },

  vaughan: {
    cityName: "Vaughan",
    region: "York Region",
    h1: "Photo Booth Rental Vaughan - Weddings & Events",
    metaTitle: "Photo Booth Rental Vaughan & York Region | Your Majesty Events",
    metaDescription: "Premium photo booth rentals in Vaughan & York Region. Serving Woodbridge, Thornhill, Maple weddings & corporate events. From $300. Book today!",
    heroText: "Vaughan's Premier Photo Booth Service",
    heroSubtext: "Bringing elegance to York Region's celebrations",

    introText: `Your Majesty Event Vendors proudly serves Vaughan and York Region with premium photo booth rentals for weddings, corporate events, and celebrations. From elegant weddings at The Doctor's House to vibrant celebrations throughout Woodbridge, Thornhill, and Maple, we provide unforgettable photo booth experiences that your guests will love.`,

    introText2: `Vaughan's diverse event venues—from spacious banquet halls to intimate garden settings—require flexibility and professionalism. Our high-quality DSLR photo booths adapt to any Vaughan venue, whether you're hosting a traditional Italian wedding, a corporate event at Canada's Wonderland, or a milestone celebration in your community.`,

    localVenues: [
      "The Doctor's House",
      "Kortright Centre for Conservation",
      "Paradise Banquet Hall",
      "Grand Luxe Event Boutique",
      "Copper Creek Golf Club",
      "Carrying Place Golf & Country Club"
    ],

    venueCategories: {
      wedding: [
        "The Doctor's House",
        "Kortright Centre for Conservation",
        "Paradise Banquet Hall",
        "Copper Creek Golf Club",
        "Carrying Place Golf & Country Club"
      ],
      corporate: [
        "Grand Luxe Event Boutique",
        "Corporate Venues in Vaughan",
        "Vaughan Mills Area Events",
        "Private Event Spaces"
      ]
    },

    whyChoose: [
      {
        icon: "🌳",
        title: "Suburban Excellence",
        description: "Perfect for Vaughan's spacious venues and banquet halls. We understand York Region's event scene and community."
      },
      {
        icon: "🎭",
        title: "Cultural Celebrations",
        description: "Experience with Vaughan's diverse cultural weddings—Italian, Jewish, South Asian, and more. Custom backdrops for any tradition."
      },
      {
        icon: "🚗",
        title: "Easy Access",
        description: "Convenient service to Woodbridge, Thornhill, Maple, and all Vaughan neighborhoods with ample parking."
      }
    ],

    testimonials: [
      {
        name: "Maria & Tony",
        location: "Vaughan Wedding",
        text: "Perfect for our Italian wedding! The photo booth was a huge hit with all our guests at our Vaughan venue.",
        rating: 5
      }
    ],

    localKeywords: "photo booth rental Vaughan, Vaughan wedding photo booth, Woodbridge photo booth, Thornhill event rentals, York Region photo booth, Maple wedding photo booth",

    travelNote: "Free delivery throughout Vaughan, Woodbridge, Thornhill, Maple, and York Region.",

    servingAreas: "Serving Vaughan, Woodbridge, Thornhill, Maple, Concord, Richmond Hill, and surrounding York Region communities.",

    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92310.71394939684!2d-79.58313!3d43.8361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sVaughan%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890",

    geoCoordinates: {
      latitude: "43.8361",
      longitude: "-79.4983"
    }
  },

  brampton: {
    cityName: "Brampton",
    region: "Peel Region",
    h1: "Photo Booth Rental Brampton - Multicultural Events & Weddings",
    metaTitle: "Photo Booth Rental Brampton | Your Majesty Event Vendors",
    metaDescription: "Brampton's trusted photo booth rental service. Perfect for South Asian weddings, corporate events & celebrations. Cultural-friendly setups. Book now!",
    heroText: "Brampton's Trusted Photo Booth Rental",
    heroSubtext: "Celebrating Brampton's diversity with style",

    introText: `Your Majesty Event Vendors brings premium photo booth experiences to Brampton's vibrant celebration scene. From grand South Asian weddings at luxurious banquet halls to intimate family gatherings and corporate events, we specialize in serving Brampton's diverse communities with culturally-sensitive and professional photo booth services.`,

    introText2: `Brampton's event landscape is unique—with elaborate multi-day weddings, large guest lists, and stunning cultural traditions. Our photo booths are designed to handle high-volume events while maintaining photo quality and guest flow. Whether you're hosting a Punjabi wedding, Caribbean celebration, or corporate event, we understand Brampton's expectations for excellence.`,

    localVenues: [
      "Pearson Convention Centre",
      "Balmoral Hall",
      "Hazelton Manor",
      "Royal Ambassador",
      "Alainnah Banquet Hall",
      "Terrace Banquet Centre"
    ],

    venueCategories: {
      wedding: [
        "Pearson Convention Centre",
        "Balmoral Hall",
        "Hazelton Manor",
        "Royal Ambassador",
        "Alainnah Banquet Hall",
        "Terrace Banquet Centre"
      ],
      corporate: [
        "Corporate Event Spaces Brampton",
        "Rose Theatre Events",
        "Brampton Convention Venues",
        "Private Event Halls"
      ]
    },

    whyChoose: [
      {
        icon: "🎊",
        title: "Cultural Expertise",
        description: "Experience with South Asian, Caribbean, and multicultural weddings. We respect traditions and work seamlessly with your vendors."
      },
      {
        icon: "👥",
        title: "High-Volume Ready",
        description: "Equipped for Brampton's large celebrations—handle 300+ guests efficiently with quick print speeds and smooth guest flow."
      },
      {
        icon: "🎨",
        title: "Custom Backdrops",
        description: "Vibrant backdrop options that complement colorful wedding décor. Work with your theme, colors, and cultural aesthetics."
      }
    ],

    testimonials: [
      {
        name: "Priya & Raj",
        location: "Brampton Wedding",
        text: "Amazing service for our Punjabi wedding! They handled 400 guests smoothly and the photo quality was incredible.",
        rating: 5
      }
    ],

    localKeywords: "photo booth rental Brampton, Brampton wedding photo booth, South Asian wedding photo booth, Punjabi wedding Brampton, Peel Region event rentals, Brampton banquet hall photo booth",

    travelNote: "Free delivery throughout Brampton and Peel Region. Experienced with all major Brampton banquet halls.",

    servingAreas: "Serving all of Brampton including Bramalea, Heart Lake, Sandalwood, Queen Street corridor, and surrounding Peel Region.",

    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92682.97677897552!2d-79.76265!3d43.73186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15eaa5d05abf%3A0x352d0f7f00d4b1fa!2sBrampton%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890",

    geoCoordinates: {
      latitude: "43.7315",
      longitude: "-79.7624"
    }
  },

  mississauga: {
    cityName: "Mississauga",
    region: "Peel Region",
    h1: "Photo Booth Rental Mississauga - Elegant Events & Weddings",
    metaTitle: "Photo Booth Rental Mississauga | Your Majesty Event Vendors",
    metaDescription: "Mississauga's premium photo booth rental service. Weddings at Pearson Convention Centre, corporate events & parties. From $300. Book today!",
    heroText: "Mississauga's Premier Photo Booth Experience",
    heroSubtext: "Elegance and professionalism for Peel Region's finest events",

    introText: `Your Majesty Event Vendors is proud to serve Mississauga with premium photo booth rentals for weddings, corporate events, and celebrations. From waterfront venues in Port Credit to luxurious banquet halls in Heartland, we bring sophisticated photo booth experiences to Mississauga's diverse event landscape.`,

    introText2: `Mississauga's event scene demands professionalism and versatility—whether you're hosting an intimate lakeshore wedding, a corporate gala at a downtown hotel, or a grand cultural celebration at a banquet hall. Our DSLR photo booths deliver stunning image quality and reliable service that Mississauga clients expect.`,

    localVenues: [
      "Living Arts Centre",
      "Mississauga Convention Centre",
      "Hazelton Manor Mississauga",
      "Port Credit venues",
      "Pearson Convention Centre",
      "Belcroft Estates"
    ],

    venueCategories: {
      wedding: [
        "Belcroft Estates",
        "Hazelton Manor Mississauga",
        "Port Credit Waterfront Venues",
        "Paradise Banquets",
        "Versailles Convention Centre"
      ],
      corporate: [
        "Mississauga Convention Centre",
        "Living Arts Centre",
        "Pearson Convention Centre",
        "Corporate Hotels & Conference Centers",
        "Square One Area Venues"
      ]
    },

    whyChoose: [
      {
        icon: "🌊",
        title: "Venue Versatility",
        description: "From Port Credit's waterfront charm to Square One's urban sophistication—we adapt to any Mississauga venue style."
      },
      {
        icon: "💼",
        title: "Corporate Excellence",
        description: "Extensive experience with Mississauga's corporate events—professional, punctual, and seamless integration with your event."
      },
      {
        icon: "🎯",
        title: "Strategic Location",
        description: "Centrally located to serve all Mississauga neighborhoods—Streetsville, Port Credit, Erin Mills, Churchill Meadows, and more."
      }
    ],

    testimonials: [
      {
        name: "Jessica & Michael",
        location: "Mississauga - Port Credit",
        text: "Perfect for our waterfront wedding in Port Credit! The booth looked elegant and our photos turned out beautifully.",
        rating: 5
      }
    ],

    localKeywords: "photo booth rental Mississauga, Mississauga wedding photo booth, Port Credit photo booth, corporate event photo booth Mississauga, Peel Region event rentals, Square One area photo booth",

    travelNote: "Free delivery throughout Mississauga and Peel Region. Serving all Mississauga neighborhoods.",

    servingAreas: "Serving all of Mississauga including Port Credit, Streetsville, Erin Mills, Churchill Meadows, Meadowvale, and surrounding areas.",

    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92405.87033732636!2d-79.70918!3d43.5890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b469fe76b05b7%3A0x3146cbed75966db!2sMississauga%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890",

    geoCoordinates: {
      latitude: "43.5890",
      longitude: "-79.6441"
    }
  }
};

// Function to dynamically load location content (if using JavaScript approach)
function loadLocationContent(location) {
  const data = locationData[location];
  if (!data) return;

  // Update meta tags
  document.title = data.metaTitle;
  document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
  document.querySelector('meta[name="keywords"]').setAttribute('content', data.localKeywords);

  // Update Open Graph tags
  document.querySelector('meta[property="og:title"]').setAttribute('content', data.metaTitle);
  document.querySelector('meta[property="og:description"]').setAttribute('content', data.metaDescription);

  // Update hero content
  document.querySelector('.hero h1').textContent = data.heroText;
  document.querySelector('.hero p').textContent = data.heroSubtext;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = locationData;
}
