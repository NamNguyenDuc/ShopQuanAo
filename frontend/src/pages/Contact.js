import ContactApi from '../api/contactAPI.js';
import { $ } from '../utils.js';

const Contact = {
    async render() {
        return`
            <form id="form-contact">
                <div class="col-12 mb-3">
                    <label for="name">Họ và tên <b class="text-danger">*</b></label>
                    <input type="text" id="contact-name"  placeholder="Nhập họ và tên" class="form-control"  />
                </div>
                <div class="col-12 mb-3">
                    <label for="email">Email <b class="text-danger">*</b></label>
                    <input type="email" id="contact-email" placeholder="Nhập email" class="form-control" />
                </div>
                <div class="col-12 mb-3">
                    <label for="sdt">Số điện thoại <b class="text-danger">*</b></label>
                    <input type="text" id="contact-phone" placeholder="Nhập số điện thoại" class="form-control" />
                </div>
                <div class="col-12 mb-3">
                    <label for="ghichu">Ghi chú </label>
                    <textarea name="" id="contact-note" cols="30" rows="5" placeholder="Ghi chú"
                        class="form-control"></textarea>
                </div>
                <div class="col-12 mb-3">
                    <input type="submit" value="Gửi liên hệ"  class="btn btn-primary form-control" />
                </div>
            </form>
        `
    },

    async afterRender() {
        $('#form-contact').addEventListener('submit', async e => {
            e.preventDefault();
            const { data : listContact  } = await ContactApi.getAll();
            const contact = {
                id: listContact.length + 1,
                name: $('#contact-name').value,
                email: $('#contact-email').value,
                phone: $('#contact-phone').value,
                note: $('#contact-note').value,
            };
            ContactApi.add(contact);
            location.href = '/';
            alert('Gửi liên hệ thành công ');
        });
    }

}

export default Contact;