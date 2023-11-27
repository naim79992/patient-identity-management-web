const { ethers } = require("hardhat")

async function main() {
    const [deployer] = await ethers.getSigners()

    const EducationalData = await ethers.getContractFactory("EducationalData")


    const educationalData = await EducationalData.deploy()

    console.log("EducationalData.address :", educationalData.address);

}

main().then(() => {
    process.exit(0)
}).catch((err) => {
    console.error(err)
    process.exit(1)
})
// 0xeA3363cc887aa09B0A754ec3C7356aC3D5b0427f

//  *******for FUNTOKENSALE contract *******



