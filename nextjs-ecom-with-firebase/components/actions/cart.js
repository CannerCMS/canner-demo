import isUndefined from "lodash/isUndefined";
import { notification } from "antd";

const openNotification = () => {
  notification.success({
    message: "新增購物車成功",
    description: `已新增商品。`
  });
};

const removeNotification = () => {
  notification.success({
    message: "變更購物車成功",
    description: `已移除商品。`
  });
};

const editNotification = () => {
  notification.success({
    message: "變更購物車成功",
    description: `已變更商品數量。`
  });
};

export function getCart() {
  let carts = JSON.parse(localStorage.getItem("carts")) || [];
  return carts;
}

export function addCart(id, model = "", count = 1) {
  let carts = JSON.parse(localStorage.getItem("carts")) || [];
  const prod = carts.find(prod => prod.id === id);
  if (isUndefined(prod)) {
    carts.push({ id, count, model });
    localStorage.setItem("carts", JSON.stringify(carts));
  }
  openNotification();
}

export function removeCart(id, model = "") {
  let carts = JSON.parse(localStorage.getItem("carts")) || [];
  carts = carts.filter(prod => !(prod.id === id && prod.model === model));
  localStorage.setItem("carts", JSON.stringify(carts));
  removeNotification();
}

export function removeAllCart() {
  localStorage.removeItem("carts");
  removeNotification();
}

export function minusCartCount(id, model = "") {
  let carts = JSON.parse(localStorage.getItem("carts")) || [];
  carts = carts
    .map(prod => {
      if (prod.id === id && prod.model === model) {
        prod.count -= 1;
      }
      return prod;
    })
    .filter(prod => prod.count > 0);
  localStorage.setItem("carts", JSON.stringify(carts));
  editNotification();
}

export function plusCartCount(id, model = "", count = 1) {
  let carts = JSON.parse(localStorage.getItem("carts")) || [];
  carts = carts.map(prod => {
    if (prod.id === id && prod.model === model) {
      prod.count += count;
    }
    return prod;
  });
  localStorage.setItem("carts", JSON.stringify(carts));
  openNotification();
}
