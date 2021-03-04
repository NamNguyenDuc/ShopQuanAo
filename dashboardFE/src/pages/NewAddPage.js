import NewAPI from '../api/NewAPI.js';
import { $ } from '../utils.js';
import firebase from 'firebase';
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
                            <span id="validate-title" class="text-error">Tên sản phẩm không được để trống</span>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="price">Nội dung tin tức <b class="text-danger">*</b></label>
                            <textarea name="" id="new-content" cols="30" rows="10" placeholder="Nội dung"
                                class="form-control"></textarea>
                            <span id="validate-content" class="text-error">Tên sản phẩm không được để trống</span>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="file">Ảnh <b class="text-danger">*</b></label>
                            <input type="file" placeholder="" id="new-image" class="form-control" />
                            <span id="validate-image" class="text-error">Tên sản phẩm không được để trống</span>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="price">Người viết <b class="text-danger">*</b></label>
                            <input type="text" placeholder="Nhập người viết" id="new-name" class="form-control" />
                            <span id="validate-name" class="text-error">Tên sản phẩm không được để trống</span>
                        </div>
                        <div class="col-12">
                            <input type="submit" class="btn btn-primary w-100" value="Thêm tức mới" />
                        </div>
                    </div>  
                </div>
            </form>
        `
    },

    async afterRender() {
        $('#form-new').addEventListener('submit', async e => {
            e.preventDefault();
            // if (this.validateItem('new-title', 'validate-title') && this.validateItem('new-content', 'validate-content') && this.validateItem('new-image', 'validate-image') && this.validateItem('validate-name', 'new-name')) {
            console.log(123);
            const { data: listNew } = await NewAPI.getAll();
            const neww = {
                id: listNew.length + 1,
                title: $('#new-title').value,
                content: $('#new-content').value,
                name: $('#new-image').value,
            };
            // console.log(neww);
            NewAPI.add(neww);
            location.href = '#/news';
            location.reload();
            alert('Gửi liên hệ thành công ');
            // }

        });
    },
    validateItem(id, idText) {
        if (!document.getElementById(id).value) {
            document.getElementById(idText).style.display = 'block';
            document.getElementById(id).style.borderColor = 'red';
            return false;
        }
        document.getElementById(idText).style.display = 'none';
        document.getElementById(id).style.borderColor = '';
        return true;
    }
}
export default NewAddPage;