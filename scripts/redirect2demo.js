(function () {
  const DEMO_HOST_DEV = 'http://localhost:10086/dist';
  const DEMO_HOST_PROD = 'https://h5.艺蔚.wang';

  const { hostname, search } = window.location;

  const searchObj = search
    .substr(1)
    .split('&')
    .reduce((acc, curr) => {
      const [key, value] = curr.split('=');
      acc[key] = value;
      return acc;
    }, {});

  const redirectPath = searchObj.redirect;

  if (!redirectPath) {
    return;
  }

  if (hostname === 'localhost') {
    window.location.href = `${DEMO_HOST_DEV}${redirectPath}`;
  } else {
    window.location.href = `${DEMO_HOST_PROD}${redirectPath}`;
  }
})();
