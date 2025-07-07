import { Link, Links, useParams } from "react-router-dom";
import { NEWS } from "../../constants/news";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { PrimaryButton } from "../../components/ui/buttons/Buttons";

const  NewsDetail = () => {
    const { id } = useParams();
    const newsItem = NEWS.find((news) => news.slug === id); 

    if (!newsItem) {
      return <div>Noticia no encontrada.</div>;
    }
    return (
        <>
        <Header/>
            <img src={newsItem.heroImage} alt={newsItem.title} />
      <h2>{newsItem.title}</h2>
      <p>{newsItem.datePublished}</p>
      <p>{newsItem.body.summary}</p>

      {/* Mostrar imágenes directamente */}
      {newsItem.body.images && newsItem.body.images[0] && (
        <img src={newsItem.body.images[0]} alt="Image 1" />
      )}
      {newsItem.body.images && newsItem.body.images[1] && (
        <img src={newsItem.body.images[1]} alt="Image 2" />
      )}

      <div>
        {newsItem.body.sections.map((section, index) => (
          <div key={index}>
            <h3>{section.heading}</h3>
            <p>{section.content}</p>
          </div>
        ))}
 <Link to={newsItem.cta.url}>
          <PrimaryButton>{newsItem.cta.text}</PrimaryButton>
        </Link>
      </div>
          <Footer/>
        </>
      );
    };
    
    export default NewsDetail;