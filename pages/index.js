import Head from 'next/head'
import Service from "../components/Service";
import {wrapper} from "../redux/getStore";
import {setServices} from "../redux/slices/servicesSlice";
import {useSelector} from "react-redux";

const Home = props => {
    const services = useSelector(state => state.services.entities);

    return (
        <div className="container">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        Services:
        {services.map(s => (
            <Service key={s.nServiceId} name={s.sName}/>
        ))}
    </div>
  )
}

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
    await store.dispatch(setServices([{nServiceId: 1, sName: "Tjänst 1"}]));
    return { props: { services: store.getState().services } }
});