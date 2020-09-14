const querystring = require('querystring')
const request = require('./request')
const { appendParam, randomString } = require('./utils')
const { API } = require('./const')

function mibrain(operation, method, { cookie, deviceId }) {
  const param = {
    deviceId: deviceId,
    message: JSON.stringify(operation),
    method: method,
    path: 'mibrain',
    requestId: randomString(30)
  }
  const url = appendParam(API.USBS, querystring.stringify(param))

  return request({
    url,
    method: 'POST',
    headers: {
      Cookie: cookie
    }
  })
}
// 获取最新的一条对话记录
async function nlpResult({ cookie, deviceId }) {
  const res = await request({
    url: `https://userprofile.mina.mi.com/device_profile/conversation`,
    method: 'GET',
    data: {
      timestamp: Date.now(),
      limit: 1,
      requestId: randomString(30)
    },
    headers: {
      Cookie: `${cookie};deviceId=${deviceId}`
    }
  })
  const { timestamp, recordGroup } = res.data.records[0]
  const { content } = JSON.parse(recordGroup).user

  return {
    datetime: new Date(timestamp).toLocaleString(),
    timestamp,
    content
  }
}

// {"nlp_text":"关闭餐吧台灯","nlp":1,"nlp_execute":1,"tts":0,"tts_play":0}
function aiService(msg, tts, tts_play, { cookie, deviceId }) {
  const message = { 'nlp_text': msg, 'nlp': 1, 'nlp_execute': 1, 'tts': tts, 'tts_play': tts_play }
  return mibrain(message, 'ai_service', { cookie, deviceId })
}

module.exports = { nlpResult: nlpResult, aiService: aiService }
