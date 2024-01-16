import { KJUR } from 'jsrsasign'
// https://www.npmjs.com/package/jsrsasign

interface Config {
  sessionName: string;
  role: number;
  sessionKey: string;
  userIdentity: string[];
}

function generateSignature(params: Config) {
  console.log(import.meta.env);

  const iat = Math.round(new Date().getTime() / 1000) - 30
  const exp = iat + 60 * 60 * 2
  const oHeader = { alg: 'HS256', typ: 'JWT' }

  const oPayload = {
    app_key: import.meta.env.VITE_ZOOM_SDK_KEY,
    tpc: params.sessionName,
    role_type: params.role,
    session_key: params.sessionKey,
    user_identity: params.userIdentity,
    version: 1,
    iat: iat,
    exp: exp
  }

  const sHeader = JSON.stringify(oHeader)
  const sPayload = JSON.stringify(oPayload)
  const sdkJWT = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, import.meta.env.VITE_ZOOM_SDK_SECRET)
  return sdkJWT
}

export default generateSignature;