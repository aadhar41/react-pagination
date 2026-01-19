const paginate = (data) => {
    const followersPerPage = 9;
    const pages = Math.ceil(data.length / followersPerPage);
    const newFollowers = Array.from({ length: pages }, (value, index) => {
        const start = index * followersPerPage;
        const end = start + followersPerPage;
        return data.slice(start, end);
    });
    return newFollowers;
}

export default paginate
