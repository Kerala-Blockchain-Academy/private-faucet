# Ethereum-faucet

A simple ethereum facucet application for Private Networks.  

The application uses [Ether.js](https://docs.ethers.io/v5/) to sign and send ether to the requesting address. The funding acount for the faucet is set as the etherbase account for the miner node in the private network.  

The funding account seed phrase can be found on <b>FaucetInput.js</b>
https://github.com/ananthanir/ethereum-faucet/blob/741363d1e9f1a7733ebef825deb667b8ba6f521f/src/FaucetInput.js#L51

The RPC connection is sepcified in the <b>FaucetInput.js</b>
https://github.com/ananthanir/ethereum-faucet/blob/741363d1e9f1a7733ebef825deb667b8ba6f521f/src/FaucetInput.js#L47

After the nessery changes are maede install dependencies using `npm i`  

Then run the application using `npm start`


The application does not makes any checks, so if the node is not running in the specifed RPC url, the application will bug out.
