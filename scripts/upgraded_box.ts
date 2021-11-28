import { ethers } from 'hardhat'

const main = async () => {
  // Retrieve accounts from the local node
  const accounts = await ethers.provider.listAccounts()
  console.log(accounts)

  const address = '0xAe3F3C4BE5C8C132B8426BFf0683B78A6902d163'
  const BoxV2 = await ethers.getContractFactory('BoxV2')
  const box = BoxV2.attach(address)

  //   Call the retrieve() function of the deployed Box contract
  const value = await box.retrieve()
  console.log('Box value is', value.toString())

  //   Send a transaction to store() a new value in the Box
  await box.increment()

  //   Call the retrieve() function of the deployed Box contract
  setTimeout(async () => {
    const value = await box.retrieve()
    console.log('Box value is', value.toString())
  }, 20000)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
