var simplemaps_worldmap_mapdata={
  main_settings:{
		//General settings
		width: 'responsive', //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: 'no',
		popups: 'on_click', //on_click, on_hover, or detect
	
		//State defaults
    state_description: "Click for a local supplier",
    state_color: "lightgray",
    state_hover_color: "gray",
		state_url: 'https://simplemaps.com',
		border_size: 1.5,		
    border_color: '#ffffff',
		all_states_inactive: 'no',
		all_states_zoomable: 'no',		
		
		//Location defaults
    location_description: "Retail location",
    location_color: "#532C6C",
    location_opacity: ".9",
		location_hover_opacity: 1,
		location_url: '',
    location_image_url: "https://s3.amazonaws.com/simplemaps-com/img/plane.png",
    location_size: "65",
		location_type: 'image', // circle, square, image
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,				
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',
		
		//Labels
		label_color: '#ffffff',	
		label_hover_color: '#ffffff',		
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
    hide_eastern_labels: false,
		
		//Zoom settings
    manual_zoom: 'no',
    back_image: 'no',
    arrow_box: 'no',
    navigation_size: '40',
    navigation_color: '#f7f7f7',
    navigation_border_color: '#636363',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click		
    initial_zoom: "0",
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds
		
		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	
		
		//Advanced settings
		div: 'map',
		auto_load: 'yes',		
    rotate: '0',
		url_new_tab: 'yes', 
		images_directory: 'default', //e.g. 'map_images/'
    import_labels: 'no',
		fade_time:  .1, //time to fade out		
		link_text: 'View Website'  //Text mobile browsers will see for links	
		
	},
  state_specific: {
    AE: {
      name: "United Arab Emirates",
      description: "default",
      color: "default",
      hover_color: "default",
      inactive: "default",
      url: "default",
      hide: "default",
      zoomable: "default"
    },
    AF: {
      name: "Afghanistan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    AL: {
      name: "Albania",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    AM: {
      name: "Armenia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    AO: {
      name: "Angola",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    AR: {
      name: "Argentina",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    AT: {
      name: "Austria",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    AU: {
      name: "Australia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    AZ: {
      name: "Azerbaidjan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BA: {
      name: "Bosnia-Herzegovina",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BD: {
      name: "Bangladesh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BE: {
      name: "Belgium",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BF: {
      name: "Burkina Faso",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BG: {
      name: "Bulgaria",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BH: {
      name: "Bahrain",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BI: {
      name: "Burundi",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BJ: {
      name: "Benin",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BN: {
      name: "Brunei Darussalam",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BO: {
      name: "Bolivia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BR: {
      name: "Brazil",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BS: {
      name: "Bahamas",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BT: {
      name: "Bhutan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BW: {
      name: "Botswana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BY: {
      name: "Belarus",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    BZ: {
      name: "Belize",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CA: {
      name: "Canada",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CD: {
      name: "Congo",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CF: {
      name: "Central African Republic",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CG: {
      name: "Congo",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CH: {
      name: "Switzerland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CI: {
      name: "Ivory Coast",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CL: {
      name: "Chile",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CM: {
      name: "Cameroon",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CN: {
      name: "China",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CO: {
      name: "Colombia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CR: {
      name: "Costa Rica",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CU: {
      name: "Cuba",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CV: {
      name: "Cape Verde",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CY: {
      name: "Cyprus",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    CZ: {
      name: "Czech Republic",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    DE: {
      name: "Germany",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    DJ: {
      name: "Djibouti",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    DK: {
      name: "Denmark",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    DO: {
      name: "Dominican Republic",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    DZ: {
      name: "Algeria",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    EC: {
      name: "Ecuador",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    EE: {
      name: "Estonia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    EG: {
      name: "Egypt",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    EH: {
      name: "Western Sahara",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    ER: {
      name: "Eritrea",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    ES: {
      name: "Spain",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    ET: {
      name: "Ethiopia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    FI: {
      name: "Finland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    FJ: {
      name: "Fiji",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    FK: {
      name: "Falkland Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    FR: {
      name: "France",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GA: {
      name: "Gabon",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GB: {
      name: "Great Britain",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GE: {
      name: "Georgia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GF: {
      name: "French Guyana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GH: {
      name: "Ghana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GL: {
      name: "Greenland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GM: {
      name: "Gambia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GN: {
      name: "Guinea",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GQ: {
      name: "Equatorial Guinea",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GR: {
      name: "Greece",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GS: {
      name: "S. Georgia & S. Sandwich Isls.",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GT: {
      name: "Guatemala",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GW: {
      name: "Guinea Bissau",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    GY: {
      name: "Guyana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    HN: {
      name: "Honduras",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    HR: {
      name: "Croatia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    HT: {
      name: "Haiti",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    HU: {
      name: "Hungary",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    IC: {
      name: "Canary Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    ID: {
      name: "Indonesia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    IE: {
      name: "Ireland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    IL: {
      name: "Israel",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    IN: {
      name: "India",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    IQ: {
      name: "Iraq",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    IR: {
      name: "Iran",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    IS: {
      name: "Iceland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    IT: {
      name: "Italy",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    JM: {
      name: "Jamaica",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    JO: {
      name: "Jordan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    JP: {
      name: "Japan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    KE: {
      name: "Kenya",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    KG: {
      name: "Kyrgyzstan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    KH: {
      name: "Cambodia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    KP: {
      name: "North Korea",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    KR: {
      name: "South Korea",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    KW: {
      name: "Kuwait",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    KZ: {
      name: "Kazakhstan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    LA: {
      name: "Laos",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    LK: {
      name: "Sri Lanka",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    LR: {
      name: "Liberia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    LS: {
      name: "Lesotho",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    LT: {
      name: "Lithuania",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    LU: {
      name: "Luxembourg",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    LV: {
      name: "Latvia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    LY: {
      name: "Libya",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    MA: {
      name: "Morocco",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    MD: {
      name: "Moldavia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    ME: {
      name: "Montenegro",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    MG: {
      name: "Madagascar",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    MK: {
      name: "Macedonia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    ML: {
      name: "Mali",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    MM: {
      name: "Myanmar",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    MN: {
      name: "Mongolia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    MR: {
      name: "Mauritania",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    MW: {
      name: "Malawi",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    MX: {
      name: "Mexico",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    MY: {
      name: "Malaysia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    MZ: {
      name: "Mozambique",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    NA: {
      name: "Namibia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    NC: {
      name: "New Caledonia (French)",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    NE: {
      name: "Niger",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    NG: {
      name: "Nigeria",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    NI: {
      name: "Nicaragua",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    NL: {
      name: "Netherlands",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    NO: {
      name: "Norway",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    NP: {
      name: "Nepal",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    NZ: {
      name: "New Zealand",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    OM: {
      name: "Oman",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    PA: {
      name: "Panama",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    PE: {
      name: "Peru",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    PG: {
      name: "Papua New Guinea",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    PH: {
      name: "Philippines",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    PK: {
      name: "Pakistan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    PL: {
      name: "Poland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    PR: {
      name: "Puerto Rico",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    PS: {
      name: "Palestine",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    PT: {
      name: "Portugal",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    PY: {
      name: "Paraguay",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    QA: {
      name: "Qatar",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    RO: {
      name: "Romania",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    RS: {
      name: "Serbia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    RU: {
      name: "Russia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    RW: {
      name: "Rwanda",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SA: {
      name: "Saudi Arabia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SB: {
      name: "Solomon Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SD: {
      name: "Sudan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SE: {
      name: "Sweden",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SI: {
      name: "Slovenia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SK: {
      name: "Slovak Republic",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SL: {
      name: "Sierra Leone",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SN: {
      name: "Senegal",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SO: {
      name: "Somalia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SR: {
      name: "Suriname",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SS: {
      name: "South Sudan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SV: {
      name: "El Salvador",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SY: {
      name: "Syria",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    SZ: {
      name: "Swaziland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    TD: {
      name: "Chad",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    TG: {
      name: "Togo",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    TH: {
      name: "Thailand",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    TJ: {
      name: "Tadjikistan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    TL: {
      name: "East Timor",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    TM: {
      name: "Turkmenistan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    TN: {
      name: "Tunisia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    TR: {
      name: "Turkey",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    TT: {
      name: "Trinidad and Tobago",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    TW: {
      name: "Taiwan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    TZ: {
      name: "Tanzania",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    UA: {
      name: "Ukraine",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    UG: {
      name: "Uganda",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    US: {
      name: "United States",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      inactive: "default",
      hide: "default",
      zoomable: "default"
    },
    UY: {
      name: "Uruguay",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    UZ: {
      name: "Uzbekistan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    VE: {
      name: "Venezuela",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    VN: {
      name: "Vietnam",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    VU: {
      name: "Vanuatu",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    YE: {
      name: "Yemen",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    ZA: {
      name: "South Africa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    ZM: {
      name: "Zambia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    ZW: {
      name: "Zimbabwe",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    }
  },
  locations: {
    "0": {
      name: "Paris",
      lat: "48.866666670",
      lng: "2.333333333",
      color: "default",
      description: "default",
      url: "default",
      type: "default",
      size: "default",
      image_url: "default",
      opacity: "default"
    },
    "1": {
      name: "Tokyo",
      lat: "35.666666670",
      lng: "139.750000000",
      color: "default",
      description: "default",
      url: "default",
      type: "default",
      size: "default",
      image_url: "default",
      opacity: "default"
    },
    "2": {
      name: "Shanghai",
      lat: "31.100000000",
      lng: "121.366666700",
      color: "default",
      description: "default",
      url: "default",
      type: "default",
      size: "default",
      image_url: "default",
      opacity: "default"
    },
    "3": {
      name: "New York",
      lat: "40.700000000",
      lng: "-73.900000000",
      color: "default",
      description: "default",
      url: "default",
      type: "default",
      size: "default",
      image_url: "default",
      opacity: "default"
    },
    "4": {
      name: "Los Angeles",
      lat: "34.000000000",
      lng: "-118.250000000",
      color: "default",
      description: "default",
      url: "default",
      type: "default",
      size: "default",
      image_url: "default",
      opacity: "default"
    },
    "5": {
      name: "Cape Town",
      lat: "-35.916666670",
      lng: "18.366666670",
      color: "default",
      description: "default",
      url: "default",
      type: "default",
      size: "default",
      image_url: "default",
      opacity: "default"
    },
    "6": {
      name: "Santiago",
      lat: "-33.450000000",
      lng: "-70.666666670",
      color: "default",
      description: "default",
      url: "default",
      type: "default",
      size: "default",
      image_url: "default",
      opacity: "default"
    },
    "7": {
      name: "Cairo",
      lat: "30.050000000",
      lng: "31.250000000",
      color: "default",
      description: "default",
      url: "default",
      type: "default",
      size: "default",
      image_url: "default",
      opacity: "default"
    },
    "8": {
      name: "Singapore",
      lat: "1.300000000",
      lng: "103.833333300",
      color: "default",
      description: "default",
      url: "default",
      type: "default",
      size: "default",
      image_url: "default",
      opacity: "default"
    },
    "9": {
      lat: -33.874,
      lng: 151.203,
      name: "Sydney",
      color: "default",
      description: "default",
      url: "default",
      size: "default",
      type: "default",
      image_url: "default",
      opacity: "default"
    },
    "10": {
      lat: 47.604,
      lng: -122.329,
      name: "Seattle",
      color: "default",
      description: "default",
      url: "default",
      size: "default",
      type: "default",
      image_url: "default",
      opacity: "default"
    },
    "11": {
      lat: 25.775,
      lng: -80.198,
      name: "Miami",
      color: "default",
      description: "default",
      url: "default",
      size: "default",
      type: "default",
      image_url: "default",
      opacity: "default"
    },
    "12": {
      lat: 41.884,
      lng: -87.632,
      name: "Chicago",
      color: "default",
      description: "default",
      url: "default",
      size: "default",
      type: "default",
      image_url: "default",
      opacity: "default"
    },
    "13": {
      lat: 61.218,
      lng: -149.858,
      name: "Anchorage",
      color: "default",
      description: "default",
      url: "default",
      size: "default",
      type: "default",
      image_url: "default",
      opacity: "default"
    },
    "14": {
      lat: 19.279,
      lng: -99.135,
      name: "Mexico City",
      color: "default",
      description: "default",
      url: "default",
      size: "default",
      type: "default",
      image_url: "default",
      opacity: "default"
    }
  }
};