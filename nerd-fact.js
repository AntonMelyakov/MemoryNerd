$text = $('.fact-two');

let facts = {
batmanOne: "Ben Affleck gained an additional 20 lbs (9 kg) of muscle and reached 8% body fat for his role as Bruce Wayne/Batman.",
supermenOne: "In the 90’s, a canceled Superman movie was going to be produce that would be directed by Tim Burton and star Nicholas Cage as Superman. While the movie was never made, Cage was still paid $20million.",
arrow: "Oliver Queen is a left winger. He has always preached about equal rights on all levels. He was written in the 80's of his support for equal rights and his admiration for Martin Luther King Jr.",
batmanTwo: "Batman writer Bill Finger said he came up with the name Gotham City by opening up a phone book and randomly putting his finger on “Gotham Jewelers.”",
capAmerica: "When Simon drew the original sketch of the Captain America, he wrote “Super American“ beneath it. He quickly realized it wouldn’t work because there were already too many “Super” characters.",
cyclop: "As a child, Cyclop and his family were attacked by an alien race known as the Shi'ar. Although his parents were captured by the aliens, Cyclops and his brother Havok were parachuted to safety.",
drOc: "Otto`s father, a factory worker, was abusive and violent towards both Otto and his mother, leading Otto to be shy and reclusive in school.",
harleyOne: "Schumacher was planning a sequel to Batman and Robin called “Batman: Triumphant“. The Scarecrow and Harley were to star as the movie’s villains, and supposedly, Madonna would be Harley.",
hulk: "In the comic book, Betty Ross was married to Glenn Talbot before Bruce Banner.",
ironman: "According to 'Iron Man' creator Stan Lee, Stark was based on magnate Howard Hughes, who Lee described as “one of the most colorful men of our time“.",
jokerOne: "Tim Curry was the first choice for the voice of The Joker in Batman TAS. After he dropped out of the show, Hamill was invited to replace him.",
spiderman: "SPiderman`s gratest villain, Venom, originally was a fan creation that was bought by Marvel for $220",
thor: "Before being cast as Loki, Tom Hiddleston auditioned for the role of Thor.",
twoface: "In his original appearance, the character who would become Harvey Dent was known as Harvey Kent. His original story was a trilogy, at the end of which his sanity and facial features were both restored.",
wolverine: "In 1996, Marvel decided to print a Star Trek/X-Men crossover. Wolverine lost a Fight to Spock."
};


function postFact(fact) {
$text[0].innerHTML = facts[fact];
};
