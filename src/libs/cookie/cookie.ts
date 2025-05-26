import Cookies from "js-cookie";

class Cookie {
  public getCookie(key: string): string | undefined {
    let item = undefined;
    if (Cookies.get(key) !== undefined) {
      item = Cookies.get(key);
    }
    return item;
  }

  public setCookie(key: string, value: string): void {
    Cookies.set(key, value);
  }

  public removeCookie(key: string): void {
    Cookies.remove(key);
  }
}
const cookies = new Cookie();
export default cookies;
