import NewAPI from "../api/newAPI";

const News = {
    async render() {
        const { data: news } = await NewAPI.getAll();
        console.log(news, 'hihi');
        return `
            <h2>Tin tức</h2>
            ${news.map(item => {
                return `
                    <div class="border border-success mb-3">
                        <div><a href="#/newdetail/${item.id}">${item.title}</a></div>
                        <div>${item.description}</div>
                        <div>${item.name}</div>
                    </div>
                `
            }).join(' ')}
        `
    },

    async afterRender() {

    }
}

export default News;