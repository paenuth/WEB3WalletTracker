import { useState } from "react";


export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [ethBalance, setEthBalance] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Connect to MetaMask
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        setWalletAddress(address);

        // Fetch ETH balance from backend
        fetchBalanceFromBackend(address);
      } else {
        setErrorMessage("MetaMask not detected. Please install MetaMask.");
      }
    } catch (error) {
      setErrorMessage("Error connecting to MetaMask.");
    }
  };

  // Fetch ETH Balance from Backend
  const fetchBalanceFromBackend = async (address) => {
    try {
      const response = await fetch(`/api/balance?address=${address}`);
      if (!response.ok) throw new Error("Failed to fetch balance");
      const data = await response.json();
      setEthBalance(data.balance);
    } catch (error) {
      setErrorMessage("Error fetching balance from backend.");
    }
  };

  return (
    <div className="container">
      <h1>Web3 Wallet Tracker</h1>
      <button onClick={connectWallet} className="connect-btn">Connect Wallet</button>
      {walletAddress && (
        <div className="wallet-info">
          <p><strong>Wallet Address:</strong> {walletAddress}</p>
          <p><strong>ETH Balance:</strong> {ethBalance ? `${ethBalance} ETH` : "Loading..."}</p>
        </div>
      )}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}
