import { Link, useParams } from "react-router-dom";
import { NEWS } from "../../constants/news";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { PrimaryButton } from "../../components/ui/buttons/Buttons";
import { StyledContentWrapper, StyledHeroImg } from "./news-detail-styles";

const  NewsDetail = () => {
    const { id } = useParams();
    console.log(id); 
    const newsItem = NEWS.find((news) => news.slug === id); 

    if (!newsItem) {
      return <div>Noticia no encontrada.</div>;
    }
    return (
        <>
        <Header/>
            <StyledHeroImg src={newsItem.heroImage} alt={newsItem.title} />
<StyledContentWrapper>
    <div>
      <h2>{newsItem.title}</h2>
      <p>{newsItem.datePublished}</p>
      <p>{newsItem.body.summary}</p>
      </div>

      {newsItem.body.images && newsItem.body.images[0] && (
        <img src={newsItem.body.images[0]} />
      )}
      <div>
        {newsItem.body.sections.map((section, index) => (
          <div key={index}>
            <h3>{section.heading}</h3>
            <p>{section.content}</p>
          </div>
        ))}
         {newsItem.body.images && newsItem.body.images[1] && (
        <img src={newsItem.body.images[1]} alt="Image 2" />
      )}
 <Link to={newsItem.cta.url}>
          <PrimaryButton>{newsItem.cta.text}</PrimaryButton>
        </Link>
      </div>
      </StyledContentWrapper>
          <Footer/>
        </>
      );
    };
    
    export default NewsDetail;