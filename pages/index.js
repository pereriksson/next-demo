import Head from 'next/head'
import Link from "next/link"
import {useEffect} from "react";
import Service from "../components/Service";
import {wrapper} from "../redux/getStore";
import {fetchServices} from "../redux/slices/servicesSlice";
import {useSelector} from "react-redux";

const Home = props => {
    // TODO: Why empty?
    const a = useSelector(state => state.services);

    const {services} = props;
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
    await store.dispatch(fetchServices());
    return { props: { services: store.getState().services.entities } }
});