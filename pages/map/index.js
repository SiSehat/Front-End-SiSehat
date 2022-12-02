import { useState } from "react";
import Footer from "../../components/footer";
import NavBar from "../../components/nav-bar";

export default function Map() {
    const [expand, setExpand] = useState(false);

    return (
        <>
            <header>
                <NavBar />
            </header>
            
            <main className="container">
                <div className={ expand ? 'wrapper-sidebar' : 'wrapper-sidebar close' }>
                    <button type="button" onClick={() => setExpand(!expand)} style={{ right: expand ? '-5vh' : '-25vh' }} title="expand-sidebar" id="expand-list-hospital">Expand</button>
                    <div className="search">
                        <input type="text" placeholder="Cari rumah sakit ...." />
                    </div>

                    <div className="wrapper-list">
                        <div className="item-hospital">
                            <div className="hospital">
                                <img src="/hospital.svg" alt="gambar rumah sakit" />
                            </div>
                            <section>
                                <h2>Title Rumah Sakit</h2>
                                <p>Buka 24Jam</p>
                            </section>
                        </div>
                        <div className="item-hospital">
                            <div className="hospital">
                                <img src="/hospital.svg" alt="gambar rumah sakit" />
                            </div>
                            <section>
                                <h2>Title Rumah Sakit</h2>
                                <p>Buka 24Jam</p>
                            </section>
                        </div>
                        <div className="item-hospital">
                            <div className="hospital">
                                <img src="/hospital.svg" alt="gambar rumah sakit" />
                            </div>
                            <section>
                                <h2>Title Rumah Sakit</h2>
                                <p>Buka 24Jam</p>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="wrapper-map">
                    {/* <h1>map</h1> */}

                </div>
            </main>

            <Footer />
        </>
    )
}