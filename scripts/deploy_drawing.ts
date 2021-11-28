import { ethers } from 'hardhat'

const main = async () => {
  // We get the contract to deploy
  console.log(ethers)
  const Drawing = await ethers.getContractFactory('Drawing')
  console.log('Deploying Drawing...')
  const dwg = await Drawing.deploy()
  await dwg.deployed()
  console.log('Drawing deployed to:', dwg.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
