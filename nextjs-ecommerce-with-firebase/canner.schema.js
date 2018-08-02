/** @jsx c */
import c from "canner-script";
import { connector, storage } from "./schema/utils";
import Products from "./schema/products.schema";
import Categories from "./schema/categories.schema";
import Store from "./schema/store.schema";
import Shipments from './schema/shipments.schema';
import Orders from './schema/orders.schema';

export default (
  <root connector={connector}>
    <Store storage={storage} />
    <Products storage={storage} />
    <Categories storage={storage} />
    <Shipments storage={storage}/>
    <Orders storage={storage}/>
  </root>
);
