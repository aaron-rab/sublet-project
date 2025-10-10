export const getAllPosts = () => {
    return new Promise((resolve, reject) => {
        fetch(`/api/getUserPosts`, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(res => {
                res
                    .json()
                    .then(json => resolve(json))
                    .catch(e => reject(e))
            })
            .catch(e => reject(e))
    })
}


export const createPost = ({accessToken, postData}) => {
    return new Promise((resolve, reject) => {
        fetch('/api/createPost', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": accessToken
            }
        })
            .then(res => {
                res
                    .json()
                    .then(json => resolve(json))
                    .catch(e => reject(e))
            })
            .catch(e => reject(e))
    })
}


//export const createPost = (accessToken, postData) => {
    //     return new Promise((resolve, reject) => {
    //         fetch('/api/createPost', {
    //             method: 'POST',
    //             body: JSON.stringify(postData),
    //             headers: {
    //                 "Accept": "application/json",
    //                 "Content-Type": "application/json",
    //                 "Authorization": accessToken
    //             }
    //         })
    //             .then(res => {
    //                 res
    //                     .json()
    //                     .then(json => resolve(json))
    //                     .catch(e => reject(e))
    //             })
    //             .catch(e => reject(e))
    //     })
    // }
    