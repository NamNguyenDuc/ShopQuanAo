import NewAPI from "../api/newAPI";
import { $, parseRequestUrl } from "../utils";

const NewDetail = { 
    async render() {
        const { id } = parseRequestUrl();
        const { data: detail } = await NewAPI.get(id);

        return `
            <div>
                <h2>${detail.title}</h2>
                <div id="detail">${detail.content}</div>
            </div>
        `
    },

    async afterRender() {
        
    }
}

export default NewDetail;