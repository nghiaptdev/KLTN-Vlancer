import { Dropdown, Image, MenuProps } from "antd";
import BELL_IMG from "@assets/images/icon/bell.svg";
import CHAT_IMG from "@assets/images/icon/chat.svg";
import DEFAULT_IMG from "@assets/images/icon/avatar.jpg";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import { getMyUser } from "../../../pages/auth/service/api";
import { useEffect } from "react";

const MenuAuth = () => {
  const { t } = useTranslation("auth");

  const userData: any = getMyUser();
  console.log("me: ", userData);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p>{t("profile")}</p>,
    },
    {
      key: "2",
      label: <p>{t("edit-profile")}</p>,
    },
    {
      key: "3",
      label: <p>{t("setting-notification")}</p>,
    },
    {
      key: "4",
      label: <p>{t("logout")}</p>,
    },
  ];
  return (
    <div className="menu-auth">
      <Image
        src={BELL_IMG}
        alt="bell_img"
        preview={false}
        className="cursor-pointer"
      />
      <Image
        src={CHAT_IMG}
        alt="chat_img"
        preview={false}
        className="cursor-pointer"
      />
      <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>
        <div className="account-menu">
          <Image
            src={DEFAULT_IMG}
            alt="avatar_img"
            preview={false}
            className="cursor-pointer avatar-img"
          />
          <div>
            <div className="flex gap-2">
              <h1>{userData?.username}</h1>
              <span>id. {userData?.id}</span>
            </div>

            <div className="flex gap-2">
              <span>Thuong</span>
              <span>credit</span>
            </div>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default MenuAuth;
