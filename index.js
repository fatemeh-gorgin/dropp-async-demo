console.log('befor');
//callback
// const user = getUser(1 , (user) =>{
//     // console.log('user' , user)
//     getRepositories(user.gitHubUsername ,(repose) =>{
//         console.log("repos" , repose)
//     } )
// })

//promise
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('commits', commits))
//     .catch(err => console.log("error", err.message))

//async and await 
async function displayCommit() {
    try {
        const user = await getUser(1)
        const repos = await getRepositories(user.gitHubUsername)
        const commits = await getCommits(repos[0])
    } catch (err) {
        console.log(err.message);
    }

}
displayCommit()
console.log('after')

//callback way 
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('reading a user from a database')
            resolve({ id: id, gitHubUsername: "fatemeh" })
        }, 2000)
    })

}
//callback
// function getRepositories(username , callback){
//     setTimeout(() =>{
//         callback(` ${username} : ['repo1' , 'repo2' , 'repo3']`)
//     } , 2000)
// }
//promise
function getRepositories(username) {
    return new Promise((resolve, reject) => {
        console.log('repository')
        setTimeout(() => {
            resolve(` ${username} : ['repo1' , 'repo2' , 'repo3']`)
        }, 2000)
    })

}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(('calling gitHub API'));
            resolve(["commits", 'commits2'])
        }, 2000)
    })

}