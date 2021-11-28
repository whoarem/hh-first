import { ethers } from 'hardhat'

const main = async () => {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)

  const address = '0x99A6a8b44a1EeEadd23E26D868d4e70aF987f59c'
  const Drawing = await ethers.getContractFactory('Drawing')
  const dwg = Drawing.attach(address)

  await dwg.mint(accounts[0])
  const items = await dwg.balanceOf(accounts[0])
  console.log(items.toString())
  console.log(await dwg.tokenURI(parseInt(items.toString()) - 1))
  console.log(await dwg.ownerOf(parseInt(items.toString()) - 1))
  console.log(await dwg.name())
  console.log(await dwg.symbol())
  console.log((await dwg.totalSupply()).toString())
  console.log(await dwg.tokenByIndex(parseInt(items.toString()) - 1))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
