'use strict';

const { faker } = require('@faker-js/faker');
const products = [];

function createRandomProduct() {
	return {
		name: faker.commerce.product(),
		description: faker.vehicle.vehicle(),
		amount: faker.finance.amount(),
		status: faker.helpers.arrayElement(['active', 'inactive']),
	};
}

Array.from({ length: 10 }).forEach(() => {
	products.push(createRandomProduct());
});

module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert('Products', products, {});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		 await queryInterface.bulkDelete('Products', null, {});
	},
};
