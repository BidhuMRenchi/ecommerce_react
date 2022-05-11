import React, { useState } from "react";
import { Button, Modal } from "antd";
import ChangePass from "./password";
import "../assets/home.css";

const ChangePasswordForm = ({ visible, onCreate, onCancel }) => {
  return (
    <Modal
      visible={visible}
      title="Change Password"
      cancelText="Cancel"
      okText="."
      onCancel={onCancel}
    >
      <div className="changepass_modal">
      <ChangePass />
      </div>
      
    </Modal>
  );
};

const ChangePassword = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    // setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Change Password
      </Button>
      <ChangePasswordForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ChangePassword;
