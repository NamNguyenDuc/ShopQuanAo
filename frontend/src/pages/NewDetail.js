import NewAPI from "../api/newAPI";
import { parseRequestUrl } from "../utils";

const NewDetail = { 
    async render() {
        const { id } = parseRequestUrl();
        const { data: detail } = await NewAPI.get(id);

        return `
            <div style="background: #fff; padding: 5px">
                <h2>${detail.title}</h2>
                <div>${detail.description}</div>
                <div>${detail.content}</div>
            </div>
        `
    },

    async afterRender() {

    }
}

export default NewDetail;