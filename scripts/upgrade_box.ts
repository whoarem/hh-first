import { ethers, upgrades } from 'hardhat'

const main = async () => {
  const BoxV2 = await ethers.getContractFactory('BoxV2')

  console.log('Upgrading Box...')
  await upgrades.upgradeProxy(
    '0xAe3F3C4BE5C8C132B8426BFf0683B78A6902d163',
    BoxV2
  )
  console.log('Box upgraded')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
