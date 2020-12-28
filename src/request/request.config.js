import { Utils, CONSTANT } from "../utiles/modules-index";
import axios from "./index";

/**
 * request 处理
 */
class Request {
  SUCCESS_CODE = 200;
  METHODS = ["GET", "POST", "PUT", "DELETE"];

  /**
   * 设置请求体
   */
  setHeaders = (config = {}) => {
    if (!config) return {}; // 校验config
    if (!config.url) return {}; // 校验url

    let type = config.type || CONSTANT.REQUEST.DEFAULT_URL_FORMAT;
    if (type.toUpperCase() === CONSTANT.REQUEST.DEFAULT_URL_FORMAT) {
      type = CONSTANT.REQUEST.DEFAULT_CONTENT_TYPE;
    } else if (type.toUpperCase() === "FORM") {
      type = undefined;
    } else {
      type = CONSTANT.REQUEST.DEFAULT_FORM_URLENCODED;
    }
    let headers = {};
    if (type) {
      headers[CONSTANT.REQUEST.CONTENT_TYPE_NAME] = type;
    }
    headers[CONSTANT.REQUEST.X_REQUESTED_WITH] =
      CONSTANT.REQUEST.DEFAULT_X_REQUESTED_WITH;
    headers[CONSTANT.TOKEN_NAME] =
      Utils.getLocal(CONSTANT.LOCAL_TOKEN_NAME) || "";
    return headers;
  };

  /**
   * 请求处理
   * @param config 请求config
   */
  requestConfig = config => {
    Utils.showLoading();
    config.headers = this.setHeaders(config);
    return config;
  };

  /**
   * 请求失败处理
   * @param err
   */
  requestError = error => {
    Utils.hideLoading();
    return Promise.reject(error);
  };

  /**
   * 响应处理
   * @param response 返回体
   */
  responseConfig = response => {
    Utils.hideLoading();
    if (response.status !== CONSTANT.CODE.SUCCESS) {
      // 不成功
      return response;
    } else {
      const data = response.data;
      if (data.success !== CONSTANT.CODE.SUCCESS_RES) {
        Utils.showToast(data.msg || CONSTANT.ERROR_MESSAGE);
      }
      // 成功
      return data;
    }
  };

  /**
   * 响应失败处理
   * @param err
   */
  reponseError = error => {
    Utils.showToast(CONSTANT.ERROR_MESSAGE);
    return Promise.reject(error);
  };

  send = config => {
    return new Promise((resolve, reject) => {
      axios(config)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  };

  /**
   * get请求
   * @param config
   */
  get = config => {
    return this.send(Object.assign({}, config, { method: this.METHODS[0] }));
  };

  /**
   * post请求
   * @param config
   */
  post = config => {
    return this.send(Object.assign({}, config, { method: this.METHODS[1] }));
  };

  /**
   * put请求
   * @param config
   */
  put = config => {
    return this.send(Object.assign({}, config, { method: this.METHODS[2] }));
  };

  /**
   * delete请求
   * @param config
   */
  delete = config => {
    return this.send(Object.assign({}, config, { method: this.METHODS[3] }));
  };
}

export default new Request();
