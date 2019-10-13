import React from 'react'

export const armies=[
    {
      "Kind": "Advanced Recon Commandos",
      "Description": "Also known as ARC troopers, were elite clone troopers that excel and received further training.",
      "Strength": 6,
      "Agility": 3,
      "Intelligence": 5,
      "Terrain": "Air, Under water, Inter Galactic Space, Ground, Buildings",
      "Type": "clone trooper",
      "image": <img src={require("../assets/images/Troopers/Clone_trooper_armor.png")}/>
    },
    {
      "Kind": "Clone SCUBA troopers",
      "Description": "Clone troopers equipped with underwater armor and weaponry.",
      "Strength": 4,
      "Agility": 3,
      "Intelligence": 7,
      "Terrain": "Under Water, Ground",
      "Type": "clone trooper",
      "image": <img src={require("../assets/images/Troopers/CloneSCUBAtrooper-TCWs4BR1.png")}/>
    },
    {
      "Kind": "Clone sharpshooters",
      "Description": "Clone troopers trained to be snipers.",
      "Strength": 2,
      "Agility": 7,
      "Intelligence": 8,
      "Terrain": "Ground, Buildings",
      "Type": "clone trooper",
      "image": <img src={require("../assets/images/Troopers/KixFull-SWE.png")}/>
    },
    {
      "Kind": "Clone jetpack troopers",
      "Description": "Clone troopers equipped with a jetpack and missile launcher",
      "Strength": 8,
      "Agility": 8,
      "Intelligence": 4,
      "Terrain": "Ground, Inter Galactic Space",
      "Type": "clone trooper",
      "image": <img src={require("../assets/images/Troopers/Phase1Jumptrooper_BFII.png")}/>
    },
    {
      "Kind": "Clone ordnance specialists",
      "Description": "Clone troopers that have received specialized training in arming and diffusing bombs.",
      "Strength": 9,
      "Agility": 7,
      "Intelligence": 4,
      "Terrain": "Ground, Buildings",
      "Type": "clone trooper",
      "image": <img src={require("../assets/images/Troopers/Squad_Clone_Trooper_Ordnance_Specialist.png")}/>
    },
    {
      "Kind": "B1 Battle droids",
      "Description": "B1 battle droids, also referred to as standard battle droids, were the most widely used battle droids manufactured by Baktoid Combat Automata and Baktoid Armor Workshop",
      "Strength": 3,
      "Agility": 5,
      "Intelligence": 7,
      "Terrain": "Air, Under water, Inter Galactic Space, Ground, Buildings",
      "Type": "droid army",
      "image": <img src={require("../assets/images/droid army/b1battledroid.png")}/>
    },
    {
      "Kind": "B2 Super battle droids",
      "Description": "B2 super battle droids, also known as super battle droids or super droids, were an advanced battle droid used by the Confederacy of Independent Systems during the Clone Wars. Super battle droids were much stronger than their predecessors, and like the updated B1s used by the Confederacy, they did not require a command system to operate, which gave the droids limited independence.",
      "Strength": 6,
      "Agility": 4,
      "Intelligence": 8,
      "Terrain": "Air, Under water, Inter Galactic Space, Ground, Buildings",
      "Type": "droid army",
      "image": <img src={require("../assets/images/droid army/SuperBattleDroidDetail-SWE.png")}/>
    },
    {
      "Kind": "Armored Assault Tanks",
      "Description": "The Armored Assault Tank, also known as the AAT battle tank or the AAT-1 Hover Tank, was an artillery vehicle used by the Trade Federation",
      "Strength": 8,
      "Agility": 3,
      "Intelligence": 2,
      "Terrain": "Air, Under water, Inter Galactic Space, Ground, Buildings",
      "Type": "droid army",
      "image": <img style={{width:'200px',height:'80%'}} src={require("../assets/images/droid army/AAT_BF2.png")}/>
    }
  ]