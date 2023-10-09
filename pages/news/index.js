//our-domain.cmo/news
import Link from 'next/link'

const NewsPage = () =>{
    return <>
    <h1>Witaj na stronie z wiadomościami!</h1>
    <ul>
        <li><Link href="/news/NextJS-to-świetny-Framework">NextJS to świetny Framework</Link></li>
        <li>Jakiś tak artykuł</li>
    </ul>
    </> 
}
export default NewsPage;    