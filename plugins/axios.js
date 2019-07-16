export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    config.url = 'http://testapi.ynjjyy.cn/api/v1/' + config.url;
    console.info(config)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400')
    }
  })
}
