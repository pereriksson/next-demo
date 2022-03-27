import { wrapper } from '../redux/getStore';

const WrappedApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp);