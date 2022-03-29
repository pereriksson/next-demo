import { wrapper } from '../redux/getStore';
import {fetchServices} from "../redux/slices/servicesSlice";
import {Provider} from 'react-redux';

const WrappedApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp);