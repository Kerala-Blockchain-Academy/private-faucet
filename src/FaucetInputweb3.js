import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import Web3 from "web3";

export default function FaucetInput() {
  //   const web3 = new Web3(
  //     new Web3.providers.HttpProvider("https://ropsten.infura.io")
  //   );

  const [ethAddress, setEthAddress] = useState("");

  const addressChangeHandler = (event) => {
    setEthAddress(event.target.value);
  };

  const submitHandler = async (event) => {
    console.log("Connect to Chain");
    const web3 = new Web3("http://ab9d-202-88-234-181.ngrok.io");
    console.log("Connection Object", web3);

    var ACCOUNT_ADDRESS = "0x71D05C5737B4c97FB3C902fdd71E0307F62ED8fb";
    var PRIVATE_KEY =
      "0f9c77a77d16be5a147eaffd5d68b282c7c3551f1b998ec0e94d6da63b3e6be5";

    const nonce = await web3.eth.getTransactionCount(ACCOUNT_ADDRESS, "latest");

    console.log("Build Tx");
    const transaction = {
      from: ACCOUNT_ADDRESS,
      to: ethAddress,
      gasLimit: web3.utils.toBN(21000),
      maxFeePerGas: web3.utils.toBN(300),
      maxPriorityFeePerGas: web3.utils.toBN(10),
      nonce: web3.utils.toBN(nonce),
      value: web3.utils.toBN(web3.utils.toWei("1000000000000000000", 'ether')),
    };
    console.log("Tx Object", transaction)
    console.log("Sign Tx");

    const signedTx = await web3.eth.accounts.signTransaction(
      transaction,
      PRIVATE_KEY
    );
    console.log("Signed Tx: ", signedTx);
    console.log("Send Tx");

    await web3.eth.sendSignedTransaction(signedTx);
  };

  return (
    <Box
      sx={{
        width: 900,
        maxWidth: "100%",
        marginLeft: 10,
        marginTop: 10,
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
        <b>Ethereum Testnet Faucet</b>
      </Typography>

      <Typography variant="subtitle2" component="div" gutterBottom>
        <b>Your Ethereum wallet address</b>
      </Typography>

      <TextField
        fullWidth
        onChange={addressChangeHandler}
        id="fullWidth"
        autoFocus
        helperText="Please enter your ethereum account addres eg: 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
      />

      <br />
      <br />
      <Button variant="contained" onClick={submitHandler}>
        <b>Request Ether</b>
      </Button>

      <br />
      <br />
      <br />
      <br />
      <Typography variant="subtitle2" component="div" gutterBottom>
        <b>Developed and maintained by Distributed Labs</b>
      </Typography>
    </Box>
  );
}
