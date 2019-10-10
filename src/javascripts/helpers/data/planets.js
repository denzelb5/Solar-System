
/* eslint-disable no-multi-str */
const planets = [{
  name: 'Earth',
  imageUrl: 'https://cdn.pixabay.com/photo/2015/10/24/17/41/earth-1004732_960_720.jpg',
  description: 'Earth is the third planet from the Sun and the only astronomical \
  object known to harbor life. According to radiometric dating and other sources\
  of evidence, Earth formed over 4.5 billion years ago. Earth\'s gravity interacts \
  with other objects in space, especially the Sun and the Moon, which is Earth\'s \
  only natural satellite. Earth orbits around the Sun in 365.26 days, a period known \
  as an Earth year. During this time, Earth rotates about its axis about 366.26 times. \
  Earth\'s axis of rotation is tilted with respect to its orbital plane, \
  producing seasons on Earth. The gravitational interaction between Earth and \
  the Moon causes tides, stabilizes Earth\'s orientation on its axis, and \
  gradually slows its rotation. Earth is the densest planet in the Solar \
  System and the largest and most massive of the four terrestrial planets.',
  isGasPlanet: false,
  numberOfMoons: 1,
  nameOfLargestMoon: 'Moon',
},
{
  name: 'Uranus',
  imageUrl: 'https://live.staticflickr.com/7907/46455057294_ed181e31cf.jpg',
  description: 'Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is \
  the seventh planet from the Sun. It has the third-largest planetary radius \
  and fourth-largest planetary mass in the Solar System. Uranus is similar \
  in composition to Neptune, and both have bulk chemical compositions which \
  differ from that of the larger gas giants Jupiter and Saturn. For this \
  reason, scientists often classify Uranus and Neptune as "ice giants" to \
  distinguish them from the gas giants. Uranus\' atmosphere is similar to \
  Jupiter\'s and Saturn\'s in its primary composition of hydrogen and helium, \
  but it contains more "ices" such as water, ammonia, and methane, along with \
  traces of other hydrocarbons. It has the coldest planetary atmosphere in the \
  Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has \
  a complex, layered cloud structure with water thought to make up the lowest \
  clouds and methane the uppermost layer of clouds. The interior of Uranus is\
  mainly composed of ices and rock.',
  isGasPlanet: true,
  numberOfMoons: 27,
  nameOfLargestMoon: 'Titania',
},
{
  name: 'Mars',
  imageUrl: 'https://www.jpl.nasa.gov/images/mars/20160421/PIA00407-16.jpg',
  description: 'Mars is the fourth planet from the Sun and the second-smallest \
  planet in the Solar System after Mercury. In English, Mars carries a name \
  of the Roman god of war and is often referred to as the "Red Planet". The \
  latter refers to the effect of the iron oxide prevalent on Mars\' surface, \
  which gives it a reddish appearance distinctive among the astronomical bodies \
  visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, \
  having surface features reminiscent both of the impact craters of the Moon and \
  the valleys, deserts, and polar ice caps of Earth.',
  isGasPlanet: false,
  numberOfMoons: 2,
  nameOfLargestMoon: 'Phobos',
},
{
  name: 'Neptune',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg',
  description: 'Neptune is the eighth and farthest known planet from the Sun \
  in the Solar System. In the Solar System, it is the fourth-largest planet \
  by diameter, the third-most-massive planet, and the densest giant planet. \
  Neptune is 17 times the mass of Earth, slightly more massive than its \
  near-twin Uranus. Neptune is denser and physically smaller than Uranus because \
  its greater mass causes more gravitational compression of its atmosphere. \
  Neptune orbits the Sun once every 164.8 years at an average distance of \
  30.1 au (4.5 billion km; 2.8 billion mi). It is named after the Roman god \
  of the sea and has the astronomical symbol ♆, a stylised version of the \
  god Neptune\'s trident.',
  isGasPlanet: true,
  numberOfMoons: 14,
  nameOfLargestMoon: 'Triton',
},
{
  name: 'Saturn',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
  description: 'Saturn is the sixth planet from the Sun and the second-largest \
  in the Solar System, after Jupiter. It is a gas giant with an average radius \
  about nine times that of Earth. It has only one-eighth the average \
  density of Earth; however, with its larger volume, Saturn is over 95 times \
  more massive. Saturn is named after the Roman god of wealth and \
  agriculture; its astronomical symbol (♄) represents the god\'s sickle. The planet\'s \
  most famous feature is its prominent ring system that is composed mostly of ice \
  particles, with a smaller amount of rocky debris and dust. At least 82 moons\
  are known to orbit Saturn, of which 53 are officially named. This does not \
  include the hundreds of moonlets in the rings. Titan, Saturn\'s largest moon, \
  and the second-largest in the Solar System, is larger than the planet Mercury, \
  although less massive, and is the only moon in the Solar System to have a \
  substantial atmosphere.',
  isGasPlanet: true,
  numberOfMoons: 82,
  nameOfLargestMoon: 'Titan',
},
{
  name: 'Venus',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/PIA00271_Venus_%28Computer_Simulated_Global_View_of_the_Northern_Hemisphere%29.jpg',
  description: 'Venus is the second planet from the Sun. It is named after the \
  Roman goddess of love and beauty. As the second-brightest natural object in \
  the night sky after the Moon, Venus can cast shadows and, rarely, is visible \
  to the naked eye in broad daylight. Venus lies within Earth\'s orbit, and so \
  never appears to venture far from the Sun, setting in the west just after dusk\
  and rising in the east a bit before dawn. Venus orbits the Sun every 224.7 Earth \
  days. With a rotation period of 243 Earth days, it takes longer to rotate about \
  its axis than any planet in the Solar System and goes in the opposite direction \
  to all but Uranus --meaning the Sun rises in the west and sets in the east. Venus \
  does not have any natural satellites, a distinction it shares only with Mercury \
  among planets in the Solar System.',
  isGasPlanet: false,
  numberOfMoons: 0,
  nameOfLargestMoon: 'Not Applicable',
},
{
  name: 'Jupiter',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter%27s_Atmosphere.jpg',
  description: 'Jupiter is the fifth planet from the Sun and the largest in the \
  Solar System. It is a gas giant with a mass one-thousandth that of the Sun, \
  but two-and-a-half times that of all the other planets in the Solar System \
  combined. Jupiter has been known to astronomers since antiquity.[18] It is \
  named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be \
  bright enough for its reflected light to cast shadows,[20] and is on average the \
  third-brightest natural object in the night sky after the Moon and Venus.',
  isGasPlanet: true,
  nameOfLargestMoon: 'Ganymede',
},
{
  name: 'Mercury',
  // eslint-disable-next-line max-len
  imageUrl: 'https://live.staticflickr.com/8228/8497927563_00dcb3fe09_b.jpg',
  description: 'Mercury is the smallest and innermost planet in the Solar System. \
    Its orbit around the Sun takes only 87.97 days, the shortest of all the planets \
    in the Solar System. It is named after the Roman deity Mercury, the messenger of \
    the gods. Mercury rotates in a way that is unique in the Solar System. It is tidally \
    locked with the Sun in a 3:2 spin-orbit resonance,[16] meaning that relative to \
    the fixed stars, it rotates on its axis exactly three times for every two \
    revolutions it makes around the Sun.[a][17] As seen from the Sun, in a frame of \
    reference that rotates with the orbital motion, it appears to rotate only once \
    every two Mercurian years. An observer on Mercury would therefore see only one day \
    every two Mercurian years.',
  isGasPlanet: false,
  numberOfMoons: 0,
  nameOfLargestMoon: 'Not Applicable',
}];

const getPlanets = () => planets;

export default { getPlanets };
