import { expect } from 'chai'
import { ethers, upgrades } from 'hardhat'

describe('Greeter', function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory('Greeter')
    const greeter = await Greeter.deploy('Hello, world!')
    await greeter.deployed()

    expect(await greeter.greet()).to.equal('Hello, world!')

    const setGreetingTx = await greeter.setGreeting('Hola, mundo!')

    // wait until the transaction is mined
    await setGreetingTx.wait()

    expect(await greeter.greet()).to.equal('Hola, mundo!')
  })
})

describe('Box', function () {
  it('upgraded box increment function call shoud update the value -> value + 1', async () => {
    const Box = await ethers.getContractFactory('Box')
    const BoxV2 = await ethers.getContractFactory('BoxV2')

    const instance = await upgrades.deployProxy(Box, [42], {
      initializer: 'store',
    })
    const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2)

    await upgraded.increment()

    const value = await upgraded.retrieve()
    expect(value.toString()).to.equal('43')
  })
})
