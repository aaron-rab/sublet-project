import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        
        //gets rid of .md at the end of the name
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id, 
            ...matterResult.data
        };
    });

    return allPostsData.sort((a,b) => {
        if(a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    /*
    To do this with our api, import the fetch post function from our api at the top of the page
    then await for that information.
    Seperate the datafetching logic from the static generation logic. Makes code more maintainable
    */
    /* To do this with an API or database

    you could use ISR to revalidate the props every so often (10 seconds example)
    This means that next will just rebuild this specific page every 60 seconds
    fetch or ajax call.
    const res = await fetch('...');
    const posts = await res.json()
    return posts.map((post) => {
        return {
            params: {
                id: post.id
            },
            revalidate: dataChange ? 10 : false,  //says revalidate only if dataChanged, otherwise dont
        }
    });

    */
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    }
}

/*
Example getting data from API

    export async function getSortedPostsData() {
        // Instead of using the file system, fetch from an external API endpoint
        const res = await fetch('..');
        return res.json();
    }


OR query a database directly:

    import someDatabaseSDK from 'someDatabaseSDK'

    const databaseClient = someDatabaseSDK.createClient(...

    export async function getSortedPostsData() {
        //instead of the file system fetch post data from a database
        return databaseClient.query('SELECT posts...')
    }


*/