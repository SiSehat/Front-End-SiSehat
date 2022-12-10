export default function WrapperListHospitals({ hospitals }) {
    if (hospitals === null) return null
    return (
        <>
            {
                hospitals.hospital.map((faskes, key) => (
                    <div className="item-hospital" key={key}>
                        <section>
                            <p id="tipeFaskes">{faskes.TipeFaskes}</p>
                            <h3>{faskes.NamaFaskes}</h3>
                            <span>
                                <span><strong>{faskes.Provinsi}</strong></span> |
                                <span><strong>{faskes.AlamatFaskes}</strong></span>
                            </span>
                            <p>{faskes.TelpFaskes}</p>
                            <a href={`${faskes.LatLongFaskes}`} target="_blank">Go {faskes.TipeFaskes}</a>
                        </section>
                    </div>
                ))
            }
        </>
    )
}