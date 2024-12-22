import { ethers } from 'ethers';

export default async function handler(req, res) {
  try {
    const { address } = req.query;

    if (!address) {
      return res.status(400).json({ error: 'Address is required' });
    }

    const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/01c632841d354852b0e942a3b7274d5b'); 
    const balance = await provider.getBalance(address);
    const formattedBalance = ethers.formatEther(balance);

    res.status(200).json({ balance: formattedBalance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
