export const show = async (request, response) => {
    const { postId } = request.params;
    response.send(`hello, post ${ postId }`);
}