# Ethereum Faucet

A simple ethereum facucet application for Private Networks.  

## Prerequisites

 - NodeJS 16.x
 
 ## 🛠 Build using
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/ananthanir/HelloWorldV2/adc428d165e8188f82000c83d2742649bbc2087d/assets/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/ananthanir/HelloWorldV2/adc428d165e8188f82000c83d2742649bbc2087d/assets/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://ethers.io" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/ananthanir/HelloWorldV2/adc428d165e8188f82000c83d2742649bbc2087d/assets/ethers-colored.svg" width="36" height="36" alt="Ethers" /></a>
<a href="https://ethereum.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/ananthanir/HelloWorldV2/adc428d165e8188f82000c83d2742649bbc2087d/assets/ethereum-colored.svg" width="36" height="36" alt="Ethereum" /></a>
 
 ## ⚙️ Setting up

The application uses [Ether.js](https://docs.ethers.io/v5/) to sign and send ether to the requesting address. The funding acount for the faucet is set as the etherbase account for the miner node in the private network.  

The funding account can be specified in two methods:

1. By specifiying seed phrase, on <b>FaucetInput.js</b> line no 52 also, uncomment the lines from 51 to 53 and comment the lines from 55 to 56
https://github.com/ananthanir/ethereum-faucet/blob/3872f0f8450882d51775b5fc5feb9457b131be38/src/FaucetInput.js#L52

2. By providing the keystore file generated by geth, replace the file in the keyfile directory.

The RPC connection is sepcified in the <b>FaucetInput.js</b>
https://github.com/ananthanir/ethereum-faucet/blob/741363d1e9f1a7733ebef825deb667b8ba6f521f/src/FaucetInput.js#L47

After the nessery changes are maede install dependencies using `npm i`  

Then run the application using `npm start`


The application does not makes any checks, so if the node is not running in the specifed RPC url, the application will bug out.

## License
This project is licensed under the MIT license - see the [LICENSE.md](https://github.com/ananthanir/ethereum-faucet/blob/741363d1e9f1a7733ebef825deb667b8ba6f521f/LICENSE) file for details.

## Contributing
The open source community is made great by contributions from individuals like you. Your efforts to improve this project are deeply appreciated.

If you have ideas on how to make this project even better, you can contribute by:

1. Forking the repository
2. Creating a new branch for your feature (e.g. `git checkout -b feature/<feature_name>`)
3. Making your changes and committing them (e.g. `git commit -m '<feature_name> added'`)
4. Pushing the branch to your forked repository (e.g. `git push origin feature/<feature_name>`)
5. Opening a pull request to have your changes merged into the main project

Don't forget to give the project a star as well! Thank you for your support!
