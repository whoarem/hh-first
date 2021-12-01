import { ethers } from 'hardhat'

const main = async () => {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)

  const address = '0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44'
  // const Drawing = await ethers.getContractFactory('Drawing')
  // const dwg = Drawing.attach(address)
  const DrawingUpgradeable = await ethers.getContractFactory(
    'DrawingUpgradeable'
  )
  const dwg = DrawingUpgradeable.attach(address)

  // await dwg.mint(accounts[0])
  // const items = await dwg.balanceOf(accounts[0])
  // console.log(items.toString())
  // console.log(await dwg.tokenURI(parseInt(items.toString()) - 1))
  // console.log(await dwg.ownerOf(parseInt(items.toString()) - 1))
  // console.log(await dwg.name())
  // console.log(await dwg.symbol())
  // console.log((await dwg.totalSupply()).toString())
  // console.log(await dwg.tokenByIndex(parseInt(items.toString()) - 1))
  // console.log(await dwg.test())
  console.log(await dwg.owner())
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
