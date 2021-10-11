import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
const { ethers } = require("ethers");

export default function FaucetInput() {
  const [ethAddress, setEthAddress] = useState("");

  const addressChangeHandler = (event) => {
    setEthAddress(event.target.value);
  };

  const submitHandler = async (event) => {
    const provider = new ethers.providers.JsonRpcProvider("http://ab9d-202-88-234-181.ngrok.io");

    const mnemonic = "liberty fade indoor way jazz tonight symbol error super loud earth allow";
    const walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic);

    console.log(await walletMnemonic.getAddress());

    console.log("Build Tx")
    const tx = {
      to: ethAddress,
      value: ethers.utils.parseEther("1.0"),
    };
    console.log("Tx Obj: ", tx)

    console.log("Sign Tx")

    // Signing a transaction
    await walletMnemonic.signTransaction(tx);

    console.log("Connect to Chain")


    // The connect method returns a new instance of the
    // Wallet connected to a provider
    const wallet = walletMnemonic.connect(provider);

    console.log("Connection Obj: ", wallet)


    console.log("Send Tx")

    // Sending ether
    console.log(await wallet.sendTransaction(tx));

    console.log("Done")
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
