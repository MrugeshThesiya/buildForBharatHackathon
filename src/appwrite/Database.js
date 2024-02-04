import conf from '../conf/conf'
import { Client, Databases, Storage, Query } from "appwrite";

export class DatabaseService {
    client = new Client();
    database;

    constructor() {
        this.client.setEndpoint(conf.AppwriteUrl).setProject(conf.AppwriteProjectId);
        this.database = new Databases(this.client)
    }

    async createPost({ title, slug, content, image, status, userid }) {
        try {
            return await this.database.createDocument(conf.AppwriteDatabaseId, conf.AppwriteCollectionId, slug, {
                title,
                content,
                image,
                status,
                userid
            })
        } catch (error) {
            throw error
        }

    }

    async updatePost(slug, { title, post, image, status, userId }) {
        try {
            return await this.database.updateDocument(conf.AppwriteDatabaseId, conf.AppwriteCollectionId, slug, {
                title,
                post,
                image,
                status,
                userId
            })
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(conf.AppwriteDatabaseId, conf.AppwriteCollectionId, slug)
            return true
        } catch (error) {
            console.log("appwrite :: deletepost :: error : ", error);
            return false
        }

    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(conf.AppwriteDatabaseId, conf.AppwriteCollectionId, slug)
        } catch (error) {
            console.log("appwrite :: getpost :: error : ", error);
            return false
        }
    }

    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(conf.AppwriteDatabaseId, conf.AppwriteCollectionId, queries)
        } catch (error) {
            console.log("appwrite :: getAllPosts :: error : ", error);
            return false
        }
    }
}

const databaseService = new DatabaseService()


export default databaseService