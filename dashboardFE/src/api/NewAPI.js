import { axiosClient } from './axiosClient';

const NewAPI = {
    getAll() {
        const url = `/news`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/news/${id}`;
        return axiosClient.get(url);
    },
    add(news) {
        const url = `/news`;
        return axiosClient.post(url, news);
    },

    update(id, newabc) {
        const url = `/news/${id}`;
        return axiosClient.put(url, newabc);
    },

    remove(id) {
        const url = `/news/${id}`;
        return axiosClient.delete(url);
    }
}
export default NewAPI;