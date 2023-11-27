import { studentABI, studentAddress } from '@/context/constants';
import { ethers } from 'ethers';
export const connectAccount = ''
export const connectWallet = async () => {
  if (window.ethereum) {
    window.ethereum.on("chainChanged", () => {
      window.location.reload()
    })
    window.ethereum.on("accountsChanged", () => {
      window.location.reload()
    })
    new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

    const firstAccount = accounts[0]
    return firstAccount

  } else {
    console.error("Metamask is not installed");
  }
}

export const connectWalletBycontractData = async (providerOrSigner) => {


 
  const contractEducation = new ethers.Contract(studentAddress, studentABI, providerOrSigner)
  return contractEducation


}

