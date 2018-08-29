function scienceSnippet() {
  const sciP = document.getElementById("sci-snippet");

  const scienceSnippets = [
    "Octopuses have three hearts, nine brains, and blue blood.",
    "It is mathematically possible to build an actual time machine - what's holding us back is finding materials that can physically bend the fabric of space-time.",
    "Lungs don't just facilitate respiration - they also make blood. Mammalian lungs produce more than 10 million platelets (tiny blood cells) per hour, which equates to the majority of platelets circulating the body.",
    "The black mesh at the front of a microwave is called a faraday cage. It’s holes are smaller than the wavelength of microwaves, so the majority can’t get through.",
    "The majority of the oxygen on Earth comes from plants in the ocean.",
    "The earliest species we identify as a ‘tree’ existed 350 million years ago. The earliest species we identify as a ‘shark’ existed 400 million years ago. So, sharks existed before trees.",
    "Your shoelaces come undone because the knot is subject to forces of up to 7G with every step you take.",
    "New research on heavy-lifting ants reveals that the neck joint of a common American field ant can withstand pressures up to 5,000 times greater than its own body weight.",
    "You can fit every planet in our solar system in the gap between the earth and the moon.",
    "Alaskan killer whales sometimes eat moose and deer swimming between islands.",
    "The mutation of blue eyes is more recent than the first human pottery.",
    "You can hear the difference between hot and cold water when it is being poured.",
    "The lubricant in your knees is one of the slipperiest substances known.",
    "There are more molecules in a lungful of air than there are lungfuls of air in the atmosphere.",
    "9% of all humans who ever existed are still alive today.",
    "Fibrodysplasia ossificans progressiva progressively turns human muscle tissue into bone.",
    "Turkeys can spontaneously impregnate themselves through a process called Parthenogenesis.",
    "A human liver can be split in two and both sides will regenerate into fully functioning livers.",
    "Injecting a very specific amount of iodine can force axolotls to change into salamanders.",
    "Leopards can carry a carcass twice its own body weight up a tree.",
    "Elephants can communicate using very low frequency sounds, with pitches below the range of human hearing. These low-frequency sounds, termed 'infrasounds,' can travel several kilometers.",
    "There are more trees on earth than there are stars in the galaxy.",
    "The coldest place in the universe that we know of is on Earth, created in a laboratory.",
    "In a room of 23 people there’s a 50% chance of two people having the same birthday.",
    "Brown fat, unlike white fat, generates heat when metabolised. It's been shown that exposure to cold causes your body to generate it. People who move from cold environments to warm environments climatise and lose their increased brown fat.",
    "The earth has lost half of its wildlife in the last 40 years.",
    "Two metal objects can stick together in space, permanently. There is no fusion involved, it’s called cold welding.",
    "Some metals are so reactive that they explode on contact with water.",
    "A teaspoonful of neutron star would weigh 6 billion tons.",
    "Polar bears are nearly undetectable by infrared cameras.",
    "Stomach acid is strong enough to dissolve stainless steel.",
    "Venus is the only planet to spin clockwise.",
    "The male platypus has a venomous spur on its hind foot capable of dispensing a poison that can kill a medium-sized dog.",
    "Pregnant women have about 50 percent more blood by week 20 of pregnancy than they did before they conceived.",
    "Microbiologists at the University of Idaho say that there are about ten times the number of bacterial cells in your body as there are human cells.",
    "10% of Europeans are naturally immune to the HIV virus due to a genetic mutation. Scientists believe this mutation was a result of all the plagues in the middle ages.",
    "Playing a moderate amount of video games is actually good for you. It boosts your memory and multitasking skills, can help those with dyslexia, increases coordination, and reduces stress.",
    "There's a migraine medication (Sumatriptan) that can cause some people's blood to turn dark green when taken in large doses.",
    "Luna moths have no mouths. Once they emerge from their cocoon, they have a 7 day lifespan during which they mate and then starve to death.",
    "Tears you cry when you're upset actually contain a hormone that's a natural painkiller. Your body releases this hormone (called leucine enkephalin) when you're under stress.",
    "Jellyfish and lobsters are biologically immortal. They only die from injury or disease, not aging.",
    "The smell that grass gives off when it's cut is actually a distress signal. You're basically smelling the grass screaming in pain.",
    "Velociraptors were actually only about the size of a Turkey.",
    "Honey, when sealed, does not rot or go bad. It's edible thousands of years later. Egyptian tombs have been found with jars of still edible honey inside.",
    "Sunflowers are sometimes used to clean up nuclear waste and radioactive soil. They pick up radioactive isotopes, so as they grow, they literally suck the radiation up out of the soil.",
    "Humans have over 20 senses. For example, Proprioception is the ability to tell where your body parts are in relation to other body parts, even when you can't see them.",
    "The weight of the average fluffy, cumulus cloud is a little over a million pounds. Clouds are made up of tiny drops of water dispersed over a large area (much larger than it seems from the ground) and water is very heavy.",
    "Up until the 1960's, doctors determined if a woman was pregnant by injecting her urine into a female frog. If the frog laid eggs within a day (due to the hormones in the pregnant woman's urine), it was considered positive.",
    "African Elephants are pregnant for 22 months. It's the longest gestation of any mammal. Some sharks, which are not mammals, can carry their young for over three years.",
    "There is a species of beetle - the Bombardier Beetle - that shoots a boiling hot chemical mixture at its enemies by mixing hydroquinone and hydrogen peroxide together, which are stored separately in the beetle's abdomen until needed.",
    "Giant penguins about the size of a grown man waddled around New Zealand about 59 million years ago.",
    "The world’s smallest fidget spinner is 100 microns wide.",
    "Great apes, including chimpanzees and orangutans, have absolutely no appreciation of music whatsoever.",
    "Bees have been shown to understand the concept of zero",
    "Polar Bears can run at 25 miles an hour and jump over 6 feet in the air",
    "Butterflies taste with their hind feet, and their taste sensation works on touch – this allows them to determine whether a leaf is edible",
    "You'd be better off surviving a grenade on land rather than underwater",
    "The spine can elongate by around 3% when in space, which is why humans grow taller in space.",
    "If you eat a polar bear liver, you will die due to the vitamin A content.",
    "Crows can recognize human faces and hold a grudge against the ones they don't like.",
    "Elephants have been shown to complete teamwork exercises faster than the humans who designed the expiriment",
    "Between birth and death, the human body goes from having 300 bones, to just 206.",
    "When you blush, the inside of your stomach does too.",
    "In cases of extreme starvation, the brain will begin to eat itself.",
    "When listening to music, your heartbeat will sync with the rhythm.",
    "Your ears and your nose never stop growing.",
    "We have made completely lab grown meat using stem cells from a cow and cooked the world’s first 100% artificial burger without having to slaughter a cow for the meat.",
    "A single bolt of lightning contains enough energy to cook 100,000 pieces of toast.",
    "Human saliva contains a painkiller called opiorphin that is six times more powerful than morphine.",
    "As a gas, oxygen is odorless and colorless. In its liquid and solid forms, it looks pale blue.",
    "A cockroach can live 9 days without its head before it starves to death?",
    "Human teeth are just as strong as shark teeth.",
    "The average time it takes for plastic to decompose is 450 years. Glass takes 4,000 years!",
    "Male, and not the female, seahorses give birth to the young ones.",
    "The longest time between two twins being born is 87 days.",
    "Everyone has a unique tongue print, just like fingerprints.",
    "Light doesn't necessarily travel at the 'speed of light'. The slowest we've ever recorded light moving at is 38 mph.",
    "Hydras tear themselves to create a new mouth opening every time they eat",
    "The sun emits enough energy in a single second to heat up 3,200-billion-billion hot pockets",
    
  ];

  sciP.innerHTML = scienceSnippets[ Math.floor( Math.random() * scienceSnippets.length ) ];
}

scienceSnippet();
