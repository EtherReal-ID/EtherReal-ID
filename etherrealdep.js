contracts = {};
ctrAddresses = {};
contracts["Pretorian"] = {
    interface: [{
        "constant": true,
        "inputs": [],
        "name": "rootOwner",
        "outputs": [{
            "name": "",
            "type": "address",
            "value": "0x05065ccbf3084c3feb291f9f116b4185154c203b"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "address"
        }],
        "name": "registeredWalletsOwner",
        "outputs": [{
            "name": "",
            "type": "address",
            "value": "0x0000000000000000000000000000000000000000"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "address"
        }],
        "name": "isSmartID",
        "outputs": [{
            "name": "",
            "type": "bool",
            "value": false
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "id",
            "type": "string"
        }],
        "name": "resetRequest",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "address"
        }, {
            "name": "",
            "type": "uint256"
        }],
        "name": "smartIDwallets",
        "outputs": [{
            "name": "",
            "type": "address",
            "value": "0x"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "name",
            "type": "string"
        }, {
            "name": "id",
            "type": "string"
        }, {
            "name": "location",
            "type": "string"
        }, {
            "name": "entity",
            "type": "bool"
        }],
        "name": "requestNewEtherRealID",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "address"
        }],
        "name": "smartIDnames",
        "outputs": [{
            "name": "",
            "type": "string",
            "value": ""
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "a",
            "type": "address"
        }],
        "name": "WHOIS",
        "outputs": [{
            "name": "",
            "type": "bool",
            "value": false
        }, {
            "name": "",
            "type": "string",
            "value": ""
        }, {
            "name": "",
            "type": "string",
            "value": ""
        }, {
            "name": "",
            "type": "string",
            "value": ""
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "a",
            "type": "address"
        }, {
            "name": "owner",
            "type": "address"
        }],
        "name": "deleteWallet",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "name",
            "type": "string"
        }, {
            "name": "id",
            "type": "string"
        }, {
            "name": "location",
            "type": "string"
        }, {
            "name": "entity",
            "type": "bool"
        }, {
            "name": "isEntity",
            "type": "bool"
        }],
        "name": "registerSmartID",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "name": "a",
            "type": "address"
        }, {
            "name": "owner",
            "type": "address"
        }],
        "name": "registerWallet",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "rootAddress",
        "outputs": [{
            "name": "",
            "type": "address",
            "value": "0x0546e08176554ee382485e41ce86e8e6ff85b248"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "address"
        }],
        "name": "walletSmartID",
        "outputs": [{
            "name": "",
            "type": "address",
            "value": "0x0000000000000000000000000000000000000000"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "lastCreated",
        "outputs": [{
            "name": "",
            "type": "address",
            "value": "0x84041af84118d563ba6a05a7789e0a8f3c04b503"
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "address"
        }],
        "name": "smartIDid",
        "outputs": [{
            "name": "",
            "type": "string",
            "value": ""
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "address"
        }],
        "name": "registeredWallets",
        "outputs": [{
            "name": "",
            "type": "bool",
            "value": false
        }],
        "payable": false,
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "address"
        }],
        "name": "smartIDpassport",
        "outputs": [{
            "name": "",
            "type": "string",
            "value": ""
        }],
        "payable": false,
        "type": "function"
    }, {
        "inputs": [{
            "name": "name",
            "type": "string",
            "index": 0,
            "typeShort": "string",
            "bits": "",
            "displayName": "name",
            "template": "elements_input_string",
            "value": "Maxxflyer"
        }, {
            "name": "id",
            "type": "string",
            "index": 1,
            "typeShort": "string",
            "bits": "",
            "displayName": "id",
            "template": "elements_input_string",
            "value": "ABC"
        }],
        "type": "constructor"
    }],
    address: "0xD63470Ba12885f6b134E3353dD5e6c5C9f8574fD"
};
contracts["Pretorian"].contractClass = web3.eth.contract(contracts["Pretorian"].interface);
contracts["Pretorian"].contract = contracts["Pretorian"].contractClass.at(contracts["Pretorian"].address);



if (!ctrAddresses["Pretorian"]) {
    ctrAddresses["Pretorian"] = []
}
ctrAddresses["Pretorian"].push("0xD63470Ba12885f6b134E3353dD5e6c5C9f8574fD");




function connect(id, addr) {

    contracts["" + id] = {
        interface: [{
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [{
                "name": "",
                "type": "string",
                "value": ""
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "passport",
            "outputs": [{
                "name": "",
                "type": "string",
                "value": ""
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "name",
                "type": "string"
            }, {
                "name": "id",
                "type": "string"
            }, {
                "name": "location",
                "type": "string"
            }, {
                "name": "entity",
                "type": "bool"
            }],
            "name": "Validate",
            "outputs": [],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "uint256"
            }],
            "name": "family",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "etherRealIDowner",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x05065ccbf3084c3feb291f9f116b4185154c203b"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "isEtherrealEntity",
            "outputs": [{
                "name": "",
                "type": "bool",
                "value": false
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "name",
                "type": "string"
            }, {
                "name": "id",
                "type": "string"
            }, {
                "name": "location",
                "type": "string"
            }],
            "name": "requestNewEtherRealID",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "uint256"
            }],
            "name": "validators",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "a",
                "type": "address"
            }],
            "name": "addFamily",
            "outputs": [],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "location",
            "outputs": [{
                "name": "",
                "type": "string",
                "value": ""
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "w",
                "type": "uint256"
            }],
            "name": "getWallet",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x"
            }, {
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "standard",
            "outputs": [{
                "name": "",
                "type": "string",
                "value": "EtherRe.al 0.1"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "birthday",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "114322"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "uint256"
            }],
            "name": "validatedWhat",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "ispopa",
            "outputs": [{
                "name": "",
                "type": "bool",
                "value": false
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "uint256"
            }],
            "name": "wallets",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "email",
            "outputs": [{
                "name": "",
                "type": "string",
                "value": ""
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "check",
            "outputs": [{
                "name": "",
                "type": "bool",
                "value": false
            }, {
                "name": "",
                "type": "bool",
                "value": false
            }, {
                "name": "",
                "type": "bool",
                "value": false
            }, {
                "name": "",
                "type": "uint256",
                "value": "0"
            }, {
                "name": "",
                "type": "uint256",
                "value": "0"
            }, {
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "a",
                "type": "address"
            }],
            "name": "removeFamily",
            "outputs": [],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "checkimage",
            "outputs": [{
                "name": "",
                "type": "bool",
                "value": false
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "v",
                "type": "uint256"
            }],
            "name": "getValidated",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x84041af84118d563ba6a05a7789e0a8f3c04b503"
            }, {
                "name": "",
                "type": "uint256",
                "value": "1"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "a",
                "type": "address"
            }],
            "name": "removeWallet",
            "outputs": [],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "physicaladdress",
            "outputs": [{
                "name": "",
                "type": "string",
                "value": ""
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "id",
            "outputs": [{
                "name": "",
                "type": "string",
                "value": ""
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "v",
                "type": "uint256"
            }],
            "name": "getValidator",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x84041af84118d563ba6a05a7789e0a8f3c04b503"
            }, {
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "checkemail",
            "outputs": [{
                "name": "",
                "type": "bool",
                "value": false
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "checkaddress",
            "outputs": [{
                "name": "",
                "type": "bool",
                "value": false
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "uint256"
            }],
            "name": "validated",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "checkimageamount",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "lastImageUpdate",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "lastCheck",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "blackflags",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "uint256"
            }],
            "name": "validatorsWhat",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "payable": false,
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "a",
                "type": "address"
            }],
            "name": "addWallet",
            "outputs": [],
            "payable": false,
            "type": "function"
        }, {
            "inputs": [{
                "name": "owner",
                "type": "address",
                "index": 0,
                "typeShort": "address",
                "bits": "",
                "displayName": "owner",
                "template": "elements_input_address",
                "value": "0x751B404c0a4cd00D8cb20954d0c176C63C58EC43"
            }, {
                "name": "validator",
                "type": "address",
                "index": 1,
                "typeShort": "address",
                "bits": "",
                "displayName": "validator",
                "template": "elements_input_address",
                "value": "0x751B404c0a4cd00D8cb20954d0c176C63C58EC43"
            }, {
                "name": "name",
                "type": "string",
                "index": 2,
                "typeShort": "string",
                "bits": "",
                "displayName": "name",
                "template": "elements_input_string",
                "value": "fd"
            }, {
                "name": "id",
                "type": "string",
                "index": 3,
                "typeShort": "string",
                "bits": "",
                "displayName": "id",
                "template": "elements_input_string",
                "value": "sdf"
            }, {
                "name": "entity",
                "type": "bool",
                "index": 4,
                "typeShort": "bool",
                "bits": "",
                "displayName": "entity",
                "template": "elements_input_bool",
                "value": false
            }],
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "from",
                "type": "address"
            }, {
                "indexed": true,
                "name": "to",
                "type": "address"
            }, {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }],
            "name": "Transfer",
            "type": "event"
        }],
        address: addr
    };
    contracts["" + id].contractClass = web3.eth.contract(contracts["" + id].interface);
    contracts["" + id].contract = contracts["" + id].contractClass.at(contracts["" + id].address);



    if (!ctrAddresses["" + id]) {
        ctrAddresses["" + id] = []
    }
    ctrAddresses["" + id].push(addr);

}
Contact GitHub API Training Shop Blog About
