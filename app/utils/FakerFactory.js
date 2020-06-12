import Faker from 'faker';

export default {
	generateActivities( amount ) {
		return [...Array(amount)].map(() => ({
			id: Faker.random.number(),//ej 3195625338729444,
			verb_id: 161,
			actor: {
				id: Faker.random.uuid(),
				first_name: Faker.name.firstName(),
				surname: Faker.name.lastName(),
				avatar: Faker.image.avatar()
			},
			activity_object: {
				id: Faker.random.number(),
				message: Faker.lorem.paragraph(),
				attachments: [
					{
						url: Faker.image.image(),
						filename: Faker.lorem.word() + ".png"
					},
					{
						url: "https://sakura.omac.dev.kioru.com/anuncios/06/84e4b8852453ff2c700b5246ba939415.pdf",
						filename: Faker.lorem.word() + ".pdf"
					}
				],
				recipients: []
			},
			target: null,
			time: Faker.date.past().toISOString()
		}));
	},
	generateStudents(amount){
		return [...Array(amount)].map(()=>({
			"avatar": Faker.image.avatar(),
			"email": Faker.internet.email(),
			"first_name": Faker.name.firstName(),
			"gender": Faker.random.number(),
			"id": Faker.random.number(),
			"preferred_name": Faker.internet.userName(),
			"student_id": `${Faker.random.number()}`,
			"surname": Faker.internet.userName(),
			"surnames": [
				Faker.name.firstName(),	
				"",
			],
		}));
	},
	getImg: () =>  Faker.image.avatar(),
	getId: () =>  Faker.random.number(),
}
