
import conf from '../../conf/conf';

import { Client, Databases, Storage, Query } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (err) {
            console.log('Appwrite service :: getPost() :: ', err);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (err) {
            console.log('Appwrite service :: getPost() :: ', err);
            return false;
        }
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (err) {
            console.log('Appwrite service :: createPost() :: ', err);
            return false;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status
                }
            )
        } catch (err) {
            console.log('Appwrite service :: updatePost() :: ', err);
            return false;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (err) {
            console.log('Appwrite service :: deleteDocument() :: ', err);
            return false;
        }
    }

    //// Storage service

    async uploadFile(file) {
        try {
            return await this.bucket.updateFile(conf.appwriteBucketId, ID.unique(), file)
        } catch (err) {
            console.log('Appwrite service :: uploadFile() :: ', err);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
        } catch (err) {
            console.log('Appwrite service :: deleteFile() :: ', err);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId).href
    }
}

const service = new Service();
export default service;

