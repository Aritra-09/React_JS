import { Account, Client, ID } from "appwrite";
import config from "../config/config";


export class Authservice {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account (this.client);

    }


    async creatAccount({email, password, name}) {
        try{
            const user = await this.account.create(ID.unique(), email, password, name);

            if (user) {
                // Calling another method
                return this.login({email, password});
            }
            
            else{
                return user;
            }

        }

        catch(error){
            throw error;
        }
    }


    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout () {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}



const authservice = new Authservice();

export default authservice;