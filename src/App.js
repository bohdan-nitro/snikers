import './App.css';
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {

    return (
        <>
            <div className="wrapper clear">
                    <Drawer/>
                <Header/>
                <div className="content p-40">
                    <div className="mb-40 d-flex align-center justify-between">
                        <h1> Все кросовки</h1>
                        <div className="search-block d-flex align-center">
                            <img src="/images/search.svg" alt="Search"/>
                            <input placeholder={"Поиск"}/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </>

    );
}

export default App;
