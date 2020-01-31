



export default function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        magic: 0,
        might: 0,
        completed: {}
    };

    return user;

}

