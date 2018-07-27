import { FirebaseRtdbAdminConnector } from "canner-graphql-interface";
import { FirebaseClientService } from "@canner/image-service-config";
import firebase from "firebase";

// Install @canner/image-service-config and uncomment the codes below to upload image in your CMS
// More Info: https://www.canner.io/docs/guides-image-upload.html
// --------------------------------------
exports.storage = new FirebaseClientService({
  firebase,
  dir: "CANNER_CMS",
  hash: true
}).getServiceConfig();

exports.connector = new FirebaseRtdbAdminConnector({
  projectId: "canner-ecommerce-demo"
});
