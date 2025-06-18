// src/data/allBikesData.js

// KROK 1: Importujemy tylko kilka obrazków, co do których mamy pewność, że istnieją.
// Upewnij się, że te pliki istnieją w Twoim projekcie.
import gravelHero from '../assets/images/bikes/gravel/heroGravel.jpg';
import gravelWhite from '../assets/images/bikes/gravel/Gravel-white2.jpg';
import gravelWhite2 from '../assets/images/bikes/gravel/Gravel-white3.jpg';
import gravelWhite3 from '../assets/images/bikes/gravel/Gravel-white4.jpg';

import gravelGrayHero from '../assets/images/bikes/gravel/gravel-gray-hero.jpg';
import gravelGray1 from '../assets/images/bikes/gravel/gravel-gray1.jpg';
import gravelGray2 from '../assets/images/bikes/gravel/gravel-gray2.jpg';
import gravelGray3 from '../assets/images/bikes/gravel/gravel-gray3.jpg';

import gravelBlue from '../assets/images/bikes/gravel/gravel-blue3.jpg';
import gravelBlue2 from '../assets/images/bikes/gravel/gravel-blue2.jpg';



import mtbHero from '../assets/images/bikes/mtb/fully-hero2.jpg';
import mtbOrange from '../assets/images/bikes/mtb/Mtb-Orange.jpg';
import mtbOrange2 from '../assets/images/bikes/mtb/Mtb-Orange2.jpg';
import mtbOrange3 from '../assets/images/bikes/mtb/Mtb-Orange3.jpg';

import mtbGreenHero from '../assets/images/bikes/mtb/Mtb-green3.jpg';
import mtbGreen from '../assets/images/bikes/mtb/Mtb-green.jpg';
import mtbGreen2 from '../assets/images/bikes/mtb/Mtb-green2.jpg';

import mtbGelb from '../assets/images/bikes/mtb/bike13.jpg';

import ebikeBlackHero from '../assets/images/bikes/e-bike/e-bike-black5.jpg';

import ebikeNavyHero from '../assets/images/bikes/e-bike/e-bike-navy-blue-hero.jpg';
import ebikeNavy1 from '../assets/images/bikes/e-bike/e-bike-navy-blue.jpg';
import ebikeNavy2 from '../assets/images/bikes/e-bike/e-bike-navy-blue2.jpg';
import ebikeNavy3 from '../assets/images/bikes/e-bike/e-bike-navy-blue3.jpg';

import ebikeGrayHero from '../assets/images/bikes/e-bike/e-bike-black-hero2.jpg';
import ebikeGray4 from '../assets/images/bikes/e-bike/e-bike-gray4.jpg';
import ebikeGray5 from '../assets/images/bikes/e-bike/e-bike-gray5.jpg'

import fullyHero from '../assets/images/bikes/fully/fully-orange-hero.jpg';
import fullyOrange from '../assets/images/bikes/fully//fully-orange.jpg';
import fullyOrange2 from '../assets/images/bikes/fully/fully-orange2.jpg';
import fullyOrange3 from '../assets/images/bikes/fully/fully-orange3.jpg';

import FullyGreenHero from '../assets/images/img7.jpg';

import cityBikeHero  from '../assets/images/e-bike-black6.jpg';

import racingImg1 from '../assets/images/img1.jpg';




// KROK 2: Uproszczona lista rowerów do celów naprawczych.
// Będziesz mogła dodać resztę później, gdy aplikacja będzie stabilna.
export const allBikesData = [
  {
    id: 1,
    name: "Gravel Pathfinder Pro",
    category: "Gravel",
    mainImage: gravelHero,
    galleryImage: [gravelHero, gravelWhite, gravelWhite2, gravelWhite3],
    "description": "Discover unknown trails with the Gravel Pathfinder Pro. Designed for adventurers who aren't afraid to stray from the beaten path. This bike combines lightness, durability, and versatility to provide you with unforgettable experiences on every trip, regardless of the terrain.",
  "features": [
    "Ultra-light Monocoque carbon frame with Gravel Advanced geometry",
    "Complete, precise Shimano GRX RX810 2x11 drivetrain",
    "Shimano GRX RX810 hydraulic disc brakes ensuring excellent stopping power in all conditions",
    "Versatile and grippy WTB Riddler 700x45c TCS Light tires, tubeless ready",
    "Carbon fork with internal cable routing and thru-axle mount",
    "Comfortable Selle Italia X3 Boost Flow saddle",
    "Lightweight and stiff carbon seatpost",
   
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "Carbon Monocoque, Gravel Advanced Geometry, Internal Cable Routing, Flat Mount Disc, 12x142mm Thru-Axle, Integrated rack and fender mounts" },
        { "label": "Fork", "value": "Full Carbon, Tapered Steerer (1-1/8\" - 1.5\"), Internal Brake Routing, Flat Mount Disc, 12x100mm Thru-Axle, Mounts for additional equipment (cargo cage)" },
        { "label": "Headset", "value": "Integrated, FSA Orbit C-40-ACB, sealed cartridge bearings" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "Shimano GRX RD-RX810, Shadow RD+, 11-speed" },
        { "label": "Front Derailleur", "value": "Shimano GRX FD-RX810, 2-speed" },
        { "label": "Shifters", "value": "Shimano GRX ST-RX810, hydraulic, 2x11" },
        { "label": "Crankset", "value": "Shimano GRX FC-RX810-2, 48/31T, Hollowtech II" },
        { "label": "Cassette", "value": "Shimano Ultegra CS-HG800-11, 11-34T" },
        { "label": "Chain", "value": "Shimano CN-HG701-11, SIL-TEC" },
        { "label": "Bottom Bracket", "value": "Shimano SM-BB72-41B, PressFit" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano GRX BR-RX810, hydraulic disc" },
        { "label": "Brake Rotors", "value": "Shimano SM-RT800, Center Lock, Ice Technologies Freeza, 160mm (front/rear)" },
        { "label": "Brake Levers", "value": "Shimano GRX ST-RX810" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "DT Swiss G 1800 Spline db 25, Tubeless Ready, aluminum" },
        { "label": "Front Hub", "value": "DT Swiss 370, Center Lock, 12x100mm Thru-Axle" },
        { "label": "Rear Hub", "value": "DT Swiss 370, Center Lock, 12x142mm Thru-Axle, Ratchet System" },
        { "label": "Spokes", "value": "DT Swiss Aero Comp Straightpull" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Tires", "value": "WTB Riddler TCS Light/Fast Rolling, 700x45c, Dual DNA Compound, Aramid Bead, Tubeless Ready" },
        { "label": "Maximum Tire Size", "value": "700x47c or 650bx2.1\"" }
      ]
    },
    {
      "groupName": "Cockpit",
      "items": [
        { "label": "Handlebar", "value": "Easton EC70 AX Carbon, Gravel Flare (16 degrees), width dependent on frame size (S: 420mm, M: 440mm, L/XL: 460mm)" },
        { "label": "Stem", "value": "Easton EA90 Aluminum, angle +/- 7 degrees, length dependent on frame size (S: 80mm, M: 90mm, L: 100mm, XL: 110mm)" },
        { "label": "Handlebar Tape", "value": "Fizik Terra Microtex Bondcush Tacky" },
        { "label": "Saddle", "value": "Selle Italia X3 Boost Flow, Manganese rails" },
        { "label": "Seatpost", "value": "Easton EC70 Carbon, 27.2mm, Zero Offset, 350mm" },
        { "label": "Seat Clamp", "value": "Integrated or aluminum, depending on frame design" }
      ]
    },
    {
      "groupName": "Additional Components",
      "items": [
        { "label": "Pedals", "value": "Not included (SPD gravel pedals recommended)" },
        { "label": "Weight", "value": "Approx. 8.9 kg (for size M, without pedals)" },
        { "label": "Maximum Load", "value": "120 kg (rider + luggage)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L", "XL"],
  "price": "7999.00",
  "currency": "€"
},
  {
  id: 2,
  name: "Gravel Explorer MKII",
  category: "Gravel",
  mainImage:  gravelGrayHero,
  galleryImages: [
    gravelGrayHero, gravelGray1, gravelGray2, gravelGray3
  ],
  "description": "A reliable companion for every gravel adventure, ready for anything. The Gravel Explorer MKII is built for versatility and durability, whether you're commuting, exploring local trails, or embarking on longer bikepacking trips.",
  "features": [
    "Durable Aluminum Performance frame with comfortable gravel geometry",
    "Reliable Shimano Claris R2000 2x8 speed drivetrain for smooth shifting",
    "Mechanical disc brakes providing consistent stopping power in various conditions",
    "Versatile and wide tires (e.g., 700x40c) suitable for mixed terrain and light off-road use",
    
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "Aluminum Performance, Gravel Geometry, Internal Cable Routing, Flat Mount Disc, 12x142mm Thru-Axle (or QR), Rack and Fender Mounts" },
        { "label": "Fork", "value": "Aluminum, Tapered Steerer (or 1-1/8\" straight), Flat Mount Disc (or Post Mount), Thru-Axle (or QR), Fender and Rack Mounts" },
        { "label": "Headset", "value": "Semi-Integrated, Sealed Bearings, 1-1/8\" - 1.5\" Tapered (or 1-1/8\" non-tapered)" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "Shimano Claris RD-R2000-GS, 8-speed" },
        { "label": "Front Derailleur", "value": "Shimano Claris FD-R2000-B, 2-speed, Band Type" },
        { "label": "Shifters", "value": "Shimano Claris ST-R2000, 2x8 speed" },
        { "label": "Crankset", "value": "Alloy Gravel Crankset, 46/30T (or Shimano FC-RS200 50/34T)" },
        { "label": "Cassette", "value": "Shimano CS-HG41, 11-34T, 8-speed (or similar 11-32T)" },
        { "label": "Chain", "value": "KMC Z8.3 (or Shimano CN-HG71)" },
        { "label": "Bottom Bracket", "value": "Sealed Cartridge, Square Taper (or Shimano BB-UN26/UN300)" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Tektro MD-C550 Mechanical Disc Brakes (or similar, e.g., Hayes CX Comp, Promax Render R)" },
        { "label": "Brake Rotors", "value": "160mm, 6-bolt (front/rear)" },
        { "label": "Brake Levers", "value": "Shimano Claris ST-R2000" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "Alloy, Double Wall, 700c, Tubeless Ready (may require tape/valves), 32H" },
        { "label": "Front Hub", "value": "Alloy, Quick Release (or Thru-Axle 12x100mm), 6-Bolt Disc, Sealed Bearings" },
        { "label": "Rear Hub", "value": "Alloy, Quick Release (or Thru-Axle 12x142mm), 8/9/10-speed Freehub, 6-Bolt Disc, Sealed Bearings" },
        { "label": "Spokes", "value": "Stainless Steel, 14g, Black" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Tires", "value": "WTB Riddler Comp 700x37c (or Kenda Flintridge 700x40c, or similar versatile gravel tire)" },
        { "label": "Maximum Tire Size", "value": "700x42c (or up to 700x45c depending on frame clearance)" }
      ]
    },
    {
      "groupName": "Cockpit",
      "items": [
        { "label": "Handlebar", "value": "Alloy Gravel Bar, Flare (e.g., 12-16 degrees), width dependent on frame size (S: 400mm, M: 420mm, L/XL: 440mm)" },
        { "label": "Stem", "value": "Alloy, +/- 7 degrees, length dependent on frame size (S: 70mm, M: 80mm, L: 90mm, XL: 100mm)" },
        { "label": "Handlebar Tape", "value": "Comfort Cork or Gel Tape, Black" },
        { "label": "Saddle", "value": "Brand-specific Comfort Gravel Saddle" },
        { "label": "Seatpost", "value": "Alloy, 27.2mm (or 30.9mm/31.6mm), Zero or Slight Offset" },
        { "label": "Seat Clamp", "value": "Alloy, Bolt-on or Quick Release" }
      ]
    },
    {
      "groupName": "Additional Components",
      "items": [
        { "label": "Pedals", "value": "Basic Nylon Platform Pedals included" },
        { "label": "Weight", "value": "Approx. 11.2 - 12.0 kg (for size M, with pedals, depending on final spec)" },
        { "label": "Maximum Load", "value": "120 kg (rider + luggage)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L", "XL"],
  "price": "5999.00",
  "currency": "€"
},
{ // NOWY ROWER W KATEGORII GRAVEL
    id: 3, 
    name: "Gravel Explorer MKII",
    category: "Gravel", 
    mainImage: gravelBlue,
    galleryImages: [
    gravelBlue, gravelBlue2
    ],
    "description": "Built for the long haul and ready for any adventure, the Vagabond Apex Explorer is your reliable partner for bikepacking and off-road discovery. Its robust construction and versatile componentry allow you to tackle everything from smooth gravel roads to technical singletrack with confidence.",
    "features": [
      "Durable 6061-T6 aluminum frame with Adventure Gravel geometry and multiple mounting points",
      "Reliable and simple SRAM Apex 1 1x11 drivetrain for a wide gear range",
      "Powerful SRAM Apex 1 hydraulic disc brakes for consistent stopping power",
      "High-volume Schwalbe G-One Allround 700x40c tires for comfort and grip",
      "Full carbon fork with a tapered steerer to absorb vibrations and provide precise handling",
      "Comfort-focused WTB Volt saddle",
      "Flared gravel handlebars for enhanced stability and control on descents",
     
    ],
    "specifications": [
      {
        "groupName": "Frameset",
        "items": [
          { "label": "Frame", "value": "6061-T6 Aluminum, Adventure Gravel Geometry, Internal Cable Routing, Flat Mount Disc, 12x142mm Thru-Axle, Fender & Rack Mounts" },
          { "label": "Fork", "value": "Full Carbon, Tapered Steerer, Internal Brake Routing, Flat Mount Disc, 12x100mm Thru-Axle, Triple Cage Mounts" },
          { "label": "Headset", "value": "Integrated, Sealed Cartridge Bearings, 1-1/8\" to 1.5\"" }
        ]
      },
      {
        "groupName": "Drivetrain",
        "items": [
          { "label": "Rear Derailleur", "value": "SRAM Apex 1, Long Cage, 11-speed" },
          { "label": "Front Derailleur", "value": "N/A" },
          { "label": "Shifters", "value": "SRAM Apex 1, hydraulic, 1x11" },
          { "label": "Crankset", "value": "SRAM Apex 1, X-SYNC 40T" },
          { "label": "Cassette", "value": "SRAM PG-1130, 11-42T, 11-speed" },
          { "label": "Chain", "value": "SRAM PC-1110 with PowerLock" },
          { "label": "Bottom Bracket", "value": "SRAM GXP, Threaded BSA 68mm" }
        ]
      },
      {
        "groupName": "Brakes",
        "items": [
          { "label": "Brakes", "value": "SRAM Apex 1, hydraulic disc, flat mount" },
          { "label": "Brake Rotors", "value": "SRAM CenterLine, Center Lock, 160mm (front/rear)" },
          { "label": "Brake Levers", "value": "SRAM Apex 1" }
        ]
      },
      {
        "groupName": "Wheels",
        "items": [
          { "label": "Rims", "value": "WTB ST i23 TCS 2.0, 32h, Tubeless Ready" },
          { "label": "Front Hub", "value": "Formula RX-512, Center Lock, 12x100mm Thru-Axle" },
          { "label": "Rear Hub", "value": "Formula RX-142, Center Lock, 12x142mm Thru-Axle" },
          { "label": "Spokes", "value": "Stainless Steel, 14g" }
        ]
      },
      {
        "groupName": "Tires",
        "items": [
          { "label": "Tires", "value": "Schwalbe G-One Allround, 700x40c, RaceGuard, TLE" },
          { "label": "Maximum Tire Clearance", "value": "700x45c or 650bx48c" }
        ]
      },
   
      {
        "groupName": "Additional Components",
        "items": [
          { "label": "Pedals", "value": "Not included" },
          { "label": "Weight", "value": "Approx. 10.2 kg (for size M, without pedals)" },
          { "label": "Maximum Load", "value": "125 kg (rider + luggage)" }
        ]
      }
    ],
    "availableSizes": ["S", "M", "L", "XL"],
    "price": "5499.00",
    "currency": "€"
  },
  {
    id: 4,
    name: "Mountain Apex Predator",
    category: "MTB",
    mainImage: mtbHero,
    galleryImages: [mtbHero, mtbOrange, mtbOrange2, mtbOrange3],
    "description": "Conquer any summit and dominate the descents with the MTB Apex Predator Pro. Engineered for the most demanding trails, this bike offers an unrivaled combination of agility, stability, and raw speed. Its progressive geometry and top-tier components will give you the confidence to push your limits on any terrain.",
    "features": [
    "Lightweight and durable full carbon frame with modern trail geometry",
    "High-performance SRAM X01 Eagle 1x12 drivetrain for a wide gear range and crisp shifting",
    "Powerful SRAM G2 RSC 4-piston hydraulic disc brakes for ultimate stopping power and control",
    "Aggressive Maxxis Minion DHF & DHR II 29-inch tires for maximum grip in all conditions, tubeless ready",
    "RockShox Pike Ultimate fork with 150mm of travel to smooth out the roughest trails",
    "RockShox Super Deluxe Ultimate rear shock for superior traction and big-hit performance",
    "RockShox Reverb Stealth dropper post for on-the-fly saddle height adjustments",
  
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "Full Carbon, Trail Geometry, Internal Cable Routing, Boost 12x148mm Thru-Axle, Integrated Down Tube and Chainstay Protection" },
        { "label": "Fork", "value": "RockShox Pike Ultimate, Charger 2.1 RC2 damper, 150mm travel, 42mm offset, DebonAir, Boost 15x110mm" },
        { "label": "Rear Shock", "value": "RockShox Super Deluxe Ultimate, RCT damper, 210x55mm, Custom Tune" },
        { "label": "Headset", "value": "Cane Creek 40, Integrated, sealed cartridge bearings" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "SRAM X01 Eagle, 12-speed" },
        { "label": "Shifters", "value": "SRAM X01 Eagle, trigger, 12-speed" },
        { "label": "Crankset", "value": "SRAM X01 Eagle Carbon, DUB, 32T X-SYNC 2 chainring" },
        { "label": "Cassette", "value": "SRAM XG-1295 Eagle, 10-52T, 12-speed" },
        { "label": "Chain", "value": "SRAM XX1 Eagle, Rainbow" },
        { "label": "Bottom Bracket", "value": "SRAM DUB, BSA threaded" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "SRAM G2 RSC, 4-piston hydraulic disc" },
        { "label": "Brake Rotors", "value": "SRAM CenterLine, 200mm (front), 180mm (rear)" },
        { "label": "Brake Levers", "value": "SRAM G2 RSC, tool-free reach and contact point adjust" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "Race Face ARC 30 Carbon, 30mm internal width, Tubeless Ready" },
        { "label": "Front Hub", "value": "DT Swiss 350, 15x110mm Boost, Center Lock" },
        { "label": "Rear Hub", "value": "DT Swiss 350, 12x148mm Boost, XD Driver, 36t Star Ratchet" },
        { "label": "Spokes", "value": "Sapim Race, double butted" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Front Tire", "value": "Maxxis Minion DHF 29x2.5\" WT, 3C MaxxGrip, EXO+, Tubeless Ready" },
        { "label": "Rear Tire", "value": "Maxxis Minion DHR II 29x2.4\" WT, 3C MaxxTerra, EXO+, Tubeless Ready" }
      ]
    },
   
    {
      "groupName": "Additional Components",
      "items": [
        { "label": "Pedals", "value": "Not included (Platform or clipless MTB pedals recommended)" },
        { "label": "Weight", "value": "Approx. 12.8 kg (for size M, without pedals)" },
        { "label": "Maximum Load", "value": "136 kg (rider + gear)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L", "XL"],
  "price": "8499.00",
  "currency": "€"
  },
  { 
    id: 5, 
    name: "XC Rocket Pro",
    category: "MTB", 
    mainImage: mtbGreenHero,
    galleryImages: [mtbGreenHero, mtbGreen, mtbGreen2],
    "description": "Engineered for pure speed and efficiency, the XC Rocket Pro is your ultimate weapon for cross-country racing and fast-paced trail rides. Its ultra-lightweight frame, combined with a race-focused geometry and cutting-edge components, delivers explosive acceleration and pinpoint handling. Fly up the climbs and carve the singletrack with a bike that turns every watt of power into blistering speed.",
  "features": [
    "Ultra-lightweight HMX full carbon frame with race-proven geometry",
    "Shimano XTR 1x12 drivetrain for flawless shifting and ultimate reliability",
    "Shimano XTR M9100 hydraulic disc brakes for lightweight, powerful, and modulated braking",
    "Fast-rolling Schwalbe Racing Ray & Racing Ralph 29-inch tires for minimum rolling resistance and maximum speed, tubeless ready",
    "RockShox SID SL Ultimate fork with 100mm of travel, designed for XC racing",
    "RockShox NUDE RLC3 rear shock with 3-mode lockout for on-the-fly adjustments",
    "Syncros Fraser iC SL carbon handlebar/stem combo for integrated aerodynamics and control",
    "Integrated chain guide and minimalistic frame protection for a clean and efficient setup",
    "Lightweight DT Swiss XRC 1200 Spline carbon wheels for instant acceleration",
    "Ergonomic Syncros Belcarra saddle for comfort during long races"
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "HMX Carbon Frame, XC Race Geometry, Internal Cable Routing, Boost 12x148mm Thru-Axle, Integrated Chain Guide" },
        { "label": "Fork", "value": "RockShox SID SL Ultimate, Race Day Damper, 100mm travel, 44mm offset, DebonAir, Boost 15x110mm" },
        { "label": "Rear Shock", "value": "RockShox NUDE RLC3, 3-mode (Lockout-Traction-Descend), 165x40mm, Custom Tune" },
        { "label": "Headset", "value": "Syncros Pro Drop-in, sealed cartridge bearings" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "Shimano XTR RD-M9100 SGS, Shadow RD+, 12-speed" },
        { "label": "Shifters", "value": "Shimano XTR SL-M9100-I, Rapidfire Plus, I-Spec EV" },
        { "label": "Crankset", "value": "Race Face Next SL Carbon, 34T chainring" },
        { "label": "Cassette", "value": "Shimano XTR CS-M9100, 10-51T, 12-speed" },
        { "label": "Chain", "value": "Shimano XTR CN-M9100" },
        { "label": "Bottom Bracket", "value": "Race Face BB92, press-fit" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano XTR M9100, 2-piston hydraulic disc" },
        { "label": "Brake Rotors", "value": "Shimano RT-MT900, 180mm (front), 160mm (rear), Center Lock" },
        { "label": "Brake Levers", "value": "Shimano XTR M9100, I-Spec EV, tool-free reach adjust" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "DT Swiss XRC 1200 Spline Carbon, 25mm internal width, Tubeless Ready" },
        { "label": "Front Hub", "value": "DT Swiss 240s, 15x110mm Boost, Center Lock" },
        { "label": "Rear Hub", "value": "DT Swiss 240s, 12x148mm Boost, Microspline Driver, Ratchet EXP 36" },
        { "label": "Spokes", "value": "DT Swiss Aerolite, straight pull" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Front Tire", "value": "Schwalbe Racing Ray 29x2.25\", Super Race, TLE, Addix SpeedGrip, transparent sidewall" },
        { "label": "Rear Tire", "value": "Schwalbe Racing Ralph 29x2.25\", Super Race, TLE, Addix Speed, transparent sidewall" }
      ]
    },
  
    {
      "groupName": "Additional Components",
      "items": [
        { "label": "Pedals", "value": "Not included (Clipless XC pedals recommended)" },
        { "label": "Weight", "value": "Approx. 9.5 kg (for size M, without pedals)" },
        { "label": "Maximum Load", "value": "120 kg (rider + gear)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L", "XL"],
  "price": "9299.00",
  "currency": "€"
  },
   { 
    id: 6, 
    name: "XC Phantom Pro",
    category: "MTB", 
    mainImage: mtbGelb,
    galleryImages: [mtbGelb],
    "description": "Engineered for pure speed and efficiency, the XC Phantom Pro is the ultimate cross-country race machine. Its feather-light frame and top-of-the-line components ensure explosive acceleration and pinpoint handling on the most demanding race courses. Whether you're chasing podiums or personal bests, this bike is built to fly.",
  "features": [
    "Ultra-lightweight HMX full carbon frame with race-proven geometry",
    "Shimano XTR 1x12 electronic drivetrain for flawless, instantaneous shifting",
    "Shimano XTR M9100 2-piston hydraulic disc brakes for powerful and lightweight stopping power",
    "Fast-rolling 29-inch Schwalbe Racing Ray & Racing Ralph tires for minimum rolling resistance and maximum speed, tubeless ready",
    "FOX 32 Step-Cast Factory fork with 100mm of travel, featuring a remote lockout for on-the-fly efficiency",
    "FOX Float DPS Factory rear shock with remote lockout, tuned for XC racing",
    "Syncros Fraser iC SL integrated carbon bar and stem for ultimate stiffness and clean aesthetics",
    "DT Swiss XRC 1200 Spline carbon wheels, offering an incredible stiffness-to-weight ratio",
    "Integrated chain guide and minimalistic frame protection for a silent and secure ride",
    "FOX Transfer SL Factory dropper post, one of the lightest on the market"
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "HMX Full Carbon, Race Geometry, Internal Cable Routing, Boost 12x148mm Thru-Axle, Integrated Chain Guide" },
        { "label": "Fork", "value": "FOX 32 Step-Cast Factory, FIT4 damper, 100mm travel, 44mm offset, Kashima Coating, Boost 15x110mm, 2-position remote lockout" },
        { "label": "Rear Shock", "value": "FOX Float DPS Factory, 165x40mm, Kashima Coating, 2-position remote lockout" },
        { "label": "Headset", "value": "Syncros Pro Drop-in, sealed cartridge bearings" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "Shimano XTR RD-M9100, Shadow RD+, 12-speed" },
        { "label": "Shifters", "value": "Shimano XTR SL-M9100, Rapidfire Plus, 12-speed" },
        { "label": "Crankset", "value": "Race Face Next SL Carbon, 34T chainring" },
        { "label": "Cassette", "value": "Shimano XTR CS-M9100, 10-51T, 12-speed" },
        { "label": "Chain", "value": "Shimano XTR CN-M9100" },
        { "label": "Bottom Bracket", "value": "Race Face BSA30, threaded" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano XTR M9100, 2-piston hydraulic disc" },
        { "label": "Brake Rotors", "value": "Shimano MT900, 180mm (front), 160mm (rear), Center Lock" },
        { "label": "Brake Levers", "value": "Shimano XTR M9100, carbon lever, I-SPEC EV" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "DT Swiss XRC 1200 Spline Carbon, 25mm internal width, Tubeless Ready" },
        { "label": "Front Hub", "value": "DT Swiss 240s, 15x110mm Boost, Center Lock" },
        { "label": "Rear Hub", "value": "DT Swiss 240s, 12x148mm Boost, Microspline Driver, Ratchet EXP 36" },
        { "label": "Spokes", "value": "DT Swiss Aerolite, straight pull" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Front Tire", "value": "Schwalbe Racing Ray 29x2.25\", Super Race, TLE, Addix SpeedGrip compound" },
        { "label": "Rear Tire", "value": "Schwalbe Racing Ralph 29x2.25\", Super Race, TLE, Addix Speed compound" }
      ]
    },
  
    {
      "groupName": "Additional Components",
      "items": [
        { "label": "Pedals", "value": "Not included (Clipless XC pedals recommended)" },
        { "label": "Weight", "value": "Approx. 9.5 kg (for size M, without pedals)" },
        { "label": "Maximum Load", "value": "120 kg (rider + gear)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L", "XL"],
  "price": "9999.00",
  "currency": "€"
  },
{
    id: 7,
    name: "E-City Voyager",
    category: "E-Bike", 
    mainImage: ebikeBlackHero,
    galleryImages: [
     ebikeBlackHero,
    ],
    "description": "Navigate the urban landscape with ease and style on the E-City Voyager. This e-bike is your perfect partner for daily commutes, weekend explorations, and everything in between. Its powerful, quiet motor and long-range battery make hills and long distances effortless, while its comfortable, upright riding position and practical features ensure a smooth and enjoyable ride every time.",
  "features": [
    "Lightweight and durable aluminum frame with a comfortable, step-through design option available",
    "Bosch Performance Line CX motor for powerful and natural-feeling assistance",
    "Integrated Bosch PowerTube 625 Wh battery for extended range and a clean look",
    "Shimano Deore 1x10-speed drivetrain for reliable and smooth shifting",
    "Powerful Shimano MT200 hydraulic disc brakes for confident stopping in all weather conditions",
    "Puncture-resistant Schwalbe Big Ben 28-inch tires with reflective sidewalls for safety and durability",
   
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "6061 Aluminum, Internal Cable Routing, Rack & Fender Mounts, Integrated Battery" },
        { "label": "Fork", "value": "SR Suntour NEX-E25, 63mm travel, Lockout" },
        { "label": "Headset", "value": "FSA No.10, semi-integrated, sealed bearings" }
      ]
    },
    {
      "groupName": "E-Bike System",
      "items": [
        { "label": "Motor", "value": "Bosch Performance Line CX, 85Nm, 25km/h" },
        { "label": "Battery", "value": "Bosch PowerTube 625, 625Wh, integrated" },
        { "label": "Display", "value": "Bosch Intuvia, with walk-assist" },
        { "label": "Charger", "value": "Bosch Standard Charger 4A" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "Shimano Deore M6000, Shadow Plus, 10-speed" },
        { "label": "Shifters", "value": "Shimano Deore M6000, Rapidfire Plus, 10-speed" },
        { "label": "Crankset", "value": "FSA CK-220, 38T chainring for Bosch Gen4" },
        { "label": "Cassette", "value": "Shimano Deore HG500, 11-42T, 10-speed" },
        { "label": "Chain", "value": "KMC e10S, e-bike specific" },
        { "label": "Bottom Bracket", "value": "Integrated in motor" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano MT200, hydraulic disc" },
        { "label": "Brake Rotors", "value": "Shimano SM-RT10, 180mm (front), 160mm (rear)" },
        { "label": "Brake Levers", "value": "Shimano MT200" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "Ryde Zac421, 28\", 32h, double wall, e-bike ready" },
        { "label": "Front Hub", "value": "Shimano HB-TX505, Center Lock" },
        { "label": "Rear Hub", "value": "Shimano FH-TX505, Center Lock" },
        { "label": "Spokes", "value": "Sapim Leader, stainless steel" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Tires", "value": "Schwalbe Big Ben, 50-622 (28x2.0\"), K-Guard puncture protection, reflective stripe" }
      ]
    },
  
    {
      "groupName": "Accessories",
      "items": [
        { "label": "Front Light", "value": "Herrmans H-Black MR4, integrated, powered by main battery" },
        { "label": "Rear Light", "value": "Herrmans H-Trace E, integrated in rack, powered by main battery" },
        { "label": "Fenders", "value": "SKS Stingray 2, full coverage" },
        { "label": "Rack", "value": "Racktime Snapit 2.0 compatible, 25kg max load" },
        { "label": "Kickstand", "value": "Pletscher Comp Flex 40, adjustable" }
      ]
    },
    {
      "groupName": "Additional Components",
      "items": [
        { "label": "Pedals", "value": "Comfort Platform Pedals with anti-slip surface" },
        { "label": "Weight", "value": "Approx. 24.5 kg (for size M, including battery)" },
        { "label": "Maximum Load", "value": "140 kg (rider + gear + bike)" }
      ]
    }
  ],
 "availableSizes": ["S", "M", "L"],
  "price": "2999.00",
  "currency": "€"
  },
   { 
    id: 8, 
    name: "Urban Glide E-Bike",
    category: "E-Bike", 
    mainImage: ebikeNavyHero,
    galleryImages: [ebikeNavyHero, ebikeNavy1, ebikeNavy2, ebikeNavy3],
   "description": "Experience the city like never before with the Urban Glide E-City. Designed for the modern commuter, this e-bike combines comfort, style, and efficiency. Whether you're heading to work, running errands, or enjoying a leisurely ride through the park, the powerful and quiet motor will make every journey a breeze. Its user-friendly design and practical features ensure a smooth and enjoyable ride on any urban adventure.",
  "features": [
    "Lightweight and durable aluminum frame with a comfortable, upright riding position and step-through option",
    "Quiet and efficient Bosch Performance Line CX motor for smooth and natural-feeling assistance",
    "Long-range Bosch PowerTube 500Wh integrated battery for extended city exploration",
    "Reliable Shimano Deore 10-speed drivetrain for effortless shifting",
    "Powerful Shimano MT200 hydraulic disc brakes for safe and consistent stopping power in all weather conditions",
    "Comfortable and durable Schwalbe Big Ben 28-inch tires with puncture protection",
    "Fully equipped with integrated front and rear lights, full-coverage fenders, and a sturdy rear rack",
  
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "Aluminum Superlite, Urban Comfort Geometry, Step-Through, Internal Cable Routing, Integrated Battery Mount" },
        { "label": "Fork", "value": "SR Suntour NEX-E25, 63mm travel, Lockout" },
        { "label": "Headset", "value": "FSA No.10, semi-integrated" }
      ]
    },
    {
      "groupName": "E-Bike Components",
      "items": [
        { "label": "Motor", "value": "Bosch Performance Line CX (Gen4), 85Nm, 25km/h" },
        { "label": "Battery", "value": "Bosch PowerTube 500, 500Wh" },
        { "label": "Display", "value": "Bosch Purion" },
        { "label": "Charger", "value": "Bosch 2A Compact Charger" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "Shimano Deore RD-M6000-GS, 10-speed" },
        { "label": "Shifters", "value": "Shimano Deore SL-M6000, Rapidfire-Plus" },
        { "label": "Crankset", "value": "FSA CK-200, 38T" },
        { "label": "Cassette", "value": "Shimano Deore CS-HG500, 11-42T, 10-speed" },
        { "label": "Chain", "value": "KMC e10S" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano BR-MT200, Hydraulic Disc Brake" },
        { "label": "Brake Rotors", "value": "Shimano SM-RT10, 180mm (front), 160mm (rear)" },
        { "label": "Brake Levers", "value": "Shimano BL-MT200" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "CUBE EX23, 36H, Disc, Tubeless Ready" },
        { "label": "Front Hub", "value": "Shimano HB-TX505, QR, Centerlock" },
        { "label": "Rear Hub", "value": "Shimano FH-TX505, QR, Centerlock" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Tires", "value": "Schwalbe Big Ben, Active, 50-622 (28x2.00)" }
      ]
    },

    {
      "groupName": "Additional Components",
      "items": [
        { "label": "Pedals", "value": "CUBE PP Trekking" },
        { "label": "Front Light", "value": "CUBE Shiny 50 Lux, 12V, DC" },
        { "label": "Rear Light", "value": "CUBE Edge IC 2.0 Rear LED, 12V, DC" },
        { "label": "Fenders", "value": "ACID 53 BB-Mount" },
        { "label": "Kickstand", "value": "CUBEstand Cmpt" },
        { "label": "Carrier", "value": "CUBE Integrated Carrier 2.0, CUBE Adapter Compatible" },
        { "label": "Weight", "value": "Approx. 23.5 kg (with battery)" },
        { "label": "Maximum Load", "value": "140 kg (rider + gear + bike)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L"],
  "price": "3499.00",
  "currency": "€"
  },
    { 
    id: 9, 
    name: "E-Bike Explorer",
    category: "E-Bike", 
    mainImage: ebikeGrayHero  ,
    galleryImages: [
      ebikeGrayHero, ebikeGray4, ebikeGray5
   
    ],
   "description": "Expand your horizons and amplify your adventures with the E-Bike Explorer. This bike combines robust construction with a powerful electric motor to take you further and faster, whether you're commuting, touring, or exploring new trails. Its intuitive pedal-assist system and long-range battery mean less effort and more enjoyment on every ride, turning challenging climbs into gentle slopes.",
  "features": [
    "Durable and lightweight aluminum frame with comfortable, upright geometry",
    "Powerful Bosch Performance Line CX motor providing up to 85Nm of torque for seamless acceleration",
    "Integrated Bosch PowerTube 625Wh battery for extended range and a clean aesthetic",
    "Shimano Deore 1x11 drivetrain for reliable and smooth gear changes",
    "Powerful Shimano MT420 4-piston hydraulic disc brakes for confident stopping power in all conditions",
    "Comfortable and fast-rolling Schwalbe Super Moto-X 27.5-inch tires for versatile performance on pavement and gravel",
    "SR Suntour XCR34 fork with 120mm of travel to absorb bumps and improve control",
  
  ],
  "specifications": [
    {
      "groupName": "E-Bike System",
      "items": [
        { "label": "Motor", "value": "Bosch Performance Line CX, 250W, 85Nm, 25km/h" },
        { "label": "Battery", "value": "Bosch PowerTube 625, 625Wh, integrated" },
        { "label": "Display", "value": "Bosch Purion" },
        { "label": "Charger", "value": "Bosch 4A Standard Charger" }
      ]
    },
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "6061 Aluminum, Touring Geometry, Internal Cable Routing, Motor Armor, Boost 12x148mm Thru-Axle" },
        { "label": "Fork", "value": "SR Suntour XCR34 Air, 120mm travel, Lockout, Boost 15x110mm" },
        { "label": "Headset", "value": "FSA No.57E, Integrated, sealed cartridge bearings" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "Shimano Deore RD-M5100, 11-speed, Shadow Plus" },
        { "label": "Shifters", "value": "Shimano Deore SL-M5100, 11-speed" },
        { "label": "Crankset", "value": "FSA CK-320, 38T chainring" },
        { "label": "Cassette", "value": "Shimano Deore CS-M5100, 11-51T, 11-speed" },
        { "label": "Chain", "value": "KMC e11S" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano MT420, 4-piston hydraulic disc" },
        { "label": "Brake Rotors", "value": "Shimano RT30, 180mm (front & rear)" },
        { "label": "Brake Levers", "value": "Shimano MT401" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "Rodi Tryp 30, 30mm internal width, Tubeless Ready, 32h" },
        { "label": "Front Hub", "value": "Shimano MT400-B, 15x110mm Boost, Center Lock" },
        { "label": "Rear Hub", "value": "Shimano MT410-B, 12x148mm Boost, Center Lock, Microspline" },
        { "label": "Spokes", "value": "Sapim Leader, stainless steel" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Tires", "value": "Schwalbe Super Moto-X, 27.5x2.4\", GreenGuard, RaceGuard" }
      ]
    },
 
    {
      "groupName": "Additional Components",
      "items": [
        { "label": "Pedals", "value": "Comfort Platform Pedals" },
        { "label": "Lights", "value": "Herrmans H-Black MR4 (front), Herrmans H-Trace E-Bike (rear)" },
        { "label": "Fenders", "value": "SKS Stingray 2, 65mm" },
        { "label": "Kickstand", "value": "URSUS Mooi Rear, adjustable" },
        { "label": "Weight", "value": "Approx. 24.5 kg (for size M, with pedals)" },
        { "label": "Maximum Load", "value": "140 kg (rider + gear + bike)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L", "XL"],
  "price": "4299.00",
  "currency": "€"
  },
  {
    id: 10,
    name: "Road Sprinter Ace",
    category: "Racing", 
    mainImage: racingImg1,
    galleryImages: [racingImg1],
    "description": "Engineered for pure velocity and podium finishes, the Road Sprinter Ace is the epitome of aerodynamic efficiency and raw power. This bike is meticulously crafted for cyclists who demand the ultimate in performance, offering a lightning-fast response and unwavering stability at speed. Its wind-cheating profile and elite components will give you the edge to break away from the peloton and sprint to victory.",
  "features": [
    "Aerodynamically optimized, ultra-lightweight full carbon frame and fork",
    "Top-of-the-line Shimano Dura-Ace Di2 2x12 electronic drivetrain for instantaneous, precise shifting",
    "Shimano Dura-Ace hydraulic disc brakes for superior modulation and stopping power in all weather conditions",
    "Fast-rolling Continental GP5000 S TR 700x28c tires for exceptional grip and low rolling resistance, tubeless ready",
    "Deep-section carbon wheelset for maximum aerodynamic advantage and crosswind stability",
    "Fully integrated cockpit with an aerodynamic carbon handlebar and stem for reduced drag",
    "Aero-profiled carbon seatpost for improved compliance and aerodynamics",
   
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "Full Carbon, Aerodynamic Profile, Internal Cable Routing, 12x142mm Thru-Axle, Flat-Mount Disc" },
        { "label": "Fork", "value": "Full Carbon, Tapered Steerer, 12x100mm Thru-Axle, Flat-Mount Disc" },
        { "label": "Headset", "value": "FSA ACR, 1.5\" Integrated, sealed cartridge bearings" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "Shimano Dura-Ace Di2 R9250, 12-speed" },
        { "label": "Front Derailleur", "value": "Shimano Dura-Ace Di2 R9250, braze-on" },
        { "label": "Shifters", "value": "Shimano Dura-Ace Di2 R9270, hydraulic disc, 2x12-speed" },
        { "label": "Crankset", "value": "Shimano Dura-Ace R9200-P, HollowTech II, 52/36T with integrated power meter" },
        { "label": "Cassette", "value": "Shimano Dura-Ace R9200, 11-30T, 12-speed" },
        { "label": "Chain", "value": "Shimano XTR M9100, 12-speed" },
        { "label": "Bottom Bracket", "value": "Shimano Dura-Ace BB-R9100, BSA threaded" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano Dura-Ace R9270, hydraulic disc" },
        { "label": "Brake Rotors", "value": "Shimano RT-MT900, 160mm (front), 140mm (rear), Center Lock" },
        { "label": "Brake Levers", "value": "Shimano Dura-Ace Di2 R9270, hydraulic disc" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "Vision Metron 55 SL Carbon, 55mm depth, 19mm internal width, Tubeless Ready" },
        { "label": "Front Hub", "value": "Vision PRA, 12x100mm, Center Lock" },
        { "label": "Rear Hub", "value": "Vision PRA, 12x142mm, Shimano HG Driver" },
        { "label": "Spokes", "value": "Sapim CX-Ray, bladed" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Tires", "value": "Continental Grand Prix 5000 S TR, 700x28c, Tubeless Ready" }
      ]
    },
    {
      "groupName": "Cockpit",
      "items": [
        { "label": "Handlebar", "value": "Vision Metron 5D ACR Integrated, Carbon" },
        { "label": "Stem", "value": "Vision Metron 5D ACR Integrated, Carbon (Specific length per frame size)" },
        { "label": "Grips", "value": "Fizik Vento Solocush Tacky bar tape" },
        { "label": "Saddle", "value": "Fizik Antares Versus Evo R1, Carbon rails" },
        { "label": "Seatpost", "value": "Road Sprinter Ace Aero Carbon, 15mm offset" },
        { "label": "Seat Clamp", "value": "Integrated wedge system" }
      ]
    },
    {
      "groupName": "Additional Components",
      "items": [
        { "label": "Pedals", "value": "Not included (Clipless road pedals recommended)" },
        { "label": "Weight", "value": "Approx. 7.1 kg (for size M, without pedals)" },
        { "label": "Maximum Load", "value": "120 kg (rider + gear)" }
      ]
    }
  ],
  "availableSizes": ["49", "52", "54", "56", "58", "61"],
  "price": "11999.00",
  "currency": "€"
  },
    { 
    id: 11, 
    name: "AeroBlade Pro",
    category: "Racing", 
    mainImage: racingImg1,
    galleryImages: [racingImg1],
     "description": "Slice through the wind and shatter your personal bests with the AeroBlade Pro. Designed for uncompromising speed and efficiency, this bike is the pinnacle of aerodynamic engineering and lightweight performance. Its cutting-edge design and premium components will give you the competitive edge needed to lead the peloton and sprint for the finish line.",
  "features": [
    "Ultra-lightweight and aerodynamic full carbon frame with Kamm-tail tube shaping",
    "Top-of-the-line Shimano Dura-Ace Di2 2x12 electronic drivetrain for flawless, instantaneous shifting",
    "Shimano Dura-Ace hydraulic disc brakes with ICE TECHNOLOGIES FREEZA rotors for superior heat dissipation and consistent braking",
    "Fast-rolling Continental GP5000 S TR 700x28c tires for exceptional grip and low rolling resistance, tubeless ready",
    "Aerodynamically optimized full carbon fork with integrated cable routing",
    "Integrated carbon cockpit (handlebar and stem) for reduced drag and a clean aesthetic",
    "Deep-section carbon fiber wheels for maximum aerodynamic advantage",
 
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "Full Carbon, Aerodynamic Design, Internal Cable Routing, 12x142mm Thru-Axle, Flat Mount Disc" },
        { "label": "Fork", "value": "Full Carbon, Tapered Steerer, Integrated Crown Race, 12x100mm Thru-Axle, Flat Mount Disc" },
        { "label": "Headset", "value": "Integrated, sealed cartridge bearings, 1-1/8\" x 1-1/2\"" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "Shimano Dura-Ace Di2 R9250, 12-speed" },
        { "label": "Front Derailleur", "value": "Shimano Dura-Ace Di2 R9250, braze-on" },
        { "label": "Shifters", "value": "Shimano Dura-Ace Di2 R9270, hydraulic disc, 2x12-speed" },
        { "label": "Crankset", "value": "Shimano Dura-Ace R9200, HollowTech II, 52/36T" },
        { "label": "Cassette", "value": "Shimano Dura-Ace R9200, 11-30T, 12-speed" },
        { "label": "Chain", "value": "Shimano CN-M9100, 12-speed" },
        { "label": "Bottom Bracket", "value": "Shimano BB-R9100, BSA threaded" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano Dura-Ace R9270, hydraulic disc" },
        { "label": "Brake Rotors", "value": "Shimano RT-CL900 Center Lock, 160mm (front), 140mm (rear)" },
        { "label": "Brake Levers", "value": "Included with shifters" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "Vision Metron 55 SL Disc, Carbon, 55mm depth, Tubeless Ready" },
        { "label": "Front Hub", "value": "Vision PRA, 12x100mm, Center Lock" },
        { "label": "Rear Hub", "value": "Vision PRA, 12x142mm, Shimano HG Freehub" },
        { "label": "Spokes", "value": "Sapim CX-Ray, bladed" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Tires", "value": "Continental Grand Prix 5000 S TR, 700x28c, BlackChili Compound, Tubeless Ready" }
      ]
    },
    {
      "groupName": "Cockpit",
      "items": [
        { "label": "Handlebar", "value": "Integrated Aero Carbon Bar/Stem, (e.g., Vision Metron 5D ACR)" },
        { "label": "Stem", "value": "Integrated with handlebar" },
        { "label": "Tape", "value": "Fizik Vento Solocush Tacky" },
        { "label": "Saddle", "value": "Fizik Antares Versus Evo R1, Carbon rails" },
        { "label": "Seatpost", "value": "AeroBlade Pro Carbon, 20mm offset" },
        { "label": "Seat Clamp", "value": "Integrated wedge system" }
      ]
    },
    {
      "groupName": "Additional Components",
      "items": [
        { "label": "Pedals", "value": "Not included (Clipless road pedals recommended, e.g., Shimano Dura-Ace or Look Keo)" },
        { "label": "Weight", "value": "Approx. 7.2 kg (for size 56, without pedals)" },
        { "label": "Maximum Load", "value": "120 kg (rider + gear)" }
      ]
    }
  ],
  "availableSizes": ["49", "52", "54", "56", "58", "61"],
  "price": "9999.00",
  "currency": "€"
  },
    { 
    id: 12,
    name: "Y3RS",
    category: "Racing", 
    mainImage: racingImg1,
    galleryImages: [],
    "description": "Engineered for pure velocity and aerodynamic superiority, the Y3RS is the pinnacle of road racing performance. Its wind-cheating profile, ultra-lightweight construction, and seamless component integration provide the decisive edge needed for victory. Whether launching a breakaway, conquering a grueling climb, or sprinting for the line, the Y3RS translates every watt of power into blistering speed.",
  "features": [
    "Ultra-lightweight and stiff high-modulus T1000 carbon fiber frame with Kamm tail aerodynamic tube shaping",
    "State-of-the-art Shimano Dura-Ace Di2 R9250 2x12 electronic drivetrain for instantaneous, flawless shifting",
    "Shimano Dura-Ace R9270 hydraulic disc brakes offering supreme modulation and stopping power in all conditions",
    "Vittoria Corsa Speed G2.0 700x25c tires, offering minimal rolling resistance and superior grip, tubeless ready",
    "ENVE SES 5.6 Disc carbon wheelset for world-class aerodynamic performance and stability",
    "Fully integrated ENVE SES AR one-piece carbon handlebar and stem for superior aerodynamics and a clean aesthetic",
    "Proprietary Y3RS aero-profiled carbon seatpost to minimize drag",
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "High-Modulus T1000 Carbon, Kamm-Tail Aero Profile, Fully Internal Cable Routing, 12x142mm Thru-Axle, Flat-Mount Disc" },
        { "label": "Fork", "value": "Full Carbon Monocoque, Tapered Steerer, Integrated Crown, 12x100mm Thru-Axle, Flat-Mount Disc" },
        { "label": "Headset", "value": "FSA ACR Integrated, 1.5\" sealed cartridge bearings" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "Shimano Dura-Ace Di2 R9250, 12-speed" },
        { "label": "Front Derailleur", "value": "Shimano Dura-Ace Di2 R9250, braze-on" },
        { "label": "Shifters", "value": "Shimano Dura-Ace Di2 R9270, hydraulic disc, 2x12-speed" },
        { "label": "Crankset", "value": "Shimano Dura-Ace R9200, HollowTech II, 52/36T with 4iiii Precision Pro dual-sided power meter" },
        { "label": "Cassette", "value": "Shimano Dura-Ace CS-R9200, 11-30T, 12-speed" },
        { "label": "Chain", "value": "Shimano CN-M9100, 12-speed with Quick-Link" },
        { "label": "Bottom Bracket", "value": "CeramicSpeed PF86 for Shimano" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano Dura-Ace R9270, hydraulic disc, flat-mount" },
        { "label": "Brake Rotors", "value": "Shimano RT-MT900, 160mm (front), 140mm (rear), Center Lock with ICE TECHNOLOGIES FREEZA" },
        { "label": "Brake Levers", "value": "Shimano Dura-Ace Di2 R9270, hydraulic disc" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "ENVE SES 5.6 Disc, Carbon Fiber, 54mm front depth, 63mm rear depth, Tubeless Ready" },
        { "label": "Front Hub", "value": "ENVE Alloy, 12x100mm Center Lock" },
        { "label": "Rear Hub", "value": "ENVE Alloy, 12x142mm Center Lock, Shimano HG Driver" },
        { "label": "Spokes", "value": "Sapim CX-Ray, bladed" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Tires", "value": "Vittoria Corsa Speed G2.0, 700x25c, Graphene 2.0 compound, Tubeless Ready" }
      ]
    },
    {
      "groupName": "Cockpit",
      "items": [
        { "label": "Handlebar", "value": "ENVE SES AR Road Handlebar, one-piece carbon integration with stem" },
        { "label": "Stem", "value": "ENVE Integrated Road Stem, one-piece carbon" },
        { "label": "Tape", "value": "Lizard Skins DSP V2, 2.5mm" },
        { "label": "Saddle", "value": "Selle Italia SLR Boost Kit Carbonio Superflow, Carbon rails" },
        { "label": "Seatpost", "value": "Y3RS Aero Carbon, 0mm offset" },
        { "label": "Seat Clamp", "value": "Internal Wedge System" }
      ]
    },
    {
      "groupName": "Additional Components",
      "items": [
        { "label": "Pedals", "value": "Not included (Recommended: Look Keo Blade Carbon Ti or Shimano Dura-Ace PD-R9100)" },
        { "label": "Weight", "value": "Approx. 6.8 kg (for size M, without pedals)" },
        { "label": "Maximum Load", "value": "110 kg (rider + gear)" }
      ]
    }
  ],
  "availableSizes": ["49", "52", "54", "56", "58", "61"],
  "price": "11999.00",
  "currency": "€"
  },
  {
    id: 13,
    name: "Urban Commuter One",
    category: "City",
    mainImage: cityBikeHero ,
    galleryImages: [cityBikeHero],
   "description": "Navigate the cityscape with ease and style on the Urban Commuter one. This E-City bike is designed for the modern urbanite, blending a sleek, minimalist aesthetic with powerful and reliable electric assistance. Whether you're commuting to work, running errands, or enjoying a leisurely ride through the park, this bike provides a comfortable, efficient, and exhilarating experience. Its integrated features and user-friendly design make it the ultimate tool for urban mobility.",
  "features": [
    "Lightweight and sturdy aluminum frame with a comfortable, upright geometry and integrated battery",
    "Quiet and powerful Bosch Performance Line CX motor for smooth and natural-feeling assistance",
    "Long-range Bosch PowerTube 500Wh battery, elegantly integrated into the down tube",
    "Reliable Shimano Deore 10-speed drivetrain for smooth shifting and a wide gear range suitable for city inclines",
    "Powerful Shimano MT200 hydraulic disc brakes for dependable stopping power in all weather conditions",
    "Puncture-resistant Schwalbe Big Ben 28-inch tires for a smooth, comfortable ride over urban surfaces",
    "Fully equipped for city life with integrated front and rear lights, full-coverage fenders, and a sturdy rear rack",
   
  ],
  "specifications": [
    {
      "groupName": "E-Bike System",
      "items": [
        { "label": "Motor", "value": "Bosch Performance Line CX, Gen 4, 85Nm, 25km/h" },
        { "label": "Battery", "value": "Bosch PowerTube 500Wh, integrated" },
        { "label": "Display", "value": "Bosch Purion" },
        { "label": "Charger", "value": "Bosch 2A Compact Charger" }
      ]
    },
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "6061 Aluminium, Step-Thru, Integrated Battery, Internal Cable Routing, Rack & Fender Mounts" },
        { "label": "Fork", "value": "SR Suntour NEX, 63mm travel, lockout" },
        { "label": "Headset", "value": "FSA No.10, semi-integrated" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "Shimano Deore M6000, 10-speed, Shadow Plus" },
        { "label": "Shifters", "value": "Shimano Deore M6000, trigger, 10-speed" },
        { "label": "Crankset", "value": "FSA CK-220, 38T chainring" },
        { "label": "Cassette", "value": "Shimano HG500, 11-42T, 10-speed" },
        { "label": "Chain", "value": "KMC e10S" },
        { "label": "Bottom Bracket", "value": "Integrated in motor" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano MT200, hydraulic disc" },
        { "label": "Brake Rotors", "value": "Shimano SM-RT10, 180mm (front), 160mm (rear)" },
        { "label": "Brake Levers", "value": "Shimano MT200" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "Ryde Zac421, 32H, double wall, for disc" },
        { "label": "Front Hub", "value": "Shimano HB-TX505, Center Lock" },
        { "label": "Rear Hub", "value": "Shimano FH-TX505, Center Lock" },
        { "label": "Spokes", "value": "Sapim Leader, stainless steel" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Tires", "value": "Schwalbe Big Ben, 28x2.00\" (50-622), K-Guard puncture protection, RaceGuard" }
      ]
    },
    {
      "groupName": "Cockpit",
      "items": [
        { "label": "Handlebar", "value": "Comfort Riser Bar, 640mm width, 30mm rise" },
        { "label": "Stem", "value": "Adjustable Quill Stem, 90mm" },
        { "label": "Grips", "value": "Ergon GP1, ergonomic lock-on" },
        { "label": "Saddle", "value": "Selle Royal Lookin Moderate, with Royalgel" },
        { "label": "Seatpost", "value": "Suspension Seatpost, 30.9mm, 40mm travel" }
      ]
    },
    {
      "groupName": "Accessories",
      "items": [
        { "label": "Front Light", "value": "Herrmans H-Black MR4, integrated, powered by main battery" },
        { "label": "Rear Light", "value": "Herrmans H-Trace, integrated in rear rack, powered by main battery" },
        { "label": "Fenders", "value": "SKS Stingray 2, full coverage" },
        { "label": "Rear Rack", "value": "Racktime-compatible, 25kg max load" },
        { "label": "Kickstand", "value": "Pletscher Comp Flex 40, adjustable" },
        { "label": "Pedals", "value": "City comfort pedals with anti-slip surface" },
        { "label": "Weight", "value": "Approx. 24.5 kg (for size M, including battery)" },
        { "label": "Maximum Load", "value": "140 kg (rider + gear + bike)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L"],
  "price": "3299.00",
  "currency": "€"
  },
    { 
    id: 14, 
    name: "MetroGlide Connect",
    category: "City", 
    mainImage: cityBikeHero,
    galleryImages: [],
   "description": "Experience the ultimate in urban freedom with the MetroGlide Connect. This E-City bike is engineered for the discerning city dweller, offering a seamless blend of sophisticated design, smart technology, and effortless power. Perfect for daily commutes, weekend explorations, or quick trips to the market, the MetroGlide provides a smooth, comfortable, and stylish ride. Its intuitive features and robust construction make it your most reliable partner for navigating the urban landscape.",
  "features": [
    "Sleek and durable 6061 aluminum frame featuring a low-step design for easy access and an integrated battery for a clean aesthetic.",
    "Powerful and efficient Shimano STEPS E6100 motor, delivering smooth, reliable, and quiet assistance.",
    "High-capacity Shimano STEPS BT-E8035 504Wh battery, neatly integrated into the frame for balanced weight distribution and long-range rides.",
    "Smooth and precise Shimano Nexus 8-speed internal gear hub, offering effortless shifting and low maintenance.",
    "Confident all-weather stopping power with Shimano MT400 hydraulic disc brakes.",
    "Comfortable and durable Continental Ride City 28-inch tires with puncture protection, ideal for varied urban terrains.",
    "Fully equipped for the demands of city riding, including integrated Axa front and rear lights, durable alloy fenders, and a versatile MIK-compatible rear rack.",
   
  ],
  "specifications": [
    {
      "groupName": "E-Bike System",
      "items": [
        { "label": "Motor", "value": "Shimano STEPS E6100, 60Nm, 25km/h" },
        { "label": "Battery", "value": "Shimano STEPS BT-E8035, 504Wh, integrated" },
        { "label": "Display", "value": "Shimano SC-E6100 LCD" },
        { "label": "Charger", "value": "Shimano STEPS EC-E6002 2A" }
      ]
    },
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "Aluminium Superlite, Comfort Ride Geometry, Low-Step, Tapered Head Tube, Internal Cable Routing" },
        { "label": "Fork", "value": "SR Suntour NEX-E25, 50mm travel" },
        { "label": "Headset", "value": "ACROS AZX-1030, BlockLock 135°, semi-integrated" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Gear System", "value": "Shimano Nexus, 8-speed, internal gear hub" },
        { "label": "Shifters", "value": "Shimano Nexus SL-C6000, Revoshift" },
        { "label": "Crankset", "value": "Shimano STEPS FC-E6100, 38T" },
        { "label": "Sprocket", "value": "Shimano Nexus, 19T" },
        { "label": "Chain", "value": "KMC Z1 eHX" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano BR-MT400, hydraulic disc" },
        { "label": "Brake Rotors", "value": "Shimano SM-RT30, 180mm (front), 180mm (rear)" },
        { "label": "Brake Levers", "value": "Shimano BL-MT401" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "CUBE EX23, 36H, disc, tubeless ready" },
        { "label": "Front Hub", "value": "Shimano HB-M4050, Center Lock" },
        { "label": "Rear Hub", "value": "Shimano Nexus SG-C6001-8D, 8-Speed, Center Lock" },
        { "label": "Spokes", "value": "DT Swiss Industry, stainless steel" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Tires", "value": "Continental Ride City, 28x1.75\" (47-622), ProTection, Reflex" }
      ]
    },
    {
      "groupName": "Cockpit",
      "items": [
        { "label": "Handlebar", "value": "CUBE Comfort Trail Bar, 680mm" },
        { "label": "Stem", "value": "CUBE Performance Stem Pro, 31.8mm, adjustable" },
        { "label": "Grips", "value": "Natural Fit Comfort, ergonomic" },
        { "label": "Saddle", "value": "Selle Royal Nuvola" },
        { "label": "Seatpost", "value": "CUBE Suspension Seatpost HD, 30.9mm" }
      ]
    },
    {
      "groupName": "Accessories",
      "items": [
        { "label": "Front Light", "value": "Axa Compactline 20, 20 Lux, powered by main battery" },
        { "label": "Rear Light", "value": "Trelock LS 611 Duo Flat, integrated, powered by main battery" },
        { "label": "Fenders", "value": "ACID 53 BB-Mount, alloy" },
        { "label": "Rear Rack", "value": "MIK (Mounting is Key) Compatible Carrier, max 25kg load" },
        { "label": "Kickstand", "value": "CUBEstand Cmpt, adjustable" },
        { "label": "Pedals", "value": "VP-616, City Pedals with non-slip rubber" },
        { "label": "Weight", "value": "Approx. 25.1 kg (for size M, including battery)" },
        { "label": "Maximum Load", "value": "150 kg (rider + gear + bike)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L", "XL"],
  "price": "3499.00",
  "currency": "€"
  },
    { // NOWY ROWER W KATEGORII GRAVEL
    id: 15, 
    name: "C55 Connect",
    category: "City", // Ta sama kategoria
    mainImage: cityBikeHero,
    galleryImages: [],
    "description": "Experience seamless urban travel with the C55 Connect. This E-City bike is engineered for the connected commuter, offering a perfect blend of smart technology, comfort, and elegant design. Ideal for daily commutes, weekend explorations, and everything in between, the C55 Connect delivers a smooth, intuitive, and enjoyable ride. Its integrated connectivity features and robust build make it the ultimate companion for modern city living.",
  "features": [
    "Sleek and durable hydroformed aluminum frame with a low-step design for easy access and a fully integrated battery.",
    "Powerful and efficient Shimano STEPS E6100 motor, providing smooth and intelligent assistance for a natural riding feel.",
    "High-capacity Shimano STEPS BT-E8035 504Wh battery, seamlessly integrated for a clean look and balanced weight distribution.",
    "Low-maintenance and user-friendly Shimano Nexus 8-speed internal gear hub for effortless shifting, even at a standstill.",
    "Reliable Shimano MT400 hydraulic disc brakes for confident and consistent braking performance in any weather.",
    "Durable and comfortable 27.5-inch Continental Ride Tour tires with puncture protection for a worry-free ride on city streets.",
    "Fully equipped for the urban environment with integrated Spanninga front and rear lights, custom-designed fenders, and a MIK HD-compatible rear rack.",

  ],
  "specifications": [
    {
      "groupName": "E-Bike System",
      "items": [
        { "label": "Motor", "value": "Shimano STEPS E6100, 60Nm, 25km/h" },
        { "label": "Battery", "value": "Shimano STEPS BT-E8035, 504Wh, integrated" },
        { "label": "Display", "value": "Shimano SC-E6100, Bluetooth LE compatible" },
        { "label": "Charger", "value": "Shimano EC-E6002 2A Charger" }
      ]
    },
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "6061 Hydroformed Aluminium, Low-Step, Integrated Battery, Internal Routing, Tapered Headtube" },
        { "label": "Fork", "value": "SR Suntour NEX E25, 63mm travel, coil spring" },
        { "label": "Headset", "value": "Acros AIX-342, tapered, integrated" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Hub (Internal)", "value": "Shimano Nexus 8-Speed, SG-C6001-8D" },
        { "label": "Shifters", "value": "Shimano Nexus Revoshift, 8-speed" },
        { "label": "Crankset", "value": "Shimano STEPS FC-E6100, 38T chainring" },
        { "label": "Sprocket", "value": "Shimano SM-GEAR, 19T" },
        { "label": "Chain", "value": "KMC Z1eHX EPT, anti-rust coating" },
        { "label": "Bottom Bracket", "value": "Integrated in motor" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "Shimano MT400, hydraulic disc" },
        { "label": "Brake Rotors", "value": "Shimano SM-RT30, 180mm (front & rear), Center Lock" },
        { "label": "Brake Levers", "value": "Shimano MT401" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "Crosser X15, 36H, double wall, eyeleted" },
        { "label": "Front Hub", "value": "Shimano HB-M4050, Center Lock" },
        { "label": "Rear Hub", "value": "Shimano Nexus SG-C6001-8D, 8-Speed" },
        { "label": "Spokes", "value": "Sapim Strong, black stainless steel" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Tires", "value": "Continental Ride Tour, 27.5x1.75\" (47-584), Puncture ProTection, reflective sidewall" }
      ]
    },
    {
      "groupName": "Cockpit",
      "items": [
        { "label": "Handlebar", "value": "Comfort Touring Bar, 660mm width, 25mm rise" },
        { "label": "Stem", "value": "Adjustable Alloy Stem, 0-60 degrees, 90mm" },
        { "label": "Grips", "value": "Selle Royal Mano Relaxed" },
        { "label": "Saddle", "value": "Selle Royal Essenza Moderate" },
        { "label": "Seatpost", "value": "Alloy, micro-adjust, 31.6mm" }
      ]
    },
    {
      "groupName": "Accessories",
      "items": [
        { "label": "Front Light", "value": "Spanninga Axendo 40, 40 Lux, powered by main battery" },
        { "label": "Rear Light", "value": "Spanninga Lineo, integrated in fender, powered by main battery" },
        { "label": "Fenders", "value": "Custom Alloy, full coverage with integrated wiring" },
        { "label": "Rear Rack", "value": "MIK HD compatible, 27kg max load" },
        { "label": "Kickstand", "value": "Ursus Wave Rear, adjustable" },
        { "label": "Pedals", "value": "VP-831, anti-slip comfort pedals" },
        { "label": "Weight", "value": "Approx. 25.2 kg (for size M, including battery)" },
        { "label": "Maximum Load", "value": "150 kg (rider + gear + bike)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L", "XL"],
  "price": "3499.00",
  "currency": "€"
  },
   {
    id: 16, 
    name: "Enduro Beast FS",
    category: "MTB Fully",
    mainImage: FullyGreenHero,
    galleryImages: [
    FullyGreenHero
    ],
    "description": "Unleash your full potential on the most demanding trails with the Enduro Beast FS. This full-suspension mountain bike is engineered for aggressive enduro racing and radical all-mountain adventures. With a slack head angle, long travel suspension, and a bomber build kit, the Enduro Beast FS provides unshakable confidence on steep, technical descents while remaining an efficient climber. It's the ultimate machine for riders who push their limits and demand a bike that can keep up.",
  "features": [
    "Lightweight yet durable carbon fiber frame with aggressive, modern enduro geometry and internal cable routing.",
    "Fox Factory 38 fork with 170mm of travel, featuring the GRIP2 damper for ultimate adjustability and control.",
    "Fox Factory Float X2 rear shock, providing supple small-bump sensitivity and big-hit absorption.",
    "SRAM's reliable and crisp-shifting X01 Eagle 12-speed drivetrain with a massive 10-52T gear range for any climb.",
    "Powerful SRAM Code RSC 4-piston hydraulic disc brakes for incredible stopping power and modulation.",
    "Robust DT Swiss EX511 29-inch tubeless-ready wheels, built to withstand the rigors of enduro racing.",
    "High-grip Maxxis Assegai and Minion DHR II tires for uncompromising traction in all conditions.",
  
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "Full Carbon Fiber, 160mm travel, Enduro Geometry, Boost 148x12mm thru-axle, Internal Cable Routing" },
        { "label": "Fork", "value": "Fox Factory 38, GRIP2 Damper, 170mm Travel, 44mm Offset, Boost 110x15mm" },
        { "label": "Rear Shock", "value": "Fox Factory Float X2, 2-Position Lever, 205x65mm" },
        { "label": "Headset", "value": "Cane Creek 40, Integrated, Tapered" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "SRAM X01 Eagle, 12-speed" },
        { "label": "Shifters", "value": "SRAM X01 Eagle, Trigger, 12-speed" },
        { "label": "Crankset", "value": "SRAM X01 Eagle Carbon, DUB, 32T chainring, 170mm" },
        { "label": "Cassette", "value": "SRAM XG-1295 Eagle, 10-52T, 12-speed" },
        { "label": "Chain", "value": "SRAM X01 Eagle, 12-speed" },
        { "label": "Bottom Bracket", "value": "SRAM DUB, BSA Threaded" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "SRAM Code RSC, 4-piston hydraulic disc" },
        { "label": "Brake Rotors", "value": "SRAM Centerline, 200mm (front & rear)" },
        { "label": "Brake Levers", "value": "SRAM Code RSC, tool-free reach and contact point adjust" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "DT Swiss EX511, 32H, 30mm internal width, tubeless ready" },
        { "label": "Front Hub", "value": "DT Swiss 350, 6-bolt, Boost 110x15mm" },
        { "label": "Rear Hub", "value": "DT Swiss 350, 6-bolt, XD Driver, Boost 148x12mm" },
        { "label": "Spokes", "value": "DT Swiss Competition, double butted" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Front Tire", "value": "Maxxis Assegai, 29x2.5\" WT, 3C MaxxGrip, EXO+, Tubeless Ready" },
        { "label": "Rear Tire", "value": "Maxxis Minion DHR II, 29x2.4\" WT, 3C MaxxTerra, EXO+, Tubeless Ready" }
      ]
    },
    {
      "groupName": "Cockpit",
      "items": [
        { "label": "Handlebar", "value": "Race Face Turbine R 35, 800mm width, 20mm rise" },
        { "label": "Stem", "value": "Race Face Turbine R 35, 40mm length" },
        { "label": "Grips", "value": "DMR DeathGrip, soft compound, lock-on" },
        { "label": "Saddle", "value": "WTB Silverado, Cro-Mo rails" },
        { "label": "Seatpost", "value": "RockShox Reverb Stealth, 31.6mm, 175mm travel (size M/L)" }
      ]
    },
    {
      "groupName": "Components",
      "items": [
        { "label": "Pedals", "value": "Not included" },
        { "label": "Weight", "value": "Approx. 14.8 kg (for size M, without pedals)" },
        { "label": "Maximum Load", "value": "130 kg (rider + gear)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L", "XL"],
  "price": "5999.00",
  "currency": "€"
},
{
   id: 17, 
    name: "Enduro Beast FS",
    category: "MTB Fully",
    mainImage: fullyHero,
    galleryImages: 
  [
    fullyHero, fullyOrange, fullyOrange2, fullyOrange3
  ],
  "description": "Unleash your potential on the most demanding trails with the Trail Dominator Pro. This E-MTB is engineered for aggressive enduro riding, providing the power and control to conquer steep, technical climbs and bomb down challenging descents with confidence. Its plush suspension platform, robust components, and powerful electric motor work in harmony to deliver a ride that's both exhilarating and inspiring. Get ready to push your limits and discover new lines.",
  "features": [
    "Robust and lightweight carbon fiber main frame with alloy rear triangle, featuring modern enduro geometry and 160mm of rear travel.",
    "High-torque Bosch Performance Line CX motor, optimized for MTB use, providing powerful assistance on the steepest climbs.",
    "High-capacity Bosch PowerTube 750Wh battery for extended range, fully integrated for a clean look and low center of gravity.",
    "Precision SRAM GX Eagle 12-speed drivetrain for a massive gear range and crisp, reliable shifting in all conditions.",
    "Powerful SRAM Code R 4-piston hydraulic disc brakes with large 200mm rotors for ultimate stopping power and heat management.",
    "Aggressive Maxxis Assegai/Minion DHR II 29-inch tubeless-ready tires for maximum grip and control in varied terrain.",
    "Fully equipped for aggressive trail riding with a long-travel dropper post, wide handlebars, and a short stem for optimal control.",
    
  ],
  "specifications": [
    {
      
      "items": [
        { "label": "Motor", "value": "Bosch Performance Line CX, Gen 4, 85Nm, 25km/h, eMTB mode" },
        { "label": "Battery", "value": "Bosch PowerTube 750Wh, integrated, Smart System" },
        { "label": "Display", "value": "Bosch Kiox 300 w/ LED Remote" },
        { "label": "Charger", "value": "Bosch 4A Standard Charger" }
      ]
    },
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "Carbon Main Frame, 6061 Alloy Rear Triangle, 160mm travel, Four-Bar Suspension, Boost 148x12mm axle, Post Mount" },
        { "label": "Fork", "value": "RockShox ZEB Select+, Charger 3 RC2 damper, 170mm travel, 44mm offset, Boost 110x15mm axle" },
        { "label": "Rear Shock", "value": "RockShox Super Deluxe Select+, DebonAir+, RC2T damper, 230x65mm" },
        { "label": "Headset", "value": "Acros ZS56/ZS66, BlockLock" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "SRAM GX Eagle, 12-speed" },
        { "label": "Shifters", "value": "SRAM GX Eagle, single click trigger, 12-speed" },
        { "label": "Crankset", "value": "E*thirteen e*spec Plus Crank, 165mm, 34T chainring" },
        { "label": "Cassette", "value": "SRAM Eagle XG-1275, 10-52T, 12-speed" },
        { "label": "Chain", "value": "SRAM GX Eagle" },
        { "label": "Chain Guide", "value": "E*thirteen e*spec Plus" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Brakes", "value": "SRAM Code R, 4-piston hydraulic disc" },
        { "label": "Brake Rotors", "value": "SRAM Centerline, 220mm (front), 200mm (rear)" },
        { "label": "Brake Levers", "value": "SRAM Code R" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "WTB ST i30 TCS 2.0, 32H, 30mm inner width, tubeless ready" },
        { "label": "Front Hub", "value": "Formula DC-711, Boost 110x15mm, 6-bolt" },
        { "label": "Rear Hub", "value": "Formula EHL-148S, Boost 148x12mm, 6-bolt" },
        { "label": "Spokes", "value": "DT Swiss Champion, black" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Front Tire", "value": "Maxxis Assegai, 29x2.5\" WT, 3C MaxxGrip, EXO+, Tubeless Ready" },
        { "label": "Rear Tire", "value": "Maxxis Minion DHR II, 29x2.4\" WT, 3C MaxxTerra, EXO+, Tubeless Ready" }
      ]
    },
    {
      "groupName": "Cockpit",
      "items": [
        { "label": "Handlebar", "value": "Race Face Aeffect R, 35mm clamp, 780mm width, 20mm rise" },
        { "label": "Stem", "value": "Race Face Aeffect R, 35mm clamp, 40mm length, 0° rise" },
        { "label": "Grips", "value": "DMR DeathGrip, soft compound, lock-on" },
        { "label": "Saddle", "value": "WTB Volt, Cromoly rails" },
        { "label": "Seatpost", "value": "BikeYoke Revive Dropper Post, 31.6mm, (S: 125mm, M: 160mm, L/XL: 185mm travel)" }
      ]
    },
    {
      "groupName": "Accessories",
      "items": [
        { "label": "Pedals", "value": "Not included" },
        { "label": "Weight", "value": "Approx. 25.2 kg (for size M, without pedals)" },
        { "label": "Maximum Load", "value": "136 kg (rider + gear + bike)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L", "XL"],
  "price": "6499.00",
  "currency": "€"
},
{
   id: 18, 
    name: "Enduro Beast FS",
    category: "MTB Fully",
    mainImage: fullyOrange , 
    galleryImages: 
  [fullyOrange],
  "description": "Unleash your full potential on the trails with the Foxy RS. This full-suspension mountain bike is engineered for aggressive trail riding and enduro racing, offering a perfect balance of climbing efficiency and descending prowess. The advanced kinematics, coupled with a top-tier component selection, provide a ride that is both exhilaratingly fast and supremely confident. Whether you're tackling technical singletrack, hitting big mountain lines, or competing against the clock, the Foxy RS is your ultimate weapon for all-out trail domination.",
  "features": [
    "Lightweight and durable 6061 Alloy Stealth Evo frame featuring Forward Geometry and Zero Suspension System.",
    "High-performance Fox 36 Float EVOL GRIP Rhythm fork with 160mm of travel for exceptional control in rough terrain.",
    "Öhlins TTX Air rear shock, 205x65mm, providing 150mm of supple and supportive rear wheel travel.",
    "Precise and reliable SRAM GX Eagle 12-speed drivetrain for crisp shifting and a wide gear range to conquer any climb.",
    "Powerful SRAM G2 R 4-piston hydraulic disc brakes for ultimate stopping power and modulation.",
    "Robust e*thirteen LG1 Enduro 29-inch wheels, ready for aggressive riding and tough impacts.",
    "Maxxis Minion DHF and DHR II tires for uncompromising grip and cornering confidence in varied conditions.",
   
  ],
  "specifications": [
    {
      "groupName": "Frameset",
      "items": [
        { "label": "Frame", "value": "Foxy 29 6061 Alloy Stealth Evo, hydroformed tubing, Zero Suspension System, 150mm travel, Forward Geometry, Boost 12x148mm rear axle" },
        { "label": "Fork", "value": "Fox 36 29 Float GRIP EVOL Rhythm, 160mm, tapered steerer tube, Boost 15x110mm axle, 44mm offset" },
        { "label": "Rear Shock", "value": "Öhlins TTX Air 205x65mm. Settings: high speed compression lever with climb mode, low-speed compression, rebound, air preload." },
        { "label": "Headset", "value": "Onoff Saturn tapered for 1-1/8” to 1-1/2” head tube, ACB sealed bearings" }
      ]
    },
    {
      "groupName": "Drivetrain",
      "items": [
        { "label": "Rear Derailleur", "value": "SRAM GX Eagle, Type 3 roller bearing clutch, cage lock, 1x12s, X-Actuation 1:1" },
        { "label": "Shifters", "value": "SRAM Trigger NX Eagle, 12s, X-Actuation 1:1" },
        { "label": "Crankset", "value": "SRAM SX Eagle, Boost, DUB axle, Direct Mount chainring, 32T, S/M size: 170mm, L/XL size: 175mm" },
        { "label": "Cassette", "value": "SRAM PG-1230, 11-50T, 12s" },
        { "label": "Chain", "value": "SRAM SX Eagle, 12s, Powerlock" },
        { "label": "Bottom Bracket", "value": "SRAM DUB BSA, sealed bearings, 73mm" }
      ]
    },
    {
      "groupName": "Brakes",
      "items": [
        { "label": "Front Brake", "value": "SRAM G2 R, 4-piston caliper, Centerline 200mm IS 6 bolts one-piece rotor, steel-backed organic pads" },
        { "label": "Rear Brake", "value": "SRAM G2 R, 4-piston caliper, Centerline 180mm IS 6 bolts one-piece rotor, steel-backed organic pads" },
        { "label": "Brake Levers", "value": "SRAM G2 R, tool-free reach adjust" }
      ]
    },
    {
      "groupName": "Wheels",
      "items": [
        { "label": "Rims", "value": "e*thirteen LG1 Enduro, IW30 Hookless, 6069 Welded Aluminum, 30mm internal width, tubeless ready, 28 spokes" },
        { "label": "Front Hub", "value": "e*thirteen Boost 15x110mm, triple-sealed, fully machined aluminum, IS 6 bolts" },
        { "label": "Rear Hub", "value": "e*thirteen Boost 12x148mm, triple-sealed, fully machined aluminum w/6-degree engagement, IS 6 bolts" },
        { "label": "Spokes", "value": "e*thirteen custom J-bend, triple-butted alloy, alloy nipples, brass washers" }
      ]
    },
    {
      "groupName": "Tires",
      "items": [
        { "label": "Front Tire", "value": "Maxxis Minion DHF 29x2.5 WT, tubeless ready, 3C MAXX TERRA compound, EXO+ protection, 120TPI, folding bead" },
        { "label": "Rear Tire", "value": "Maxxis Minion DHR II 29x2.4 WT, tubeless ready, 3C MAXX TERRA compound, EXO+ protection, 120TPI, folding bead" }
      ]
    },
    {
      "groupName": "Cockpit",
      "items": [
        { "label": "Handlebar", "value": "Onoff Sulfur 1.0 double butted 6061 alloy, rise: 20mm, width: 800mm, 9º backsweep, 5º upsweep, 31.8mm barbore" },
        { "label": "Stem", "value": "Onoff Sulfur FG 30mm 0º, 6061 forged alloy, 31.8mm barbore" },
        { "label": "Grips", "value": "Onoff Diamond, 1lock-on, 135mm" },
        { "label": "Saddle", "value": "SDG BEL-AIR 3.0, LPU foam, steel rails" },
        { "label": "Seatpost", "value": "Onoff Pija dropper internal, diameter 31.6mm, S size: 405x95-125mm, M size 458x120-150mm, L size: 498x140-170mm, XL size: 498x140-170mm" }
      ]
    },
    {
      "groupName": "Other",
      "items": [
        { "label": "Pedals", "value": "Not Included" },
        { "label": "Weight", "value": "Approx. 15.7 kg (for size M, without pedals)" },
        { "label": "Maximum Load", "value": "150 kg (rider + gear + bike)" }
      ]
    }
  ],
  "availableSizes": ["S", "M", "L", "XL"],
  "price": "4799.00",
  "currency": "€"
}

];


export const findBikeById = (id) => {
  const numericId = parseInt(id, 10);
  return allBikesData.find(bike => bike.id === numericId);
};

export const getUniqueCategories = () => {
  const categoryData = allBikesData.reduce((acc, bike) => {
    if (!acc[bike.category]) {
      acc[bike.category] = {
        name: bike.category,
        image: bike.mainImage 
      };
    }
    return acc;
  }, {});
  return Object.values(categoryData);
};