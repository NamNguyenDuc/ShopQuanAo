import ContactApi from "../api/ContactAPI";

const ListContact = {
    async render() {
        const { data : listContact } = await ContactApi.getAll();

        return `
            <div id="list-products">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên khách hàng</th>
                            <th scope="col">Email</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${listContact && listContact.map(contact => {
                        return `
                            <tr>
                                <td>${contact.id}</td>
                                <td>${contact.name}</td>
                                <td>${contact.email}</td>
                                <td>${contact.phone}</td>
                                <td>${contact.note}</td>
                            </tr>
                        `
                    }).join(' ')}
                        
                    </tbody>
                </table>
            </div>
        `
    },

    async afterRender() {
        
    }
}
export default ListContact;