(async () => {
    try {
        console.log('Running deployWithWeb3 script...')

        const contractAddress = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8'
        
        const contractName = 'Owner'
        const constructorArgs = []    
    
        var acc = web3.currentProvider.selectedAddress;
        
        const artifactsPath = `browser/contracts/artifacts/${contractName}.json` 

        const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath))
        const accounts = await web3.eth.getAccounts()
    
        let contractInstance = new web3.eth.Contract(metadata.abi, contractAddress )

        let addr = await contractInstance.methods.getOwner().call({from: accounts[0]})
        console.log(`Address of the owner is: ${addr}`)
    
    } catch (e) {
        console.log(e.message)
    }
  })()
