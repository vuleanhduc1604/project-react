import React from 'react';

const Contact = () => {
    return (
        <div className="contact-us padding-wrapper text-center">
        <p className="content-header">Liên hệ <span className="grey-bold">với chúng tôi</span></p>
        <div className="input-wrapper d-flex justify-content-center">
            <div className="left-wrapper">
                <input type="text" className="name" placeholder="Họ và tên..."/>
                <input type="tel" className="phone-number" placeholder="Số điện thoại..."/>
                <input type="text" className="company" placeholder="Tên Doanh nghiệp"/>
            </div>
            <div className="right-wrapper">
                <input type="email" class="email" placeholder="Email..."/>
                <textarea className="problem" placeholder="Nội dung cần tư vấn"></textarea>
            </div>
        </div>
        <button className="submit-contact">Gửi</button>
    </div>
    );
};

export default Contact;