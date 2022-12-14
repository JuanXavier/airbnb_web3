require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.9',
	paths: {
		sources: './src/contracts',
		artifacts: './src/artifacts',
	},
	networks: {
		mumbai: {
			url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
}
