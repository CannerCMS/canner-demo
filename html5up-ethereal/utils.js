import {FirebaseRtdbAdminConnector} from 'canner-graphql-interface';
import {ImgurService} from '@canner/image-service-config';

exports.connector = new FirebaseRtdbAdminConnector({
  projectId: <your projectId>
});


exports.storage = new ImgurService({
  clientId: <your imgur id>
}).getServiceConfig();
