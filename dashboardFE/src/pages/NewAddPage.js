import NewAPI from '../api/NewAPI.js';
import { $ } from '../utils.js';
import { firebaseConfig } from '../firebbase/index.js';

const NewAddPage = {
    async render() {
        return /*html*/`
        <h1 style= "text-align: center; color: red;"> Thêm Tin Tức </h1>
        <form id="form-new">
        <div class="form-group">
            <div class="row">
                <div class="col-12 mb-3">
                    <label for="name">Tiêu đề <b class="text-danger">*</b></label>
                    <input type="text" placeholder="Nhập tên tiêu đề" id="new-title" class="form-control" />
                </div>
                <div class="col-12 mb-3">
                    <label for="price">Nội dung tin tức <b class="text-danger">*</b></label>
                    <textarea name="" id="new-content" cols="30" rows="10" placeholder="Nội dung"
                        class="form-control"></textarea>
                </div>
                <div class="col-12 mb-3">
                    <label for="file">Ảnh <b class="text-danger">*</b></label>
                    <input type="file" placeholder="" id="new-image" class="form-control" />
                </div>
                <div class="col-12 mb-3">
                    <label for="price">Người viết <b class="text-danger">*</b></label>
                    <input type="text" placeholder="Nhập người viết" id="new-name" class="form-control" />
                </div>
                <div class="col-12">
                    <input type="submit" class="btn btn-primary w-100" value="Thêm sản phẩm mới" />
                </div>
            </div>
        </div>
    </form>
        `
    },

    async afterRender() {
        $('#form-new').addEventListener('submit', async e => {
            e.preventDefault();
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            const { data: addnews } = await NewAPI.getAll();
            const newImage = $('#new-image').files[0];
            let storageRef = firebase.storage().ref(`images/${newImage.name}`);
            storageRef.put(newImage).then(function () {
                storageRef.getDownloadURL().then((url) => {
                    const news = {
                        id: addnews.length + 1,
                        title: $('#new-title').value,
                        content: $('#new-content').value,
                        name: $('#new-name').value,
                        image: url
                    }
                    NewAPI.add(news);
                    location.href = '#/news'
                    alert('Thêm mới tin tức thành công');
                    location.reload();
                })
            })
        })
    }
}
export default NewAddPage;