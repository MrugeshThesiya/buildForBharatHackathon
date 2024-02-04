import conf from '../conf/conf'
import { Client,Storage,ID } from "appwrite";

export class StorageClass {
    client = new Client();
    bucket;
    constructor() {
        this.client
        .setEndpoint(conf.AppwriteUrl)
        .setProject(conf.AppwriteProjectId);
        this.bucket = new Storage(this.client)
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.AppwriteBucketId,ID.unique(),file)
        } catch (error) {
            console.log("appwrite :: uploadFile :: error : ",error);
            return false
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(conf.AppwriteBucketId,fileID)
            return true
        } catch (error) {
            console.log("appwrite :: deleteFile :: error : ",error);
            return false
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(conf.AppwriteBucketId,fileID)
    }
}

const storage = new StorageClass()

export default storage