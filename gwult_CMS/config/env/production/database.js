module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'gwult_DB'),
			user: env('DATABASE_USERNAME', 'strapi'),
			password: env('DATABASE_PASSWORD', 'Wgw4208@loyal'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
