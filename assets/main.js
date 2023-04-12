
let accounts;
//first piece of the puzzle. Our contract address
const libcAddress= "0x96184d9C811Ea0624fC30C80233B1d749B9E485B";


// our abi 
const libcABI = [
    
        


    ]

let provider;




window.onload = function(){

    console.log("Dapp is loaded");
    if(window.ethereum){

//we can access web3!
this.ethereum.on('accountsChanged', handleAccountsChanged);
window.ethereum.request({method:'eth_accounts'})
.then(handleAccountsChanged)
.catch((err) => {

    console.log(err);

});
provider= new ethers.providers.Web3Provider(window.ethereum)
    }
    else{

        console.log("Please install a digital wallet like Metamask");
    }
}
const handleAccountsChanged=(a) => {

console.log("Accounts Changed");
console.log(accounts);

}


const enableEth = async() =>{

    accounts = await window.ethereum.request({method:'eth_requestAccounts'}).catch((err) =>{})
//error handling..
console.log(err.code);

}
console.log(accounts);

const checkEthBalance = async() => {


        let balance = await window.ethereum.request({method:'eth_getBalance',
    params:[
accounts[0]

    ]
    }).catch((err)=> {


        console.log(err);
    });
//we will have the balance, converse hex wei to eth


balance = parseInt(balance);
balance = balance/Math.pow(10,18);
console.log(balance);

}

const checkTokenBalance = async () => {

    let libcContract= new ethers.Contract(libcAddress, libcABI, provider);
    console.log(libcContract);



}
const Approval = async () => {

    let libcContract= new ethers.Contract(libcAddress, libcABI, provider.getSigner());
    const amount = ethers.utils.parseUnits("10000",18);
    let appr = await libcContract.approve("0x7C7591A9Aa435C5D92fb3b5CEa4a31F7627ae905",amount);

    
}
