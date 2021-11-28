import { ethers } from 'hardhat'

const main = async () => {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)

  const address = '0xc5840858Ac54e1Cc88A2c887578879395F797f26'
  const DrawingUpgradeable = await ethers.getContractFactory(
    'DrawingUpgradeable'
  )
  const dwg = DrawingUpgradeable.attach(address)

  await dwg.mint(accounts[0])
  const items = await dwg.balanceOf(accounts[0])
  console.log(items.toString())
  console.log(await dwg.tokenURI(parseInt(items.toString()) - 1))
  console.log(await dwg.ownerOf(parseInt(items.toString()) - 1))
  console.log(await dwg.name())
  console.log(await dwg.symbol())
  console.log((await dwg.totalSupply()).toString())
  console.log(await dwg.tokenByIndex(parseInt(items.toString()) - 1))
  console.log(await dwg.test())
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
