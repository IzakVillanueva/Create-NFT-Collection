/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const walletNFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (id, name, color, type, border) {
    const NFT = {
        "id": id,
        "name": name,
        "color": color,
        "type": type,
        "border": border
    }
    
    walletNFT.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < walletNFT.length; i++){
        let object = walletNFT[i];
        console.log('=== ' + object.name + ' ===');
        for(const property in object){
            console.log(`${property}: ${object[property]}`);
        }
        console.log("\t");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("The total NFTs minted are " + walletNFT.length)
}

// call your functions below this line
// mint preloaded NFTs
mintNFT('78a', 'Goldberg', 'Yellow', 'Achievement', 'Silver');
mintNFT('3j19', 'Pokemaster', 'Violet', 'Achievement', 'Gold');
mintNFT('9an24', 'Minecrafter', 'Brown', 'Gaming', 'Green');
mintNFT('j21f', 'CoinBits', 'Orange', 'Currency', 'Black');

// prints out all the NFTs and their metadata
listNFTs();

// total number of NFTs minted
getTotalSupply();