Web3 Wallet Tracker - Tester Documentation

#Overview
The Web3 Wallet Tracker is a simple web application that allows users to connect their MetaMask wallet, view their wallet address, and check their Ethereum (ETH) balance. It uses a backend API to fetch the user's ETH balance based on the provided wallet address.

#Key Features
- Connects to MetaMask to retrieve the user's wallet address.
- Displays the wallet address and current ETH balance.
- Fetches the ETH balance via a backend API connected to the Sepolia test network.

#Requirements
To test this application, you'll need the following:
- MetaMask extension installed in your browser.
- A modern browser (ex.Chrome).
- Node.js and npm installed locally on your machine.

Getting Started
Follow these steps to test the application:

1. Clone the repository
If you haven't cloned the project repository, run:

git clone https://github.com/johnhane123/INTERN-FRONTEND-WEB3-SUBMISSION.git

cd INTERN-FRONTEND-WEB3-SUBMISSION

2. Install dependencies
Make sure you're in the project directory and install the required dependencies:

npm install

3. Run the development server
Start the local development server by running:

npm run dev

---------------------
This will start the application on http://localhost:3000.
----------------------

Open the application in your browser
Go to http://localhost:3000 in your browser.

5. Connect to MetaMask
- Ensure that MetaMask is installed and running in your browser.
- Click the Connect Wallet button in the app.
- If MetaMask is properly set up, the app will ask for your permission to connect. Accept the request.
- Your wallet address will be displayed along with your ETH balance.

6. Check ETH balance
- Once your wallet is connected, the app will fetch your ETH balance from the Sepolia test network using the backend API. Your balance will be displayed next to the wallet address.

#Common Issues
MetaMask Not Detected
-If you don't have MetaMask installed, the app will show an error message: MetaMask not detected. Please install MetaMask..
- You can install MetaMask by searching Metamask extension on your browser.

Error Fetching Balance
- If there is an issue fetching the balance from the backend, the app will show an error message: Error fetching balance from backend..
- This may happen if the backend is unreachable or if there is an issue with the Sepolia test network.

#Testing Notes
- MetaMask Wallet: Ensure your MetaMask wallet is connected to the Sepolia Test Network.
- ETH Balance: You can test the application using any Ethereum wallet address that has a balance on the Sepolia test network. You can get Sepolia test ETH from a faucet if needed.

#Additional Information
The application uses Ethers.js for interacting with the Ethereum network. The backend API is set up to interact with the Sepolia test network via Infura.





