import { Toast } from "vant";
import { Base64 } from "js-base64";

class Utils {
  /**
   * 打开toast
   * @param option loading 配置
   */
  showToast = option => {
    if (!option) return;
    Toast(option);
  };

  /**
   * 关闭toast
   */
  hideToast = () => {
    Toast.clear();
  };

  /**
   * 显示loading
   */
  showLoading = () => {
    this.showToast({ type: "loading" });
  };

  /**
   * 关闭loading
   */
  hideLoading = () => {
    this.hideToast();
  };

  /**
   * 加密
   */
  encrypt = str => {
    if (!str) return "";
    return Base64.encode(str);
  };

  /**
   * 解密
   */
  decrypt = str => {
    if (!str) return "";
    return Base64.decode(str);
  };

  /**
   * 从localStorage中设置值
   */
  setLocal = (name, item) => {
    if (!item) return;
    window.localStorage.setItem(name, this.encrypt(item));
  };

  /**
   * 从localStorage中获取值
   */
  getLocal = name => {
    const item = window.localStorage.getItem(name);
    return item ? this.decrypt(item) : null;
  };

  /**
   * 从localStorage中移除token
   */
  removeLocal = name => {
    window.localStorage.removeItem(name);
  };

  /**
   * 从sessionStorage中设置值
   */
  setSession = (name, item) => {
    if (!item) return;
    window.localStorage.setItem(name, this.encrypt(item));
  };

  /**
   * 从sessionStorage中获取值
   */
  getSession = name => {
    const item = window.sessionStorage.getItem(name);
    return item ? this.decrypt(item) : null;
  };

  /**
   * 从sessionStorage中移除
   */
  removeSession = name => {
    window.sessionStorage.removeItem(name);
  };
}

export default new Utils();
