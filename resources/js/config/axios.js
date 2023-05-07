export default function axiosReq(){
    const post = async(route, data) => {
        let result = "";
        await axios.post('/api/'+route, data)
        .then(response => {
            result = response;
        })
        return result;
    }

    return {
        post
    }
}