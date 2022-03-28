const baseUrl = '/api/accounts'

class AccountRepo {
    //returns all the accounts depending on the type the user selected
    async getAccounts(acctType) {
        //read from indexeddb
        const url = `/api/accounts?type=${acctType}`
        const accounts = await fetch(url)
        return accounts.json()
    }

    async deleteAccount(accountNo) {
        const url = `/api/accounts/${accountNo}`
        const response = await fetch(url, {method: 'DELETE'})
        return response
    }

    async addAccount(account) {
        const url = `/api/accounts`
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(account)
        })
    }

    async updateAccount(account) {
        const url = `/api/accounts`
        const response = await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(account)
        })
    }

    async addTrans(trans) {
        const url = `/api/accounts/${trans.accountNo}/trans`
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(trans)
        })
    }
}

export default new AccountRepo()
