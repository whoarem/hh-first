import { ethers, upgrades } from 'hardhat'

async function main() {
  const DrawingUpgradeable = await ethers.getContractFactory(
    'DrawingUpgradeable'
  )
  console.log('Deploying DrawingUpgradeable...')
  const dwg = await upgrades.deployProxy(DrawingUpgradeable, [
    'Drawing',
    'DWG',
    'dwg_uri',
  ])
  await dwg.deployed()
  console.log('DrawingUpgradeable deployed to:', dwg.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
