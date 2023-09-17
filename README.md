# Private Faucet

Meet the **Private Faucet**, a feather-light faucet tailored for EVM-based private networks. Boasting an incredibly streamlined design, it stands as an ideal choice for individuals seeking an efficient, less demanding resource solution. Provided users are equipped with access to the RPC APIs and a private key linked to a funded account, the faucet can be utilized with utmost ease. At the heart of this creation lies the ambition to offer a straightforward tool that can effortlessly fund addresses interacting with the private network, enhancing user experience and simplicity.

## 🎯 Purpose
The faucet has been meticulously crafted with an emphasis on speed and simplicity. It stands as a straightforward utility aimed at efficiently funding accounts that engage with the private network. By prioritizing user ease and minimizing complexities, our design ensures that users can swiftly navigate and fund their accounts, thereby promoting seamless interactions within the private network environment.

 ## 🛠 Build using
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/ananthanir/HelloWorldV2/adc428d165e8188f82000c83d2742649bbc2087d/assets/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/ananthanir/HelloWorldV2/adc428d165e8188f82000c83d2742649bbc2087d/assets/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://ethers.io" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/ananthanir/HelloWorldV2/adc428d165e8188f82000c83d2742649bbc2087d/assets/ethers-colored.svg" width="36" height="36" alt="Ethers" /></a>
<a href="https://ethereum.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/ananthanir/HelloWorldV2/adc428d165e8188f82000c83d2742649bbc2087d/assets/ethereum-colored.svg" width="36" height="36" alt="Ethereum" /></a>

## 📢 Prerequisites
 - NodeJS 16.x
 
 ## ⚙️ Run Locally

Clone the Project and change into the directory

```bash
git clone https://github.com/ananthanir/private-faucet
cd private-faucet
```

Install dependencies

```bash
npm install
```

To connect to any EVM-compatible blockchain network, update the **REACT_APP_NODE_RPC_URL** value in the **.env** file.
https://github.com/ananthanir/private-faucet/blob/f1b51e75248ef8e115cf43407bd30b5d612c2a14/.env#L1

Next the private key to the funding address, update the **REACT_APP_FAUCET_ADDRESS_PRIVATE_KEY** value in the **.env** file.
https://github.com/ananthanir/private-faucet/blob/f1b51e75248ef8e115cf43407bd30b5d612c2a14/.env#L2

Run the application

```bash
npm start
```

## 🐳 Docker

Now to run using docker execute the following command

```bash
docker compose up -d
```

## 🎗️ Contributing
The open source community thrives on the contributions of its members, making it a remarkable space for learning, inspiration, and innovation. Every contribution you offer is **deeply valued**.  

Should you have ideas to enhance this, kindly fork the repository and initiate a pull request. Alternatively, you can open an issue and tag it with **enhancement**. Remember to star the project! Many thanks!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/<feature_name>`)
3. Commit your Changes (`git commit -m '<feature_name>_added'`)
4. Push to the Branch (`git push origin feature/<feature_name>`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT license - see the [LICENSE.md](https://github.com/ananthanir/private-faucet/blob/main/LICENSE) file for details.
