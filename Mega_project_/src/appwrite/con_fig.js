import { Client, Databases, ID, Query, Storage } from "appwrite";
import config from "../config/config";



export class DBService{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, image, userId, status}){
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {

                title,
                content,
                image,
                userId,
                status,
            })
        } catch (error) {
            console.log(error);
        }
    }

    async updatePost(slug, {title, content, image, status}){
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {
                title,
                content,
                image,
                status,

            })
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this. databases.getDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug);
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteCollectionId, queries);
        } catch (error) {
            console.log(error);
            return false;
        }
    }



    // file upload

    async uploadFile(file){
        try {
            return await this.bucket.createFile(config.appwriteBucketId, ID.unique(), file);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFileFile(config.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    FilePreview(fileId){
        return this.bucket.getFilePreview(config.appwriteBucketId,fileId);
    }

}


const dbservice = new DBService();
export default dbservice;