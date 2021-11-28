import { ethers } from 'hardhat'

const main = async () => {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)

  // Set up an ethers contract, representing our deployed Box instance
  //   const address = '0xb365a4C27284927414CFDfFdD1F9054380497b29' // local
  const address = '0xAe3F3C4BE5C8C132B8426BFf0683B78A6902d163' // ropsten
  const Box = await ethers.getContractFactory('Box')
  const box = Box.attach(address)

  //   Call the retrieve() function of the deployed Box contract
  const value = await box.retrieve()
  console.log('Box value is', value.toString())

  //   Send a transaction to store() a new value in the Box
  await box.store(23)

  //   Call the retrieve() function of the deployed Box contract
  const value2 = await box.retrieve()
  console.log('Box value is', value2.toString())
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
