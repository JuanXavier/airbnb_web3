// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat')

async function main() {
	const Airbnb = await hre.ethers.getContractFactory('Airbnb')
	const airbnb = await Airbnb.deploy()
	await airbnb.deployed()

	console.log('Airbnb contract deployed to:', airbnb.address)
	// 0x6fBE9aA3800814E481766F5916D4B1C327dBC155 - mumbai
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
