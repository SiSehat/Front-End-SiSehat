import drugsStyle from '../styles/Drug.module.css';

export const getStaticProps = async () => {
  const response = await fetch(`https://api-si-sehat.vercel.app/drug`);
  const datas = await response.json();
  
  return {
    props: {
      drugs: datas.dataDrug.data,
    },
  }
}

const ListItems = ({ drugs }) => {
  return (
    <div className={drugsStyle.bodyDrug}>
      <h3 className={drugsStyle.headingDrug}>Obat yang Direkomendasikan</h3>
      <div className={drugsStyle.cardBodyDrugs}>
        <strong className={drugsStyle.cardTitle}>Nama Obat</strong>
        <p className={drugsStyle.cardDesc}>Deskripsi :</p>
        <p className={drugsStyle.cardCategory}>Kategori :</p>
        <button className={drugsStyle.buttonCard}>Detail</button>
      </div>
      <ul>
        {drugs.dataDrug.data.map((drug) => (
          <div key={drug.id}>
            <li>{drug.data}</li>
          </div>
        ))}
      </ul>
    </div>)
};

export default ListItems