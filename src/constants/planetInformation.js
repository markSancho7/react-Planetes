import { v4 } from 'uuid';

export const PlanetInformation = [
	{
		id: v4(),
		planetRoute: '/',
		planetName: 'MERCURY',
		planetImg: [
			'planets-data/assets/planet-mercury.svg',
			'planets-data/assets/planet-mercury.svg',
			'planets-data/assets/planet-mercury.svg'
		],
		planetDescription:
			'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Suns planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.',
		planetRotation: '58.6 days',
		planetRevolution: '87.97 days',
		planetRadius: '2,439.7 km',
		planetAverage: '430°c',
		tabs: ['01 OVERVIEW', '02 INTERNAL STRUCTURE', '03 SURFACE GEOLOGY']
	},
	{
		id: v4(),
		planetRoute: '/Venus',
		planetName: 'VENUS',
		planetImg: 'planets-data/assets/planet-venus.svg',
		planetDescription:
			'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earths night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.',
		planetRotation: '243 days',
		planetRevolution: '224.7 days',
		planetRadius: '6,051.8 km',
		planetAverage: '471°c',
		tabs: ['01 OVERVIEW', '02 INTERNAL STRUCTURE', '03 SURFACE GEOLOGY']
	},
	{
		id: v4(),
		planetRoute: '/Earth',
		planetName: 'EARTH',
		planetImg: 'public/planets-data/assets/planet-earth.svg',
		planetDescription:
			'Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earths surface is land with remaining 70.8% is covered with water. Earths distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.',
		planetRotation: '0.99 days',
		planetRevolution: '365.26 days',
		planetRadius: '6,371 km',
		planetAverage: '16°c',
		tabs: ['01 OVERVIEW', '02 INTERNAL STRUCTURE', '03 SURFACE GEOLOGY']
	},
	{
		id: v4(),
		planetRoute: '/Mars',
		planetName: 'MARS',
		planetImg: 'public/planets-data/assets/planet-mars.svg',
		planetDescription:
			'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
		planetRotation: '1.03 days	',
		planetRevolution: '1.88 years',
		planetRadius: '3,389.5 km',
		planetAverage: '-28°c',
		tabs: ['01 OVERVIEW', '02 INTERNAL STRUCTURE', '03 SURFACE GEOLOGY']
	},
	{
		id: v4(),
		planetRoute: '/Jupiter',
		planetName: 'JUPITER',
		planetImg: 'public/planets-data/assets/planet-jupiter.svg',
		planetDescription:
			'Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earths surface is land with remaining 70.8% is covered Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun. water. Earths distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.',
		planetRotation: '9.93 hours',
		planetRevolution: '11.86 years',
		planetRadius: '69,911 km',
		planetAverage: '-108°c',
		tabs: ['01 OVERVIEW', '02 INTERNAL STRUCTURE', '03 SURFACE GEOLOGY']
	},
	{
		id: v4(),
		planetRoute: '/Saturn',
		planetName: 'SATURN',
		planetImg: 'public/planets-data/assets/planet-saturn.svg',
		planetDescription:
			'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
		planetRotation: '10.8 hours',
		planetRevolution: '29.46 years',
		planetRadius: '58,232 km',
		planetAverage: '-138°c',
		tabs: ['01 OVERVIEW', '02 INTERNAL STRUCTURE', '03 SURFACE GEOLOGY']
	},
	{
		id: v4(),
		planetRoute: '/Uranus',
		planetName: 'URANUS',
		planetImg: 'public/planets-data/assets/planet-uranus.svg',
		planetDescription:
			'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
		planetRotation: '17.2 hours',
		planetRevolution: '84 years',
		planetRadius: '25,362 km',
		planetAverage: '-195°c',
		tabs: ['01 OVERVIEW', '02 INTERNAL STRUCTURE', '03 SURFACE GEOLOGY']
	},
	{
		id: v4(),
		planetRoute: '/Neptun',
		planetName: 'NEPTUN',
		planetImg: 'public/planets-data/assets/planet-neptune.svg',
		planetDescription:
			'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
		planetRotation: '16.08 hours',
		planetRevolution: '164.79 years',
		planetRadius: '24,622 km',
		planetAverage: '-201°c',
		tabs: ['01 OVERVIEW', '02 INTERNAL STRUCTURE', '03 SURFACE GEOLOGY']
	}
];