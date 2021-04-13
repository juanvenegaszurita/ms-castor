export const environment = {
  SQL_HOST: `${process.env.SQL_HOST}`,
  SQL_PASSWORD: `${process.env.SQL_PASSWORD}`,
  SQL_USER: `${process.env.SQL_USER}`,
  SQL_DATABASE: `${process.env.SQL_DATABASE}`,

  TRANSBANK_URL_V1: `${process.env.TRANSBANK_URL_V1}`,
  TRANSBANK_TBK_API_KEY_ID: `${process.env.TRANSBANK_TBK_API_KEY_ID}`,
  TRANSBANK_TBK_API_KEY_SECRET: `${process.env.TRANSBANK_TBK_API_KEY_SECRET}`,
  TRANSBANK_CONTENT_TYPE: `${process.env.TRANSBANK_CONTENT_TYPE}`,

  URL_CASTOR: `${process.env.URL_CASTOR}`,

  FIREBASE_CASTOR: `${process.env.FIREBASE_CASTOR}`,
};