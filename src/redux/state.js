import {rerenderEntireTree} from "./../render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Привет', likesCount: 11},
            {id: 2, message: 'Как дела?', likesCount: 12},
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Whats up'},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Danil'},
            {id: 3, name: 'Vitaliy'},
            {id: 4, name: 'Yana'}
        ]
    }
};

export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}


export default state;







