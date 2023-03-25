import { useEffect, useState } from "react";
import "./_addressUser.scss";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../../redux/features/userSlice";
import axios from "axios";
const AddressUser = () => {
  const [infoAdress, setInfoAdress] = useState({});
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updateAddress = async (data) => {
    const res = await axios({
      method: "PUT",
      url: "http://localhost:5000/api/auth/user",
      data: data,
      headers: { "Content-Type": "application/json" },
    });
    dispatch(checkUser(res.data.data));
  };
  useEffect(() => {
    setInfoAdress(user);
  }, [user]);
  const onFinish = (values) => {
    const dataUpdate = { _id: user._id, ...values };
    updateAddress(dataUpdate);
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="user__container">
        <div className="user__container-title">
          <h3 className="user__title-heading" style={{ fontSize: "2rem" }}>
            Địa chỉ của tôi
          </h3>
          <p className="user__title-desc" style={{ fontSize: "1.6rem" }}>
            Quản lý địa chỉ nhận hàng
          </p>
        </div>

        <div className="user__content">
          {typeof infoAdress.address !== "undefined" ? (
            <div className="user__address">
              <div className="user__address-info">
                <h3 className="address__info-name">{infoAdress.name}</h3>
                <p className="address__info">{infoAdress.address}</p>
              </div>
              <div className="user__adress-btn">
                <span className="address__btn-update" onClick={showModal}>
                  Cập nhật
                </span>
                <Modal
                  title="Cập nhật địa chỉ"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    autoComplete="off"
                  >
                    <div className="form__input-flex">
                      <Form.Item label="Họ và tên" name="name">
                        <Input name="name" />
                      </Form.Item>
                      <Form.Item label="Số điện thoại" name="phone">
                        <Input name="phone" />
                      </Form.Item>
                    </div>
                    <Form.Item label="Địa chỉ cụ thể" name="address">
                      <TextArea name="address" rows={4} />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                      Lưu
                    </Button>
                  </Form>
                </Modal>
              </div>
            </div>
          ) : (
            <div className="user__adress-btn">
              <span className="address__btn-update" onClick={showModal}>
                Cập nhật
              </span>
              <Modal
                title="Cập nhật địa chỉ"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <div className="form__input-flex">
                    <Form.Item label="Họ và tên" name="name">
                      <Input name="name" />
                    </Form.Item>
                    <Form.Item label="Số điện thoại" name="phone">
                      <Input name="phone" />
                    </Form.Item>
                  </div>
                  <Form.Item label="Địa chỉ cụ thể" name="address">
                    <TextArea name="address" rows={4} />
                  </Form.Item>
                  <Button type="primary" htmlType="submit">
                    Lưu
                  </Button>
                </Form>
              </Modal>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddressUser;
