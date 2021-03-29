export default {
    id: String,
    name: String,
    englishName: String,
    isPlanet: Boolean,
    semimajorAxis: Number,
    perihelion: Number,
    aphelion: Number,
    eccentricity: Number,
    inclination: Number,
    density: Number,
    gravity: Number,
    escape: Number,
    meanRadius: Number,
    equaRadius: Number,
    polarRadius: Number,
    flattening: Number,
    dimension: String,
    sideralOrbit: Number,
    sideralRotation: Number,
    discoveredBy: String,
    discoveryDate: String,
    alternativeName: String,
    axialTilt: Number,
    discoveredBy: String,
    rel: String,
    mass: {
        massValue: Number,
        massExponent: Number
    },
    vol: {
        volValue: Number,
        volExponent: Number
    },
    aroundPlanet: {
        planet: String,
        rel: String
    },
    moons: [{ moon: String, rel: String }],
}