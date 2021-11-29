import React, { Component } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import productValidation from '../abis/productValidation.json'
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn} from 'mdb-react-ui-kit';
import './App.css';

class App extends Component{
    async componentDidMount(){
        await this.loadWeb3();
        await this.loadBlockchainData();
    }
    //detect ethereum provider
    async loadWeb3(){
        const provider = await detectEthereumProvider();

        //modern browsers
        if(provider){
            console.log('ethereum wallet is connected')
            window.web3 = new Web3(provider)
        } else{
            //no ethereum provider
            console.log('No ethereum wallet detected')
        }
    }

    async loadBlockchainData(){
        window.ethereum.enable()
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({account: accounts[0]})

        const networkId = await web3.eth.net.getId()
        const networkData = productValidation.networks[networkId]

        if(networkData){
            const abi = productValidation.abi;
            const address = networkData.address;
            const contract = new web3.eth.Contract(abi, address)
            this.setState({contract:contract})

            const totalSupply = await contract.methods.totalSupply().call()
            this.setState({totalSupply:totalSupply})

            for(let i = 1; i <= totalSupply; i++){
                const product = await contract.methods.products(i - 1).call()
                this.setState({
                    minted_nfts:[...this.state.minted_nfts, product]
                })
            }

        } else{
            window.alert('Smart contract not deployed')
        }
    }

    mint = (nft_mint) =>{
        window.ethereum.enable()
        this.state.contract.methods.mint(nft_mint).send({from:this.state.account})
        .once('receipt', (receipt) =>{
            this.setState({
                minted_nfts:[...this.state.minted_nfts, nft_mint]
            })
        })
    }

    constructor(props){
        super(props);
        this.state = {
            account: '',
            contract: null,
            totalSupply: 0,
            minted_nfts: []
        }
    }

    render(){
        return(
            <div className='container-filled'>
                <div className='background-image'></div>
                <div className='container-fluid mt-1'>
                    <div className='row'>
                        <main role='main' className='col-lg-12 d-flex text-center'>
                            <div className='mr-auto ml-auto'>
                                <h1 style={{color:'black'}}>Barcode Number</h1>
                                <p></p>
                                <form onSubmit={(event)=>{
                                    event.preventDefault()
                                    /*
                                    const nft_mint = this.nft_mint.value
                                    this.mint(nft_mint)
                                    */
                                    if(this.state.minted_nfts.includes(this.nft_mint.value)){
                                        alert('Product is registered')
                                    } else{
                                        alert('Product is not registered')
                                    }
                                }}>
                                    <input
                                    type='text'
                                    placeholder='Barcode Number'
                                    className='form-control mb1'
                                    ref={(input)=>this.nft_mint = input}
                                    />
                                    <input
                                    style={{margin:'6px'}}
                                    type='submit'
                                    className='btn btn-primary btn-light'
                                    value='Search'
                                    />
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;